"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendEmail } from "@/lib/sendQuery";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  product?: string;
}

export default function PricingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    product: "Penetration Testing",
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
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    } else if (formData.company.trim().length < 2) {
      newErrors.company = "Please enter a valid Company Name";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill the form with correct values!");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      title: "Pricing Form, Cynical",
      company: formData.company,
      product: formData.product,
      time: new Date().toString(),
    };

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateID = process.env
        .NEXT_PUBLIC_EMAILJS_PRICING_TEMPLATE_ID as string;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

      await sendEmail({
        serviceID,
        templateID,
        templateParams,
        publicKey,
      });
      console.log({
        templateParams,
      });
      toast.success("Request Submitted! We will reach out soon.");

      setErrors({});
      setFormData({
        fullName: "",
        email: "",
        company: "",
        product: "Penetration Testing",
      });
    } catch (error) {
      console.error("EmailJS error", error);
      toast.error("Submission Failed! Please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section role="form" aria-labelledby="Pricing Inquiry Form Section">
      <h2
        id="Pricing Inquiry Form Section"
        className="font-aeonik text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-center"
      >
        Request Pricing Details
      </h2>
      <form
        className="space-y-4 bg-card/80 shadow-md rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="fullName"
            className="block text-sm font-medium text-foreground"
          >
            Full Name
          </Label>
          <Input
            type="text"
            id="fullName"
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

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            className={` ${
              errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
            }`}
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

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company"
            className="block text-sm font-medium text-foreground"
          >
            Company
          </Label>
          <Input
            type="text"
            id="company"
            name="company"
            className={` ${
              errors.company ? "border-red-500 focus-visible:ring-red-500" : ""
            }`}
            onChange={(e) => {
              setFormData({
                ...formData,
                company: e.target.value,
              });
              if (errors.company) setErrors({ ...errors, company: undefined });
            }}
          />
          {errors.company && (
            <p className="text-sm text-red-500">{errors.company}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="product"
            className="block text-sm font-medium text-foreground"
          >
            Product
          </Label>
          <select
            id="product"
            name="product"
            defaultValue={"Penetration Testing"}
            className={`w-full bg-background rounded-md p-3 border ${
              errors.product ? "border-red-500 focus-visible:ring-red-500" : ""
            }`}
            onChange={(e) => {
              setFormData({
                ...formData,
                product: e.target.value,
              });
            }}
          >
            <option value="Web Security">Web Security</option>
            <option value="Penetration Testing">Penetration Testing</option>
            <option value="API Protection">API Protection</option>
            <option value="Compliance Suite">Compliance Suite</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full  font-semibold py-2 px-4 rounded-md"
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
      </form>
    </section>
  );
}
