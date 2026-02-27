// import {
//   Package,
//   MapPin,
//   AlertTriangle,
//   XCircle,
//   Bandage,
//   SlidersHorizontal,
//   RulerDimensionLine,
//   VectorSquare,
// } from "lucide-react";
// import { Metadata } from "next";
// import Image from "next/image";

// export const metadata: Metadata = {
//   title: "CamLock | Protect Your Privacy",
//   description:
//     "Protect your privacy with a camera protection for laptops and tablets with CamLock by Cynical Technology.",
// };

// export default function CamLock() {
//   return (
//     <div>
//       <section className="pt-6 pb-12 relative overflow-hidden">
//         <div className="container mx-auto px-6 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="max-w-4xl">
//             <div className="flex items-center gap-4 mb-6">
//               <div>
//                 <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">
//                   Cam<span className="text-muted-foreground">Lock</span>
//                 </h1>
//               </div>
//             </div>

//             <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-body leading-relaxed max-w-3xl">
//               <span className="text-foreground font-semibold">
//                 Protect Your Privacy.
//               </span>
//             </p>

//             <div className="flex items-center gap-2 mb-6">
//               <MapPin className="w-4 h-4 text-muted-foreground" />
//               <span className="text-sm text-muted-foreground">
//                 Proudly Made in Nepal
//               </span>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="relative bg-background rounded-2xl border border-border p-4">
//               <Image
//                 src="/products/camlock_showcase.png"
//                 alt="CamLock - A tiny piece of plastic that slides over your webcam"
//                 width={800}
//                 height={500}
//                 className="rounded-xl dark:brightness-90"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-secondary/30 border-y border-border">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
//                   <AlertTriangle className="w-5 h-5 text-red-400" />
//                 </div>
//                 <span className="text-sm font-medium text-red-400 uppercase tracking-wider">
//                   Reality Check
//                 </span>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold">
//                 Your laptop is basically{" "}
//                 <span className="text-muted-foreground">a two-way mirror</span>
//               </h2>

//               <p className="text-lg text-muted-foreground">
//                 Remember when Mark Zuckerberg put tape over his webcam? Well,
//                 you&apos;re reading this on a device that can spy on you.
//               </p>

//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
//                   <div>
//                     <p className="font-medium">
//                       That &quot;privacy light&quot; means nothing
//                     </p>
//                     <p className="text-sm text-muted-foreground">
//                       Malware can turn on your camera without triggering the
//                       LED. It&apos;s been demonstrated. Repeatedly.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
//                   <div>
//                     <p className="font-medium">
//                       Your camera is always watching
//                     </p>
//                     <p className="text-sm text-muted-foreground">
//                       Even when you think it&apos;s off. Even when your laptop
//                       is closed.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
//                   <div>
//                     <p className="font-medium">Nobody is coming to save you</p>
//                     <p className="text-sm text-muted-foreground">
//                       Not the government. Not your IT department. Not the nice
//                       people at Apple/ Microsoft.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Details */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <span className="inline-flex items-center gap-2 text-xl sm:text-2xl text-muted-foreground uppercase tracking-widest mb-4">
//               The Solution
//             </span>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6 mb-16">
//             <div className="flex flex-col gap-3 md:justify-between">
//               <div className="p-6 rounded-xl border border-border bg-background">
//                 <RulerDimensionLine className="w-8 h-8 mb-4 text-muted-foreground" />
//                 <h3 className="font-semibold mb-2">Ultra-Thin</h3>
//                 <p className="text-sm text-muted-foreground">
//                   0.7mm thin. Its so thin, you might forget it&apos;s there.
//                   Until you need it.
//                 </p>
//               </div>
//               <div className="p-6 rounded-xl border border-border bg-background">
//                 <SlidersHorizontal className="w-8 h-8 mb-4 text-muted-foreground" />
//                 <h3 className="font-semibold mb-2">Sliding Mechanism</h3>
//                 <p className="text-sm text-muted-foreground">
//                   Slides open when you want to be seen.
//                 </p>
//               </div>
//               <div className="p-6 rounded-xl border border-border bg-background">
//                 <Bandage className="w-8 h-8 mb-4 text-muted-foreground" />
//                 <h3 className="font-semibold mb-2">Zero Adhesive Residue</h3>
//                 <p className="text-sm text-muted-foreground">
//                   The Residue always comes off clean.
//                 </p>
//               </div>
//               <div className="p-6 rounded-xl border border-border bg-background">
//                 <VectorSquare className="w-8 h-8 mb-4 text-muted-foreground" />
//                 <h3 className="font-semibold mb-2">Universal Fit</h3>
//                 <p className="text-sm text-muted-foreground">
//                   Fits all laptops and tablets.
//                 </p>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="relative bg-background rounded-2xl border border-border p-4">
//                 <Image
//                   src="/products/camlock_desc.png"
//                   alt="CamLock - A tiny piece of plastic that slides over your webcam"
//                   width={800}
//                   height={500}
//                   className="rounded-xl dark:brightness-90"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-2 items-center gap-12">
//             <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
//               <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
//                 <Package className="w-5 h-5" />
//                 Installation
//               </h3>

