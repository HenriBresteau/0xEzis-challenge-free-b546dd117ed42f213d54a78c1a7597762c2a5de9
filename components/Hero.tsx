import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const reviews = [
    {
        name: "Eihposenna",
        username: "@eihposenna",
        body: "Ça me fait découvrir pas mal de choses sur Tailwind et les différentes possibilités qui sont offertes.",
        img: "/profile-picture/picture-1.webp",
    },
    {
        name: "ThomasD",
        username: "@thomasdev59",
        body: "Ezis répond à toutes les questions afin de nous aider le plus possible dans notre objectif.",
        img: "/profile-picture/picture-2.webp",
    },
    {
        name: "Hocine",
        username: "@hocine",
        body: "J'aime bien le concept d'avoir une communauté, Ezis est très à l'écoute et n'hésite pas à répondre aux questions.",
        img: "/profile-picture/picture-3.webp",
    },
    {
        name: "Youtmax654",
        username: "@youtmax654",
        body: "Je me suis grandement améliorer sur les technologies que j'utilise et sur ma façon de traviller sur un projet.",
        img: "/profile-picture/picture-4.webp",
    },
    {
        name: "Baptiste",
        username: "@baptiste_lechat",
        body: "Des projets de qualité avec toutes les ressources dont on aurait besoin pour les réaliser.",
        img: "/profile-picture/picture-5.webp",
    },
    {
        name: "Le D",
        username: "@sport_devweb",
        body: "Le fait d'avoir accès à un discord et une communauté fait vraiment la différence.",
        img: "/profile-picture/picture-6.webp",
    },
    {
        name: "Lois",
        username: "@loisglld",
        body: "Je suis surpris de la qualité des ressources et de la pertinence du contenu pour lequel je me suis abonné !",
        img: "/profile-picture/picture-7.webp",
    },
    {
        name: "LucasQust",
        username: "@LucasQust",
        body: "C’est vraiment lourd, les challenges sont cool, l’environnement qu’Ezis à mit en place est top !",
        img: "/profile-picture/picture-8.webp",
    },
    {
        name: "Jojok63",
        username: "@jojok_63",
        body: "Une communauté très réactive, toujours prête à vous aider quelque soit le sujet.",
        img: "/profile-picture/picture-9.webp",
    },
];
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure className="w-72 cursor-pointer relative">
            <div
                className={cn(
                    "relative overflow-hidden bg-gradient-to-t from-card to-border p-[1px] rounded-lg rounded-tr-[26px] hover:rounded-tr-[36px] h-full w-full transition-all duration-200 ease-out",
                    "before:absolute before:top-0 before:right-0 before:bg-background before:w-8 before:h-8 before:translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:z-20 before:shadow-[0_1px_0_0] before:shadow-border hover:before:w-10 hover:before:h-10 before:transition-all before:duration-200 before:ease-out",
                    "after:absolute after:top-0 after:right-0 after:bg-border/25 after:w-7 after:h-7 after:translate-x-2 after:-translate-y-2 after:rounded-bl-[6px] after:shadow-[-1px_1px_0_0] after:shadow-border after:z-10 hover:after:transform-none after:transition-all after:duration-200 after:ease-out"
                )}
            >
                <div
                    className={cn(
                        "flex flex-col gap-2.5 h-full w-full bg-card p-4 shadow-[inset_0_-4px_44px_0_rgba(69,52,105,0.10)] rounded-lg rounded-tr-[26px] hover:rounded-tr-[36px]"
                    )}
                >
                    <div className="flex flex-row items-center gap-2">
                        <Image
                            className="rounded-full"
                            width="32"
                            height="32"
                            alt=""
                            src={img}
                        />
                        <div className="flex flex-col">
                            <figcaption className="text-sm font-medium text-white">
                                {name}
                            </figcaption>
                            <p className="text-xs font-medium text-muted-foreground">
                                {username}
                            </p>
                        </div>
                    </div>
                    <blockquote className="text-sm text-card-foreground">
                        {body}
                    </blockquote>
                </div>
            </div>
        </figure>
    );
};

const Hero = () => {
    return (
        <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
};

export default Hero;
