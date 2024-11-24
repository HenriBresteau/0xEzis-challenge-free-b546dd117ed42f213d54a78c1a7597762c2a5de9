import { GridPattern } from "../public/grid-pattern";
import { SpikesIcon } from "../public/spikes_icon";
import arrow from "../public/arrow-right.svg";
import Image from "next/image";
import Hero from "../components/Hero";
import Link from "next/link";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-56 h-screen overflow-hidden w-full relative">
                <GridPattern className="absolute top-0 left-0 w-full h-auto -z-20 rotate-180" />
                <div className="absolute top-0 w-full h-72 bg-primary/40 blur-[374px] -translate-y-full "></div>
                <div className="flex gap-3 items-center">
                    <SpikesIcon />
                    <h1 className="font-medium text-2xl">Skipes</h1>
                </div>
                <Hero />
                <Link
                    href="https://www.spikes.dev/henribresteau"
                    className="flex items-center gap-3 rounded-full border border-border px-6 py-1 backdrop-blur-sm font-medium text-base leading-8 group hover:bg-muted-foreground/5 hover:scale-105 hover:transition-all transition-all shadow shadow-transparent hover:shadow-muted-foreground "
                >
                    www.spikes.dev
                    <Image
                        src={arrow}
                        alt="arrow"
                        className="group-hover:translate-x-1 group-hover:transition-transform transition-transform"
                    />
                </Link>
                <div className="absolute bottom-0 w-full h-96 bg-primary/40 blur-[374px] translate-y-full "></div>
                <GridPattern className="absolute bottom-0 left-0 w-full h-auto -z-20" />
            </div>
        </main>
    );
}
