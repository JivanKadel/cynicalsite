"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/sendQuery";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FormErrors {
  fullName?: string;
  companyEmail?: string;
  companyName?: string;
  title?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyEmail: "",
    companyName: "",
    title: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "A valid name is required";
    }

    // Company Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = "Email is Required";
    } else if (!emailRegex.test(formData.companyEmail.trim())) {
      newErrors.companyEmail = "Please enter a valid email address";
    }

    // Company Name
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    } else if (formData.companyName.trim().length < 2) {
      newErrors.companyName = "Please enter a valid Company Name";
    }

    // Title
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.trim().length < 2) {
      newErrors.title = "Please enter a valid Title";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Please enter a valid Message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill the form with Correct Values");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      name: formData.fullName,
      companyName: formData.companyName,
      companyEmail: formData.companyEmail,
      title: formData.title,
      message: formData.message,
      time: new Date().toString(),
    };
    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateID = process.env
        .NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID as string;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

      await sendEmail({ serviceID, templateID, templateParams, publicKey });
      console.log({
        templateParams,
      });

      toast.success("Request Submitted! We will reach out soon.");

      setErrors({});
      setFormData({
        fullName: "",
        companyName: "",
        companyEmail: "",
        title: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error", error);
      toast.error("Submission Failed! Please try again");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col gap-6">
        <div>
          <Label className="block text-sm font-medium mb-2">Full Name*</Label>
          <Input
            type="text"
            placeholder="Naresh Lamgade"
            value={formData.fullName}
            name="fullName"
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName)
                setErrors({ ...errors, fullName: undefined });
            }}
            className={`border ${
              errors.fullName ? "border-red-500 focus-visible:ring-red-500" : ""
            }`}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>
        <div>
          <Label className="block text-sm font-medium mb-2">
            Company Email*
          </Label>
          <Input
            type="email"
            className={` ${
              errors.companyEmail
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }`}
            placeholder="contact@company.com"
            value={formData.companyEmail}
            name="companyEmail"
            onChange={(e) => {
              setFormData({
                ...formData,
                companyEmail: e.target.value,
              });
              if (errors.companyEmail)
                setErrors({ ...errors, companyEmail: undefined });
            }}
          />
          {errors.companyEmail && (
            <p className="text-sm text-red-500">{errors.companyEmail}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <Label className="block text-sm font-medium mb-2">
            Company Name*
          </Label>
          <Input
            type="text"
            className={` ${
              errors.companyName
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }`}
            placeholder="Company name"
            value={formData.companyName}
            name="companyName"
            onChange={(e) => {
              setFormData({
                ...formData,
                companyName: e.target.value,
              });
              if (errors.companyName)
                setErrors({ ...errors, companyName: undefined });
            }}
          />
          {errors.companyName && (
            <p className="text-sm text-red-500">{errors.companyName}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <Label className="block text-sm font-medium mb-2">Title*</Label>
          <Input
            type="text"
            className={` ${
              errors.title ? "border-red-500 focus-visible:ring-red-500" : ""
            }`}
            placeholder="Pentest Inquiry"
            value={formData.title}
            name="title"
            onChange={(e) => {
              setFormData({
                ...formData,
                title: e.target.value,
              });
              if (errors.title) setErrors({ ...errors, title: undefined });
            }}
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <Label className="block text-sm font-medium mb-2">Message*</Label>
          <Textarea
            className={` ${
              errors.message ? "border-red-500 focus-visible:ring-red-500" : ""
            }`}
            placeholder="What's the procedure to get started?"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(e) => {
              setFormData({
                ...formData,
                message: e.target.value,
              });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
          ></Textarea>
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full text-foreground group bg-linear-to-r from-background via-background/90 to-background hover:from-background/95 hover:via-background/85 hover:to-background/95 border border-border duration-500 transition-colors"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            Submit Inquiry
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to our privacy policy. We do not share your
        information with third parties.
      </p>
    </form>
  );
}
