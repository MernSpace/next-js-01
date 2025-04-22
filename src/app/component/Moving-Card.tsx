"use client";

import React from "react";
import {InfiniteMovingCards} from "./ui/infinite-moving-cards";
import { cn } from "../lib/utils";


const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];

export function MovingCards() {
    return (
        <div
            className="relative flex h-[50rem] w-full items-center justify-center bg-black dark:bg-black overflow-hidden">
            {/* Grid Background */}
            <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,rgba(228,228,231,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.1)_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.2)_1px,transparent_1px)]"
                )}
            />

            {/* Centered Heading */}
            <h2 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-white text-center z-10">
                Hear our Harmony: Voices of success
            </h2>

            {/* Cards Container */}
            <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8 z-10">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>

    );
}


