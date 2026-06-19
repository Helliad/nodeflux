import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Stars } from "./stars";

import jaden from "@/assets/images/review/Jaden.png";
import nigel from "@/assets/images/review/NigelKoh.png";
import akash from "@/assets/images/review/akash.jpg";
import bakul from "@/assets/images/review/bakul.jpg";
import bhavesh from "@/assets/images/review/bhavesh.png";
import noprofile from "@/assets/images/review/noprofile.png";

export interface Card {
  id: string;
  name: string;
  rating: number;
  designation: string;
  avatar: string;
  content: React.ReactNode;
}

const testimonials: Card[] = [
  {
    id: "1",
    content:
      "NodeFlux built us a website that finally feels like our brand. They understood exactly what we wanted and turned it into a clean, easy to use platform that our customers love. From the first call to launch, the process was smooth and the attention to detail was outstanding.",
    name: "Siah Jayden",
    designation: "Simon & Tom Singapore",
    rating: 5,
    avatar: jaden.src,
  },
  {
    id: "2",
    content:
      "NodeFlux found the repetitive tasks eating up our days and quietly took them off our plate. Within a few months we were saving real time and money. Game changer for us.",
    name: "Akash Goda",
    designation: "Sorab Enterprise",
    rating: 5,
    avatar: akash.src,
  },
  {
    id: "3",
    content: "Responsive, professional, and genuinely invested in getting it right.",
    name: "Bakul Goda",
    designation: "Sagar Trading",
    rating: 5,
    avatar: bakul.src,
  },
  {
    id: "4",
    content:
      "Abhay redesigned our digital presence and the difference is night and day. The new look is beautiful, intuitive, and our customers love it.",
    name: "Pinkesh Chauhan",
    designation: "Supreme Design",
    rating: 5,
    avatar: noprofile.src,
  },
  {
    id: "6",
    content:
      "We have engaged the NodeFlux team on two separate projects for Smooder, including our Smoothie Packs website and a warranty portal for our machine business. What stood out was how quickly they understood our requirements and recommended practical solutions. They were always willing to share ideas and suggest the most suitable approach, often helping us avoid unnecessary features or subscriptions that would increase ongoing costs. Both projects were delivered faster than we expected, and their practical approach helped us hit our objectives while keeping costs manageable.",
    name: "Adeline",
    designation: "Smooder Pte. Ltd.",
    rating: 5,
    avatar: noprofile.src,
  },
  {
    id: "7",
    content:
      "NodeFlux moved us off our old system onto something modern and easy to use. The switch was smooth with no downtime, and our team picked it up fast. Best of all, they have been there for us ever since. Quick to reply and always happy to help. It has modernised our old tech.",
    name: "Bhavesh Lankapati",
    designation: "Mahesh & Co Pte Ltd",
    rating: 5,
    avatar: bhavesh.src,
  },
  {
    id: "5",
    content:
      "Working with Abhay was smooth and hassle free, and he was always one step ahead of us. He took the time to understand how we work before building anything, and it showed in the final result. We are thrilled with what he delivered.",
    name: "Nigel Koh",
    designation: "Together as 1 (TA1)",
    rating: 5,
    avatar: nigel.src,
  },
];

export function TestimonialsCarousel() {
  return <CardCarousel />;
}

function CardCarousel() {
  return (
    <div className="w-full relative sm:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <Carousel className="w-full flex flex-col" opts={{ loop: true }}>
        <CarouselContent className="items-start">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="max-w-lg">
              <article className="bg-card py-10 px-12 flex flex-col gap-8 rounded-2xl border h-full">
                <Stars />
                <p className="text-lg">{testimonial.content}</p>
                <div className="flex gap-4 items-center">
                  <img src={testimonial.avatar} className="h-14 w-14 rounded-full" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold">{testimonial.name}</span>
                    <span className="text-sm font-normal">{testimonial.designation}</span>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex mx-auto mt-14 gap-3">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
      </Carousel>
    </div>
  );
}

const offset = 10;
const scaleFactor = 0.06;

function CardStack() {
  const [cards, setCards] = useState<Card[]>(testimonials);
  const interval = useRef<ReturnType<typeof setInterval>>();

  const startFlipping = useCallback(() => {
    interval.current = setInterval(() => {
      setCards((previous: Card[]) => {
        const array = [...previous];
        array.unshift(array.pop()!);
        return array;
      });
    }, 5000);
  }, []);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval.current);
  }, [startFlipping]);

  return (
    <div className="relative w-full max-w-sm">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-card rounded-3xl p-4 shadow-xl border shadow-card/10 flex flex-col justify-between"
            style={{ transformOrigin: "top center" }}
            animate={{ top: index * -offset, scale: 1 - index * scaleFactor, zIndex: cards.length - index }}
          >
            <article className="bg-card py-10 px-12 flex flex-col gap-8 rounded-2xl border">
              <Stars />
              <p className="text-lg">{card.content}</p>
              <div className="flex gap-4 items-center">
                <img src={card.avatar} className="h-14 w-14 rounded-full" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold">{card.name}</span>
                  <span className="text-sm font-normal">{card.designation}</span>
                </div>
              </div>
            </article>
          </motion.div>
        );
      })}
    </div>
  );
}
