"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function ScheduleCallDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    toast.success("Call request submitted!");
    onOpenChange(false);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>Schedule a Call</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Schedule a Call</DialogTitle>
          <DialogDescription>
            15-minute discovery call with a cybersecurity expert.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground/70">
              Full name
            </Label>
            <Input id="name" placeholder="John Doe" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground/70">
              Work email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground/70">
              Company
            </Label>
            <Input id="company" placeholder="Company name" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-foreground/70">
                Preferred date
              </Label>
              <Input
                id="date"
                type="date"
                required
                className="text-foreground/70"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-foreground/70">Preferred time</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">09:00 – 10:00</SelectItem>
                  <SelectItem value="10:00">10:00 – 11:00</SelectItem>
                  <SelectItem value="11:00">11:00 – 12:00</SelectItem>
                  <SelectItem value="14:00">14:00 – 15:00</SelectItem>
                  <SelectItem value="15:00">15:00 – 16:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground/70">
              What do you want to discuss? (optional)
            </Label>
            <Textarea
              id="message"
              placeholder="Briefly describe your security concerns"
            />
          </div>

          <Button type="submit" className="w-full">
            Request Call
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
