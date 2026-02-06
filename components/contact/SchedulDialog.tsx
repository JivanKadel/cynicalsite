/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { createRef, useState } from "react";
import { sendEmail } from "@/lib/sendQuery";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

interface FormErrors {
  fullName?: string;
  emailOrPhone?: string;
  companyName?: string;
}

export function ScheduleCallDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    emailOfPhone: "",
    companyName: "",
    message: "",
  });

  const recaptchaRef = createRef<ReCAPTCHA>();

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
    const phoneRegex = /^[+]?[\d\s\-()]{7,20}$/;

    if (!formData.emailOfPhone.trim()) {
      newErrors.emailOrPhone = "Email or Phone is Required";
    } else if (
      !emailRegex.test(formData.emailOfPhone.trim()) &&
      !phoneRegex.test(formData.emailOfPhone.trim())
    ) {
      newErrors.emailOrPhone = "Please enter a valid email or phone";
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

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      toast.error("Please complete the reCAPTCHA");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      fullname: formData.fullName,
      company_name: formData.companyName,
      email: formData.emailOfPhone,
      message: formData.message || "No message",
      title: "Source: 'Schedule a Call' Form, Cynical Site",
      time: new Date().toString(),
      "g-recaptcha-response": token,
    };

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateID = process.env
        .NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID as string;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

      await sendEmail({
        serviceID,
        templateID,
        templateParams,
        publicKey,
      });

      toast.success("Request Submitted! We will reach out soon.");

      recaptchaRef?.current?.reset();

      setTimeout(() => {
        router.push("/thank-you");
      }, 500);

      setErrors({});
      setFormData({
        fullName: "",
        companyName: "",
        emailOfPhone: "",
        message: "",
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Captcha or EmailJS error", error);
      toast.error("Submission Failed! Please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>Schedule a Call</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Schedule a Call</DialogTitle>
          <DialogDescription>
            15-minute discovery call with a cybersecurity expert.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground/70">
              Full name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) {
                  setErrors({ ...errors, fullName: undefined });
                }
              }}
              className={`placeholder:opacity-50 border ${
                errors.fullName
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="emailOrPhone" className="text-foreground/70">
              Email or Phone
            </Label>
            <Input
              id="emailOrPhone"
              type="text"
              placeholder="john@company.com or +1234567890"
              value={formData.emailOfPhone}
              name="emailOrPhone"
              className={`placeholder:opacity-50 border ${
                errors.emailOrPhone
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }`}
              onChange={(e) => {
                setFormData({ ...formData, emailOfPhone: e.target.value });
                if (errors.emailOrPhone) {
                  setErrors({ ...errors, emailOrPhone: undefined });
                }
              }}
            />
            {errors.emailOrPhone && (
              <p className="text-xs text-red-500">{errors.emailOrPhone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-foreground/70">
              Company
            </Label>
            <Input
              id="companyName"
              placeholder="Company Pvt. Ltd."
              className={`placeholder:opacity-50 ${
                errors.companyName
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }`}
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
              <p className="text-xs text-red-500">{errors.companyName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground/70">
              What do you want to discuss? (optional)
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  message: e.target.value,
                });
              }}
              placeholder="Briefly describe your security concerns"
              className="placeholder:opacity-50"
            />
          </div>

          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            ref={recaptchaRef}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full group border border-border duration-500 transition-colors"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Request Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
