import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Stars } from "./stars";

import jiaxin from "@/assets/images/review/JiaXin.png";
import michael from "@/assets/images/review/Michael.png";
import ragesh from "@/assets/images/review/Rageshwaran.png";
import sarah from "@/assets/images/review/Sarah.png";

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
      "NodeFlux absolutely nailed it with our new website. They took the time to understand our brand and target audience, and the result is a stunning, user-friendly platform that perfectly represents our company. Their focus on the little things and the dedication to provide us the absolute best product made the entire experience seamless and exceeded our expectations.",
    name: "Sarah Lim",
    designation: "Marketing Executive",
    rating: 3,
    avatar: sarah.src,
  },
  {
    id: "2",
    content:
      "NodeFlux’s automation services have completely transformed our business. Their team quickly spotted areas where we could boost efficiency and automate all the tedious tasks that were slowing us down. In just three months, we’ve seen incredible results, saving both time and money. Honestly, we couldn’t be happier!",
    name: "Michael Wong",
    designation: "Operations Supervisor",
    rating: 5,
    avatar: michael.src,
  },
  {
    id: "3",
    content:
      "We wanted to redesign our mobile app so that it would enhance our customer experience, and NodeFlux was the perfect partner. Their team developed a beautiful and intuitive app that is easy to use and has been very well received.",
    name: "Jia Xin Lin",
    designation: "Product Manager",
    rating: 5,
    avatar: jiaxin.src,
  },
  {
    id: "4",
    content:
      "Nodeflux was amazing at working side by side with us to make sure our website and apps were exactly what our customers needed, with a smooth, hassle-free user experience. We’re super thankful for their partnership and couldn’t be more pleased with the results!",
    name: "Rageshwaran",
    designation: "Brand Manager",
    rating: 5,
    avatar: ragesh.src,
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
