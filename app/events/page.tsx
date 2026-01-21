import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pastEvents, upcomingEvents } from "@/data/events.data";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  ExternalLink,
  MapPin,
} from "lucide-react";
import AvatarGroup from "./AvatarGroup";

export default function EventsPage() {
  return (
    <div>
      <section className="pt-6 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="py-6">
              <Badge
                variant={"outline"}
                className="inline-flex items-center gap-2 px-4 py-2"
              >
                <div className="bg-green-500 p-1 rounded-full" />
                <span className="text-xs font-medium">COMMUNITY EVENTS</span>
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-balance">
              Connect with the
              <span className="block text-slate-500">Security Elite</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed">
              Join workshops, hackathons, and conferences led by top security
              researchers. Sharpen your skills in real-time.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="container mx-auto px-6 mb-20">
        <Tabs defaultValue="upcoming">
          <TabsList className="rounded-2xl">
            <TabsTrigger value="upcoming" className="rounded-xl">
              Upcoming Events
            </TabsTrigger>
            <TabsTrigger value="past" className="rounded-xl">
              Past Events
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="upcoming"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardContent>
                  <div className="flex gap-1">
                    {event.tags.map((tag) => (
                      <Badge variant={"outline"} key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2>{event.name}</h2>
                  <div>
                    <div>
                      <div className="flex gap-1">
                        <Clock /> {event.time}
                      </div>
                      <div className="flex gap-1">
                        <Calendar /> {event.date}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <MapPin /> {event.location}
                    </div>
                  </div>
                  <div>
                    <p>{event.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <AvatarGroup />
                    <Badge variant={"outline"}>{event.hashtag}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent
            value="past"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {pastEvents.map((event) => (
              <Card key={event.id}>
                <CardContent>
                  <div className="flex gap-1">
                    {event.tags.map((tag) => (
                      <Badge variant={"outline"} key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2>{event.name}</h2>
                  <div>
                    <div>
                      <div className="flex gap-1">
                        <Clock /> {event.time}
                      </div>
                      <div className="flex gap-1">
                        <Calendar /> {event.date}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <MapPin /> {event.location}
                    </div>
                  </div>
                  <div>
                    <p>{event.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <AvatarGroup />
                    <Badge variant={"outline"}>{event.hashtag}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </section> */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-xs mx-auto grid-cols-2 rounded-2xl">
              <TabsTrigger value="upcoming" className="rounded-xl">
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger value="past" className="rounded-xl">
                Past Events
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="upcoming"
              className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="group overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/30 bg-white dark:bg-gray-900"
                >
                  <CardContent className="p-6">
                    {/* Event Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {event.name}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                            <span className="text-sm font-medium">
                              {new Date(event.date).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                            <span className="text-sm font-medium">
                              {event.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center">
                        <AvatarGroup />
                        {event.attendees && (
                          <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                            +{event.attendees}
                          </span>
                        )}
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        {event.hashtag}
                      </Badge>
                    </div>

                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 w-full inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-200 group-hover:shadow-lg"
                      >
                        Register Now
                        <ArrowUpRight className="ml-2 w-4 h-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent
              value="past"
              className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {pastEvents.map((event) => (
                <Card
                  key={event.id}
                  className="group overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/30 bg-white dark:bg-gray-900 opacity-90 hover:opacity-100"
                >
                  <CardContent className="p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                        Past Event
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {event.name}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                      {event.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-gray-800">
                      <Badge
                        variant="outline"
                        className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full"
                      >
                        {event.hashtag}
                      </Badge>
                      {event.link && (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-1"
                        >
                          View Recap
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
