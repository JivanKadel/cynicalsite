// import type { Metadata } from "next";
// import PageCTA from "@/components/products/PageCTA";
// import { iconColors } from "@/lib/utils";
// import { GraduationCap, CheckCircle, BookOpen } from "lucide-react";
// import Link from "next/link";
// import {
//   capabilities,
//   courseTypes,
//   features,
//   methodology,
//   stats,
// } from "@/data/solutions/training-and-consulting.data";

// export const metadata: Metadata = {
//   title: "Training & Consulting | Cynical Technology",
//   description:
//     "Expert-led cybersecurity training and strategic consulting. From developer secure coding to red team tradecraft and CISO advisory services.",
// };

// export default function TrainingConsulting() {
//   return (
//     <div>
//       <section className="pt-6 pb-12 relative overflow-hidden">
//         <div className="container mx-auto px-6 relative">
//           <div className="max-w-4xl mx-auto text-center">
//             {/* Breadcrumb */}
//             <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
//               <Link
//                 href="/"
//                 className="hover:text-foreground transition-colors"
//               >
//                 Home
//               </Link>
//               <span>/</span>
//               <Link
//                 href="/#solutions"
//                 className="hover:text-foreground transition-colors"
//               >
//                 Solutions
//               </Link>
//               <span>/</span>
//               <span className="text-foreground">Training & Consulting</span>
//             </div>

//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
//               <GraduationCap className="w-4 h-4 text-foreground" />
//               <span className="text-sm font-medium">
//                 Expert-Led Security Education & Advisory
//               </span>
//             </div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-balance">
//               Transform your team into
//               <span className="block text-slate-500">security experts</span>
//             </h1>

//             <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed">
//               Whether you&apos;re building a security program or sharpening your
//               team&apos;s offensive skills, our practitioner-led training and
//               consulting delivers real-world expertise from the front lines.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 border-y border-border">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-2">
//                   {stat.value}
//                 </div>
//                 <p className="text-sm md:text-base text-muted-foreground">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Capabilities Section */}
//       <section className="py-20 lg:py-32">
//         <div className="container mx-auto px-6">
//           <div className="max-w-3xl mb-16">
//             <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
//               Capabilities
//             </span>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
//               From boardroom to terminal
//             </h2>
//             <p className="text-lg text-muted-foreground font-body leading-relaxed">
//               We meet you where you are—whether that&apos;s architecting a
//               security program for the C-suite or teaching penetration testers
//               the latest evasion techniques.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {capabilities.map((capability, index) => (
//               <div
//                 key={index}
//                 className="group p-6 lg:p-8 rounded-2xl bg-card hover:border-foreground/20 transition-all duration-300 hover-lift"
//               >
//                 <div
//                   className={`w-12 h-12 rounded-xl ${
//                     iconColors[index % iconColors.length].iconBg
//                   } flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors`}
//                 >
//                   <capability.icon
//                     className={`w-6 h-6 ${
//                       iconColors[index % iconColors.length].iconColor
//                     }`}
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">
//                   {capability.title}
//                 </h3>
//                 <p className="text-muted-foreground font-body text-sm leading-relaxed">
//                   {capability.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Course Types Section (replaces Testing Types) */}
//       <section className="py-20 lg:py-32 bg-secondary/20">
//         <div className="container mx-auto px-6">
//           <div className="text-center max-w-4xl mx-auto mb-16">
//             <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
//               Training Tracks
//             </span>
//             <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-6">
//               Offensive & defensive mastery
//             </h2>
//             <p className="text-lg text-muted-foreground font-body leading-relaxed">
//               Choose from our flagship courses or let us custom-build a
//               curriculum for your team&apos;s specific needs.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
//             {courseTypes.map((course, index) => (
//               <div
//                 key={index}
//                 className="p-8 rounded-2xl border border-border bg-background hover:border-foreground/20 transition-all duration-300"
//               >
//                 <div className="text-6xl font-bold text-foreground/20 mb-4">
//                   0{index + 1}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
//                 <p className="text-muted-foreground font-body mb-6 leading-relaxed">
//                   {course.description}
//                 </p>
//                 <ul className="space-y-3">
//                   {course.features.map((feature, fIndex) => (
//                     <li key={fIndex} className="flex items-center gap-3">
//                       <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
//                       <span className="text-muted-foreground">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Methodology Section */}
//       <section className="py-20 lg:py-32">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
//             <div className="lg:sticky lg:top-32">
//               <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
//                 Our Approach
//               </span>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
//                 Learn from practitioners, not just instructors
//               </h2>
//               <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
//                 Every trainer and consultant on our team has current, real-world
//                 experience in the trenches—whether defending Fortune 500
//                 networks or breaking into them.
//               </p>
//             </div>

