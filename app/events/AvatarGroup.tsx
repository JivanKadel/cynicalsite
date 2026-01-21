"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarGroup() {
  const users = [
    { name: "Naresh Lamgade", image: "/people/mr_naresh.png" },
    { name: "Pranil Shrestha", image: "/people/pranil.jpeg" },
    { name: "Srijan Karki", image: "/people/srijan.jpeg" },
    { name: "Ritik Bhagat", image: "/people/ritik.jpeg" },
    { name: "Nirdesh Rayamajhi", image: "/people/nirdesh.jpeg" },
  ];

  return (
    <div className="flex items-center -space-x-2 *:ring-1 *:ring-muted-foreground/30">
      {users.slice(0, 5).map((user, index) => (
        <Avatar key={index}>
          <AvatarImage
            src={user.image}
            alt={user.name}
            className="object-cover"
          />
          <AvatarFallback>
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