//               <div className="space-y-6">
//                 <div className="flex gap-4">
//                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
//                     <span className="text-sm font-bold">1</span>
//                   </div>
//                   <div>
//                     <p className="font-medium mb-1">
//                       Clean your device camera surface
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
//                     <span className="text-sm font-bold">2</span>
//                   </div>
//                   <div>
//                     <p className="font-medium mb-1">Remove the Tape</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
//                     <span className="text-sm font-bold">3</span>
//                   </div>
//                   <div>
//                     <p className="font-medium mb-1">Align with your camera</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
//                     <span className="text-sm font-bold">4</span>
//                   </div>
//                   <div>
//                     <p className="font-medium mb-1">
//                       Press firmly for a few seconds
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
//                     <span className="text-sm font-bold">5</span>
//                   </div>
//                   <div>
//                     <p className="font-medium mb-1">Test the slider</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="relative bg-background rounded-2xl border border-border p-4">
//                 <Image
//                   src="/products/camlock_how.png"
//                   alt="CamLock - A tiny piece of plastic that slides over your webcam"
//                   width={800}
//                   height={500}
//                   className="rounded-xl dark:brightness-90"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import {
  Package,
  MapPin,
  AlertTriangle,
  XCircle,
  Bandage,
  SlidersHorizontal,
  RulerDimensionLine,
  VectorSquare,
  Printer,
  Building2,
  ShoppingCart,
  CheckCircle,
  Shield,
  Users,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CamLock | Protect Your Privacy",
  description:
    "Protect your privacy with a camera protection for laptops and tablets with CamLock by Cynical Technology. Bulk ordering available with custom logo printing.",
};