//             <div className="space-y-6">
//               {methodology.map((step, index) => (
//                 <div
//                   key={index}
//                   className="group p-6 lg:p-8 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all duration-300"
//                 >
//                   <div className="flex items-start gap-6">
//                     <div className="w-14 h-14 rounded-xl bg-foreground text-background flex items-center justify-center shrink-0 font-bold text-lg">
//                       {step.phase}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold mb-2">
//                         {step.title}
//                       </h3>
//                       <p className="text-muted-foreground font-body text-sm leading-relaxed">
//                         {step.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="py-20 lg:py-32 bg-secondary/20">
//         <div className="container mx-auto px-6">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
//               Why Cynical?
//             </span>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
//               Education that actually sticks
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex group gap-4 p-6 rounded-xl border border-border bg-background hover:border-foreground/20 transition-colors"
//               >
//                 <div
//                   className={`w-12 h-12 rounded-xl ${
//                     iconColors[index % iconColors.length].iconBg
//                   } self-center flex items-center justify-center group-hover:bg-foreground/10 transition-colors`}
//                 >
//                   <feature.icon
//                     className={`w-6 h-6 ${
//                       iconColors[index % iconColors.length].iconColor
//                     }`}
//                   />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">{feature.title}</h3>
//                   <p className="text-sm text-muted-foreground font-body">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Certification & Advisory Section (replaces OWASP) */}
//       <section className="py-20 lg:py-32">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-16">
//               <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
//                 Advisory Services
//               </span>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
//                 Strategic security consulting
//               </h2>
//               <p className="text-lg text-muted-foreground font-body leading-relaxed">
//                 Beyond training, we partner with organizations to build, mature,
//                 and operationalize their security programs.
//               </p>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-4">
//               {[
//                 "CISO Advisory & Fractional CISO",
//                 "Security Program Maturity Assessments",
//                 "Incident Response Planning & Tabletop Exercises",
//                 "Mergers & Acquisitions Security Due Diligence",
//                 "Compliance Strategy (PCI, SOC 2, HIPAA, GDPR)",
//                 "Security Architecture Review",
//                 "DevSecOps Pipeline Implementation",
//                 "Threat Modeling Workshops",
//                 "Vendor Security Assessment Program Design",
//                 "Board-Level Security Reporting",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card"
//                 >
//                   <div className="w-8 h-8 rounded-full text-background flex items-center justify-center">
//                     <BookOpen className="w-5 h-5 text-blue-500" />
//                   </div>
//                   <span className="font-medium text-sm">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <PageCTA
//         badge="Hands-on, practitioner-led training"
//         headline="Ready to level up"
//         highlightedText="your security team?"
//         description="From developer training to executive strategy sessions, we'll help you build a security-first culture."
//       />
//     </div>
//   );
// }

import type { Metadata } from "next";
import PageCTA from "@/components/products/PageCTA";
import { iconColors } from "@/lib/utils";
import {
  GraduationCap,
  CheckCircle,
  Users,
  BookOpen,
  Shield,
  Terminal,
  AlertTriangle,
  Globe,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Training & Consulting | Cynical Technology",
  description:
    "Cybersecurity training and consulting services. From employee awareness to advanced technical courses for offensive and defensive security professionals.",
};

