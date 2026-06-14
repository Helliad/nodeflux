import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Stars } from "./stars";

import jiaxin from "@/assets/images/review/JiaXin.png";
import michael from "@/assets/images/review/Michael.png";
import ragesh from "@/assets/images/review/Rageshwaran.png";
import jaden from "@/assets/images/review/Jaden.png";
import nigel from "@/assets/images/review/NigelKoh.png";

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
      "NodeFlux built us a website that finally feels like our brand. They understood exactly what we wanted and turned it into a clean, easy to use platform that our customers love. The whole process was smooth and the attention to detail was outstanding.",
    name: "Siah Jayden",
    designation: "Simon & Tom Singapore",
    rating: 5,
    avatar: jaden.src,
  },
  {
    id: "2",
    content:
      "The automation work NodeFlux did for us has been a game changer. They quickly found the slow, repetitive tasks that were eating up our days and automated them. Within a few months we were saving real time and money. We could not be happier with the partnership.",
    name: "Akash Goda",
    designation: "Sorab Enterprise",
    rating: 5,
    avatar: michael.src,
  },
  {
    id: "3",
    content:
      "We needed a system that could keep up with how fast our business moves, and NodeFlux delivered. Their team was responsive, professional, and genuinely invested in getting things right. The results speak for themselves.",
    name: "Bakul Goda",
    designation: "Sagar Trading",
    rating: 5,
    avatar: ragesh.src,
  },
  {
    id: "4",
    content:
      "NodeFlux redesigned our digital presence and the difference is night and day. The new look is beautiful, intuitive, and has been received really well by our customers. Working with their team was easy from start to finish.",
    name: "Pinkesh Chauhan",
    designation: "Supreme Design",
    rating: 5,
    avatar: jiaxin.src,
  },
  {
    id: "5",
    content:
      "NodeFlux worked side by side with us to make sure everything fit our needs perfectly. They gave us a smooth, hassle free experience and were always one step ahead. We are grateful for the partnership and thrilled with what they built for us.",
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
        <CarouselContent>
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