export default function CamLockPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="pt-6 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">
                  Cam<span className="text-muted-foreground">Lock</span>
                </h1>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-body leading-relaxed max-w-3xl">
              <span className="text-foreground font-semibold">
                Protect Your Privacy.
              </span>
            </p>

            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Proudly Made in Nepal
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-secondary/50 rounded-lg px-4 py-2">
                <span className="text-2xl font-bold">Rs. 99</span>
                <span className="text-sm text-muted-foreground ml-2">
                  per piece
                </span>
              </div>
              <div className="bg-secondary/50 rounded-lg px-4 py-2 flex items-center gap-2">
                <Printer className="w-4 h-4" />
                <span className="text-sm">Custom logo printing available</span>
              </div>
            </div>

            <div className="grid max-w-md grid-cols-1 md:grid-cols-2 gap-3">
              <Button className="h-12 px-4 w-full text-base">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-background rounded-2xl border border-border p-4">
              <Image
                src="/products/camlock_showcase.png"
                alt="CamLock with company logo printing option"
                width={800}
                height={500}
                className="rounded-xl dark:brightness-90"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background rounded-xl p-6 border border-border">
              <Package className="w-8 h-8 mb-4 text-muted-foreground" />
              <h3 className="font-semibold mb-2">Bulk Orders</h3>
              <p className="text-2xl font-bold mb-1">
                ₹99{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  /unit
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                Minimum order: 25 units
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="absolute -mt-8">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
              <Sparkles className="w-8 h-8 mb-4 text-muted-foreground" />
              <h3 className="font-semibold mb-2">With Your Logo</h3>
              <p className="text-2xl font-bold mb-1">Negotiated</p>
              <p className="text-sm text-muted-foreground">
                Pricing based on order volume
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <Users className="w-8 h-8 mb-4 text-muted-foreground" />
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-1">10,000+ units</p>
              <p className="text-sm text-muted-foreground">
                Special pricing for large organizations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check Section */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-sm font-medium text-red-400 uppercase tracking-wider">
                  Reality Check
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold">
                Your laptop is basically{" "}
                <span className="text-muted-foreground">a two-way mirror</span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">
                      That &quot;privacy light&quot; means nothing
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Malware can turn on your camera without triggering the
                      LED. It&apos;s been demonstrated. Repeatedly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">
                      Your camera may always be watching
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Even when you think it&apos;s off. Even when your laptop
                      is closed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Showcase */}
            <div className="space-y-4">
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Printer className="w-4 h-4" />
                  Custom Logo Printing
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Have your company logo printed on each CamLock. Perfect for:
                </p>
                <ul className="space-y-6">
                  {[
                    "Employee onboarding kits",
                    "Corporate gifts",
                    "Security awareness programs",
                    "Conference giveaways",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-xl sm:text-2xl text-muted-foreground uppercase tracking-widest mb-4">
              The Solution
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="flex flex-col gap-3 md:justify-between">
              <div className="p-6 rounded-xl border border-border bg-background">
                <RulerDimensionLine className="w-8 h-8 mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Ultra-Thin</h3>
                <p className="text-sm text-muted-foreground">
                  0.7mm thin. It's so thin, you might forget it's there. Until
                  you need it.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background">
                <SlidersHorizontal className="w-8 h-8 mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Sliding Mechanism</h3>
                <p className="text-sm text-muted-foreground">
                  Slides open when you want to be seen. Closed when you don't.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background">
                <Bandage className="w-8 h-8 mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Zero Adhesive Residue</h3>
                <p className="text-sm text-muted-foreground">
                  The residue always comes off clean. No sticky surprises.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background">
                <VectorSquare className="w-8 h-8 mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Universal Fit</h3>
                <p className="text-sm text-muted-foreground">
                  Fits all laptops and tablets. One size fits (almost) all.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-background rounded-2xl border border-border p-4">
                <Image
                  src="/products/camlock_desc.png"
                  alt="CamLock features and specifications"
                  width={800}
                  height={500}
                  className="rounded-xl dark:brightness-90"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 items-center gap-12">
            {/* Installation */}
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Installation
              </h3>

              <div className="space-y-6">
                {[
                  "Clean your device camera surface",
                  "Remove the protective tape",
                  "Align with your camera",
                  "Press firmly for a few seconds",
                  "Test the slider mechanism",
                ].map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-6">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </div>

            {/* Product Showcase */}
            <div className="relative">
              <div className="relative bg-background rounded-2xl border border-border p-4">
                <Image
                  src="/products/camlock_how.png"
                  alt="CamLock installation and usage"
                  width={800}
                  height={500}
                  className="rounded-xl dark:brightness-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Customization Section */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Put Your Brand On It
            </h2>
            <p className="text-lg text-muted-foreground">
              Custom logo printing available for bulk orders. Pricing negotiated
              based on volume.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-background rounded-2xl border border-border p-2">
              <div className="relative aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
                <Image
                  src="/products/camlock_openai.png"
                  alt="CamLock with custom logo example"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="bg-background rounded-2xl border border-border p-2">
              <div className="relative aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
                <Image
                  src="/products/camlock_google.png"
                  alt="CamLock with custom logo example"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Protect Your Entire Organization
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From 25 to 1000+ units. Custom logo printing available. Bulk pricing
            starting at Rs. 99 per piece.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="h-14 px-8 text-base">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Place Bulk Order
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base">
              <Printer className="w-4 h-4 mr-2" />
              Request Logo Sample
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            *Minimum bulk order: 25 units.
          </p>
        </div>
      </section>
    </div>
  );
}
