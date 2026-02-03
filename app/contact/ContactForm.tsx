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
  email?: string;
  companyName?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
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

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Please enter a valid Message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!validateForm()) {
  //     toast.error("Please fill the form with Correct Values");
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   const templateParams = {
  //     fullname: formData.fullName,
  //     company_name: formData.companyName,
  //     email: formData.email,
  //     message: formData.message,
  //     title: "Source: Contact Form, Cynical Site",
  //     time: new Date().toString(),
  //   };
  //   try {
  //     // @ts-ignore
  //     grecaptcha.ready(function () {
  //       // @ts-ignore
  //       grecaptcha
  //         .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
  //           action: "submit",
  //         })
  //         .then(function (token: string) {
  //           fetch("/api/contact", {
  //             method: "POST",
  //             body: JSON.stringify({
  //               captchaToken: token,
  //             }),
  //           })
  //             .then(() => {
  //               const serviceID = process.env
  //                 .NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  //               const templateID = process.env
  //                 .NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID as string;
  //               const publicKey = process.env
  //                 .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  //               await sendEmail({
  //                 serviceID,
  //                 templateID,
  //                 templateParams,
  //                 publicKey,
  //               });

  //               toast.success("Request Submitted! We will reach out soon.");

  //               setErrors({});
  //               setFormData({
  //                 fullName: "",
  //                 companyName: "",
  //                 email: "",
  //                 message: "",
  //               });
  //             })
  //             .catch((error) => {
  //               alert("Failed Recaptcha, try again");
  //               return;
  //             });
  //         });
  //     });
  //   } catch (error) {
  //     console.error("EmailJS error", error);
  //     toast.error("Submission Failed! Please try again");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

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
      message: formData.message,
      title: "Source: Contact Form, Cynical Site",
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

          // const serviceID = process.env
          //   .NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
          // const templateID = process.env
          //   .NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID as string;
          // const publicKey = process.env
          //   .NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

          // await sendEmail({
          //   serviceID,
          //   templateID,
          //   templateParams,
          //   publicKey,
          // });

          toast.success("Request Submitted! We will reach out soon.");

          setErrors({});
          setFormData({
            fullName: "",
            companyName: "",
            email: "",
            message: "",
          });
        } catch (error) {
          console.error("Captcha or EmailJS error", error);
          toast.error("Submission Failed! Please try again");
        } finally {
          setIsSubmitting(false);
        }
      });
    } catch (error) {
      console.error("Unexpected error", error);
      toast.error("Submission Failed! Please try again");
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
        className="w-full group border border-border duration-500 transition-colors"
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
