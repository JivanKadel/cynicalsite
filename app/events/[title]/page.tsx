"use client";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Tag,
  Award,
  Briefcase,
  CheckCircle,
  ExternalLink,
  Share2,
  BookOpen,
  Target,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const event = {
  id: "101",
  name: "BugV Penetration Testing",
  date: "2026-03-15",
  time: "10am to 1pm",
  location: "Kathmandu, Nepal",
  tags: ["Cybersecurity", "Workshop"],
  hashtag: "#BugV2026",
  attendees: 150,
  description:
    "A comprehensive workshop on penetration testing techniques and tools. Learn industry best practices from experienced security professionals. This hands-on session covers reconnaissance, vulnerability scanning, exploitation techniques, and reporting. Perfect for professionals looking to advance their cybersecurity career.",
  skillYouWillGain: [
    "Penetration Testing",
    "Vulnerability Assessment",
    "Network Security",
    "Exploitation Techniques",
  ],
  opportunities: [
    "Networking with security professionals",
    "Job placement assistance",
    "Certification prep",
  ],
  facilitators: ["Expert Ethical Hackers", "Security Consultants"],
  requirements: ["Basic networking knowledge", "Linux/Windows CLI experience"],
  link: "https://bugv.io/penetration-testing",
};

export default function EventDetailsPage() {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      {/* Header/Navigation */}
      {/* <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className="gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </Button>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-gray-300 dark:border-gray-700"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button
                className="gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                size="sm"
              >
                Register Now
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header> */}

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Event Header */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {event.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                  <Badge
                    variant="outline"
                    className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800 px-3 py-1.5 rounded-full"
                  >
                    <Star className="w-3 h-3 mr-1" />
                    Featured Event
                  </Badge>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {event.name}
                </h1>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Date
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {formattedDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Time
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {event.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Location
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="bg-gray-200 dark:bg-gray-800" />

              {/* Description */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  About This Event
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {event.description}
                </p>
              </section>

              {/* Skills Section */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                  Skills You Will Gain
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {event.skillYouWillGain.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 shrink-0" />
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Opportunities & Requirements Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Opportunities */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    Opportunities
                  </h2>
                  <ul className="space-y-3">
                    {event.opportunities.map((opportunity, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-md mt-0.5">
                          <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {opportunity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Requirements */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    Requirements
                  </h2>
                  <ul className="space-y-3">
                    {event.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="p-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-md mt-0.5">
                          <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {requirement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Registration Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Attendees
                        </p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">
                          {event.attendees} registered
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
                      Popular
                    </Badge>
                  </div>

                  <Separator className="mb-6 bg-gray-200 dark:bg-gray-800" />

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="font-medium">{event.hashtag}</span>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Facilitators
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {event.facilitators.map((facilitator, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                          >
                            {facilitator}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full py-6 text-lg font-semibold bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    size="lg"
                    onClick={() => window.open(event.link, "_blank")}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Register Now
                  </Button>

                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                    Free registration • Limited seats available
                  </p>
                </div>

                {/* Facilitators Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Meet Your Facilitators
                  </h3>
                  <div className="space-y-4">
                    {event.facilitators.map((facilitator, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                      >
                        <Avatar className="w-12 h-12 border-2 border-white dark:border-gray-800">
                          <AvatarImage
                            src={`/api/placeholder/48/48`}
                            alt={facilitator}
                          />
                          <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                            {facilitator
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {facilitator}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {index === 0 ? "Lead Instructor" : "Co-Facilitator"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Share Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Share This Event
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Twitter", "LinkedIn", "Facebook", "Copy Link"].map(
                      (platform) => (
                        <Button
                          key={platform}
                          variant="outline"
                          className="justify-start gap-2 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                          size="sm"
                        >
                          <Share2 className="w-4 h-4" />
                          {platform}
                        </Button>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Level Up Your Cybersecurity Skills?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join {event.attendees}+ professionals in this hands-on workshop.
              Limited seats available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"
                onClick={() => window.open(event.link, "_blank")}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Secure Your Spot
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Add to Calendar
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
