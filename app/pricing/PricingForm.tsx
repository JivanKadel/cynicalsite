"use client";

import { sortedCountries } from "@/data/countries";
import { toast } from "sonner";

export default function PricingForm() {
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
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const data = Object.fromEntries(formData.entries());
          console.log("Form submitted:", data);
          toast.success("Thank you! We'll be in touch soon.");
        }}
      >
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-foreground"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="mt-1 block w-full rounded-md border border-border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border border-border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-foreground"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="mt-1 block w-full rounded-md border border-border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-foreground"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full rounded-md border border-border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10,15}"
            className="mt-1 block w-full rounded-md border border-border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
        {/* Product */}
        <div>
          <label
            htmlFor="product"
            className="block text-sm font-medium text-foreground"
          >
            Product
          </label>
          <select
            id="product"
            name="product"
            required
            className="mt-1 block w-full rounded-md border border-border bg-card shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          >
            <option value="websec">Web Security</option>
            <option value="pentest">Penetration Testing</option>
            <option value="apisec">API Protection</option>
            <option value="compliance">Compliance Suite</option>
          </select>
        </div>
        {/* Country */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            required
            className="mt-1 block w-full rounded-md border border-border bg-card shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          >
            {sortedCountries.map((country) => (
              <option key={country.iso_code} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Submit Inquiry
        </button>
      </form>
    </section>
  );
}
