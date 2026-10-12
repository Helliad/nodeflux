import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    id: "services",
    title: "What services do you offer?",
    description: "We provide a comprehensive range of digital solutions, including website and app development, digital marketing, SEO, social media management, and custom software development.",
  },
  {
    id: "timeline",
    title: "What is your typical project timeline?",
    description:
      "The timeline varies depending on the project's complexity and scope. Generally, smaller projects take a few weeks, while larger, more complex projects can take several months. We work closely with clients to set realistic deadlines.",
  },
  {
    id: "quality",
    title: "How do you ensure the quality of your projects?",
    description: "We adhere to strict quality assurance processes, including regular testing, client feedback loops, and continuous improvement methodologies to ensure satisfactory results.",
  },
  {
    id: "work",
    title: "Can you provide examples of your previous work?",
    description: (
      <p>
        Absolutely! We have a portfolio of case studies and success stories that showcase our expertise and the impact of our solutions. You can view these on&nbsp;
        <a href="/services/#projects" className="text-primary underline underline-offset-1">
          our website
        </a>
        &nbsp;or request specific examples via the contact us form.
      </p>
    ),
  },
];

export function FAQAccordions() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-5">
      {faqs.map((faq) => (
        <AccordionItem value={faq.id} key={faq.id}>
          <AccordionTrigger className="gap-8">{faq.title}</AccordionTrigger>
          <AccordionContent>{faq.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
