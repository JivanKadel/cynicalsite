"use client";

import { ArrowRight } from "lucide-react";
import { BorderBeam } from "../ui/border-beam";
import { Button } from "../ui/button";
import { useState } from "react";
import { ScheduleCallDialog } from "../contact/SchedulDialog";

export default function BookACall() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setDialogOpen(true)}
        className="relative overflow-hidden w-72 h-12 border-0 border-transparent text-sm 
             text-white rounded-4xl 
             bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 
             hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 
             transition-all duration-300 ease-in-out"
      >
        Request a Free Security Consultation{" "}
        <ArrowRight className="w-5! h-5!" />
        <BorderBeam
          size={50}
          borderWidth={2}
          colorFrom="white"
          colorTo="blue"
          duration={4}
        />
      </Button>
      {dialogOpen && (
        <ScheduleCallDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      )}
    </>
  );
}
