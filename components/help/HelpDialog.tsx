"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
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
  profileLink?: string;
  emailOrPhone?: string;
  problem?: string;
}

export function HelpDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    profileLink: "",
    emailOfPhone: "",
    problem: "",
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

    // Profile Link
    if (!formData.profileLink.trim()) {
      newErrors.profileLink = "Profile link is required";
    } else if (formData.profileLink.trim().length < 5) {
      newErrors.profileLink = "Please enter a valid Profile Link";
    }

    // Problem
    if (!formData.problem.trim()) {
      newErrors.problem = "Please describe your problem";
    } else if (formData.problem.trim().length < 10) {
      newErrors.problem = "Please provide a more detailed description";
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
      company_name: "Profile Link: " + formData.profileLink,
      email: formData.emailOfPhone,
      message: formData.problem,
      title: "Source: 'Social Media Help' Form, Cynical Site",
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
        profileLink: "",
        emailOfPhone: "",
        problem: "",
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
    <Dialog modal={false} open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Social Media Help</DialogTitle>
          <DialogDescription>
            Get assistance with recovering hacked social media accounts.
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
              placeholder="john@mail.com or +1234567890"
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
            <Label htmlFor="socialLink" className="text-foreground/70">
              Social Media Link
            </Label>
            <Input
              id="socialLink"
              placeholder="https://facebook.com/username"
              value={formData.profileLink}
              name="profileLink"
              className={`placeholder:opacity-50 ${
                errors.profileLink
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }`}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  profileLink: e.target.value,
                });
                if (errors.profileLink)
                  setErrors({ ...errors, profileLink: undefined });
              }}
            />
            {errors.profileLink && (
              <p className="text-xs text-red-500">{errors.profileLink}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="problem" className="text-foreground/70">
              What issues are you facing?
            </Label>
            <Textarea
              id="problem"
              name="problem"
              rows={4}
              value={formData.problem}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  problem: e.target.value,
                });
                if (errors.problem)
                  setErrors({ ...errors, problem: undefined });
              }}
              placeholder="Briefly describe your problems or concerns related to your handle"
              className="placeholder:opacity-50"
            />
            {errors.problem && (
              <p className="text-xs text-red-500">{errors.problem}</p>
            )}
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