export default function TrainingConsulting() {
  return (
    <div>
      <section className="pt-6 pb-4 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="mx-auto flex flex-col justify-center items-center text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/#solutions"
                className="hover:text-foreground transition-colors"
              >
                Solutions
              </Link>
              <span>/</span>
              <span className="text-foreground">Training & Consulting</span>
            </div>
            <div className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
              <GraduationCap className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium">
                Security Training & Awareness
              </span>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center lg:items-start">
            <div className="mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold tracking-tight mb-6 text-balance">
                Build a security-first{" "}
                <span className="text-slate-500">culture from day one</span>
              </h1>

              <p className="text-base md:text-lg xl:text-xl text-muted-foreground font-body max-w-2xl mb-4 leading-relaxed">
                Whether you&apos;re training your entire workforce on security
                awareness or upskilling your technical teams in offensive and
                defensive techniques, we have a program for you.
              </p>
              <p className="text-base md:text-lg xl:text-xl text-muted-foreground font-body max-w-2xl mb-10 leading-relaxed">
                Our training and consulting services are designed to meet you
                where you are in your security journey. From foundational
                employee awareness to advanced red team tradecraft, we deliver
                practical, hands-on education that empowers your team to protect
                your organization against real-world threats.
              </p>
            </div>

            <ResponsiveImage
              src={"/generic/training.jpg"}
              alt="A group of people in a training session."
              className="rounded-lg mt-6"
            />
          </div>
        </div>
      </section>

      {/* Core Training Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto flex flex-col justify-center items-center mb-16">
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              What We Offer
            </span>
            <h2 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Training for every role
            </h2>
            <p className="text-lg text-muted-foreground text-center font-body leading-relaxed">
              From the boardroom to the terminal, we provide tailored security
              education that meets your team where they are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Employee Security Awareness */}
            <div className="group p-6 lg:p-8 rounded-2xl bg-card hover:border-foreground/20 transition-all duration-300 hover-lift">
              <div
                className={`w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors`}
              >
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Employee Security Awareness
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                Essential training for every employee. Learn to identify
                phishing attempts, practice good password hygiene, and
                understand security policies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Phishing simulation training</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Password security & MFA</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Social engineering awareness</span>
                </li>
              </ul>
            </div>

            {/* Bug Bounty Training */}
            <div className="group p-6 lg:p-8 rounded-2xl bg-card hover:border-foreground/20 transition-all duration-300 hover-lift">
              <div
                className={`w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors`}
              >
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Bug Bounty & Responsible Disclosure
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                Train your team or community on how to responsibly find and
                report vulnerabilities in your applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Setting up a bounty program</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Writing effective vulnerability reports</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Legal & safe testing guidelines</span>
                </li>
              </ul>
            </div>

            {/* Executive & Board Briefings */}
            <div className="group p-6 lg:p-8 rounded-2xl bg-card hover:border-foreground/20 transition-all duration-300 hover-lift">
              <div
                className={`w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors`}
              >
                <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Executive & Board Briefings
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                Translate technical risk into business context for leadership
                teams and board members.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cyber risk for non-technical leaders</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Regulatory compliance overview</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Incident communication strategies</span>
                </li>
              </ul>
            </div>

            {/* Offensive Security Training */}
            <div className="group p-6 lg:p-8 rounded-2xl bg-card hover:border-foreground/20 transition-all duration-300 hover-lift">
              <div
                className={`w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors`}
              >
                <Terminal className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Technical Training: Offensive
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                Hands-on courses for penetration testers and red teamers looking
                to sharpen their skills.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Web & API penetration testing</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Active Directory attacks</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Wireless & network exploitation</span>
                </li>
              </ul>
            </div>

            {/* Defensive Security Training */}
            <div className="group p-6 lg:p-8 rounded-2xl bg-card hover:border-foreground/20 transition-all duration-300 hover-lift">
              <div
                className={`w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors`}
              >
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Technical Training: Defensive
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                Equip your blue team with the skills to detect, respond, and
                recover from attacks.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Incident response fundamentals</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Threat hunting techniques</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>SIEM & log analysis</span>
                </li>
              </ul>
            </div>

            {/* Secure Development */}
            <div className="group p-6 lg:p-8 rounded-2xl bg-card hover:border-foreground/20 transition-all duration-300 hover-lift">
              <div
                className={`w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors`}
              >
                <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Developer Security Training
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                Teach your developers how to write secure code and build
                security into the SDLC.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Secure coding practices</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Threat modeling for developers</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>DevSecOps fundamentals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seminars & Workshops Section */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              Events & Workshops
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Seminars for every audience
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              From lunch-and-learns to multi-day immersive workshops, we deliver
              engaging security education in any format.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Half-day Seminars */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:border-foreground/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3">Half-Day Seminars</h3>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Perfect for introducing security concepts to large groups or
                department-wide training.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Security awareness fundamentals</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Phishing & social engineering deep dive</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Remote work security best practices</span>
                </li>
              </ul>
            </div>

            {/* Full-Day Workshops */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:border-foreground/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3">Full-Day Workshops</h3>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Intensive, hands-on sessions for technical teams to build
                practical skills.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Hands-on penetration testing labs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Incident response tabletop exercises</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Cloud security architecture review</span>
                </li>
              </ul>
            </div>

            {/* Multi-Day Intensives */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:border-foreground/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3">Multi-Day Intensives</h3>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Comprehensive certification-track training for security
                professionals seeking mastery.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Advanced red team tradecraft</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Threat hunting & detection engineering</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Secure development lifecycle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 py-6">
            <div className="max-w-3xl mb-16">
              <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
                Consulting
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-6">
                Expert guidance when you need it
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed mb-2">
                Sometimes you need more than training. Our consultants work
                alongside your team to solve specific security challenges.
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed">
                Whether you need help building a security program, conducting a
                risk assessment, or running a tabletop exercise, we have the
                expertise to guide you through it. Our consulting services are
                designed to be flexible and tailored to your organization&apos;s
                unique needs.
              </p>
            </div>

            <ResponsiveImage
              src={"/generic/consulting.jpg"}
              alt="A team providing consulting services to a client."
              className="rounded-lg mt-6"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Program Development */}
            <div className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:border-foreground/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Security Program Development
                </h3>
                <p className="text-muted-foreground">
                  Build or mature your security program from the ground up. We
                  help you create policies, procedures, and roadmaps that align
                  with business objectives.
                </p>
              </div>
            </div>

            {/* Awareness Campaigns */}
            <div className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:border-foreground/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Security Awareness Campaigns
                </h3>
                <p className="text-muted-foreground">
                  Design and execute organization-wide awareness initiatives,
                  including phishing simulations, newsletters, and training
                  materials.
                </p>
              </div>
            </div>

            {/* Technical Mentoring */}
            <div className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:border-foreground/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Technical Mentoring
                </h3>
                <p className="text-muted-foreground">
                  One-on-one or small group mentoring for security team members.
                  Accelerate skill development through guided, real-world
                  practice.
                </p>
              </div>
            </div>

            {/* Tabletop Exercises */}
            <div className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:border-foreground/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Tabletop Exercises
                </h3>
                <p className="text-muted-foreground">
                  Facilitated incident response simulations that test your
                  team's readiness without the pressure of a real event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Training Matters */}
      <section className="py-20 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Security is a team sport
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-12 max-w-2xl mx-auto">
              The most sophisticated technical controls can be undone by a
              single untrained employee. We help you build a human firewall
              that's just as strong as your technical defenses.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  80%
                </div>
                <p className="text-sm text-muted-foreground">
                  of breaches involve human error
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  5x
                </div>
                <p className="text-sm text-muted-foreground">
                  ROI on security awareness training
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  70%
                </div>
                <p className="text-sm text-muted-foreground">
                  reduction in phishing susceptibility
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  100%
                </div>
                <p className="text-sm text-muted-foreground">
                  of teams need ongoing education
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        badge="Custom programs for your organization"
        headline="Ready to build"
        highlightedText="a security culture?"
        description="Contact us to discuss your training needs. We'll design a program that fits your team, your timeline, and your budget."
      />
    </div>
  );
}

// Missing imports
import { Briefcase, Code } from "lucide-react";
import Image from "next/image";
import ResponsiveImage from "@/components/image/ResponsiveImage";
