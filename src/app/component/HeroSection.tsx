import React from 'react';
import Link from "next/link";
import {Spotlight} from './ui/Soptlight'
import {Button} from "@/app/component/ui/moving-border";

function HeroSection() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20"
                       fill="blue"/>

            <div className='p-4 relative z-10 w-full text-center'>
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b mfrom-neutral-50  text-white'>Master the art of music</h1>
                <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-white'>Dive into our comprehensive music courses and
                    transform your musical journey today. Whether
                    you Are a beginner or looking to refine your
                    skills, join us to unlock your true potential.
                </p>
                <div className='mt-4'>
                    <Link href={"/course"}>
                        <Button
                            borderRadius="1.75rem"
                            className="text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            This is button
                        </Button>
                    </Link>
                </div>
            </div>

            </div>

        );
        }

        export default HeroSection;