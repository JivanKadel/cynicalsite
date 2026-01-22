import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqComponent({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="border border-border/30 rounded-md px-4 py-2"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline md:text-lg text-foreground/90">
          {question}
        </AccordionTrigger>
        <AccordionContent className="text-foreground/70 text-base pt-2 border-t border-border/50">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
