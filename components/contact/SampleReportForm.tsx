"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { sendEmail } from "@/lib/sendQuery";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface FormErrors {
  fullName?: string;
  email?: string;
  companyName?: string;
}

export default function SampleReportForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const router = useRouter();

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
    if (!formData.email.trim()) {
      newErrors.email = "Email is Required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Company Name
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    } else if (formData.companyName.trim().length < 2) {
      newErrors.companyName = "Please enter a valid Company Name";
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
      fullname: formData.fullName,
      company_name: formData.companyName,
      email: formData.email,
      message: "Sample Report Downloaded",
      title: "Source: Sample Report Download Form",
      time: new Date().toString(),
    };
    try {
      // @ts-ignore
      grecaptcha.ready(async () => {
        try {
          // @ts-ignore
          const token = await grecaptcha.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string,
            { action: "submit" },
          );

          const captchaRes = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ captchaToken: token }),
          });

          if (!captchaRes.ok) {
            toast.error("Captcha verification failed. Try again.");
            return;
          }

          const serviceID = process.env
            .NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
          const templateID = process.env
            .NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID as string;
          const publicKey = process.env
            .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

          await sendEmail({ serviceID, templateID, templateParams, publicKey });

          toast.success("Your Download is Ready!");

          setTimeout(() => {
            router.push("/downloads/thank-you");
          }, 500);

          setErrors({});
          setFormData({
            fullName: "",
            companyName: "",
            email: "",
          });
        } catch (error) {
          console.error("Captcha or EmailJS error", error);
          toast.error("Submission Failed! Please try again");
        } finally {
          setIsSubmitting(false);
        }
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
            placeholder="John Doe"
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
          <Label className="block text-sm font-medium mb-2">Email*</Label>
          <Input
            type="email"
            className={` ${
              errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
            }`}
            placeholder="contact@company.com"
            value={formData.email}
            name="email"
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
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

      <Button
        type="submit"
        // disabled={isSubmitting}
        size="lg"
        className="w-full group border border-border duration-500 transition-colors"
      >
        {isSubmitting ? (
          "Processing..."
        ) : (
          <>
            Get Download Link
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
