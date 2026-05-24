'use client'
import Bg from '../../../img/portfolio/portfolioBg.png'
import Glass from '../../../img/portfolio/glass.png'
import Fish from '../../../img/portfolio/fish.png'
import FishInPlate from '../../../img/portfolio/fishInPlate.png'
import Image from 'next/image';
import { useEffect } from 'react';
import { heroAnimation } from '@/animations/heroAnimation';
import { initScrollReveal } from '@/animations/scrollReveal';

export default function Page() {
    useEffect(() => {
        heroAnimation();
        initScrollReveal();
    }, []);
    return (
        <section className="bg-white w-full overflow-hidden">
            <section className="relative h-screen flex items-center justify-center px-[138px]">
                <Image
                    src={Bg}
                    alt="Portfolio Background"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="relative z-10 text-center max-w-[1100px]">
                    <h2
                        data-hero-title
                        className="text-white text-[108px] leading-[1] mb-8"
                    >
                        Deep Sea Snow White Cod Fillet
                    </h2>
                </div>
            </section>

            <section className="relative px-[138px] py-[180px] bg-[#f9f9f7] overflow-hidden">
                <div className="grid grid-cols-2 gap-24 items-start">
                    <div className="flex flex-col gap-24">
                        <div
                            data-reveal="text"
                            className="group flex gap-8 items-start p-10 bg-white shadow-xl hover:shadow-2xl transition duration-500 rounded-[28px] hover:-translate-y-2"
                        >
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src={Glass}
                                    alt="Ice Glass"
                                    className="transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col gap-5">
                                <span className="uppercase tracking-[5px] text-[#9CAA00] text-sm font-semibold">
                                    Fresh Experience
                                </span>

                                <h3 className="text-[42px] leading-[1.1] text-[#233000] font-semibold">
                                    Melt in Your Mouth
                                </h3>

                                <p className="text-[#9CAA00] text-lg">
                                    Premium quality ingredients
                                </p>

                                <p className="text-[#555] text-[22px] leading-[1.8]">
                                    Carefully selected seafood combined with refined preparation
                                    techniques creates a delicate texture and unforgettable flavor.
                                </p>
                            </div>
                        </div>


                        <div
                            data-reveal="text"
                            className="group flex gap-8 items-start p-10 bg-[#233000] shadow-xl hover:shadow-2xl transition duration-500 rounded-[28px] hover:-translate-y-2"
                        >
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src={Fish}
                                    alt="Fish"
                                    className="transition duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="flex flex-col gap-5">
                                <span className="uppercase tracking-[5px] text-[#9CAA00] text-sm font-semibold">
                                    Signature Flavor
                                </span>

                                <h3 className="text-[42px] leading-[1.1] text-white font-semibold">
                                    The Best Taste
                                </h3>

                                <p className="text-[#d6d6d6] text-[22px] leading-[1.8]">
                                    Balanced seasoning and fresh ocean ingredients deliver a rich,
                                    elegant, and naturally satisfying dining experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        data-reveal="image"
                        className="group relative bg-white p-10 rounded-[32px] shadow-2xl hover:-translate-y-2 transition duration-500"
                    >
                        <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[#ebf0e4] rounded-full blur-3xl opacity-70"></div>

                        <div className="relative z-10 flex flex-col gap-10">
                            <div className="flex flex-col gap-6">
                                <span className="uppercase tracking-[5px] text-[#9CAA00] text-sm font-semibold">
                                    Chef Recommendation
                                </span>

                                <h3 className="text-[64px] leading-none text-[#233000] font-semibold">
                                    Cooking Suggestions
                                </h3>

                                <p className="text-[#555] text-[24px] leading-[1.9]">
                                    Enhance the natural flavor of cod fillet with light herbs,
                                    citrus accents, and gentle heat for a perfectly balanced dish.
                                </p>
                            </div>

                            <div className="overflow-hidden rounded-[28px] shadow-xl">
                                <Image
                                    src={FishInPlate}
                                    alt="Fish in plate"
                                    className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}