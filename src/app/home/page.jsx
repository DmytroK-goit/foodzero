"use client";

import { useState } from "react";
import Image from "next/image";
import meat from "../../../img/home/meat.png";
import spice from "../../../img/home/spice.png";
import soup from "../../../img/home/soup.png";
import peper from "../../../img/home/peper.png";
import leaves from "../../../img/home/leavs.png";
import chef from "../../../img/home/Chef.png";
import leav from "../../../img/home/Leaf.png";
import fish from "../../../img/home/fish.png";
import carrot from "../../../img/home/Icon_carrot.png";
import lemon from "../../../img/home/Icon_lemon.png";
import starters from "../../../img/calories/sterter.png";
import main from "../../../img/calories/main.png";
import Soup from "../../../img/calories/soup.png";
import Right from "../../../img/calories/arrow-right.png";
import { menu } from "@/db/menu";
import { blogs } from "@/db/blogs";
import Link from "next/link";
import Reservations from "@/components/reservations";

export default function Page() {
  return (
    <>
      <section className="relative bg-[#233000] w-full min-h-screen px-[138px] pt-[302px] pb-[200px] overflow-hidden">
        <div className="relative min-h-[1100px]">
          {/* TEXT BLOCK */}
          <div className="absolute z-20 max-w-[1057px]">
            <h1 className="text-white text-[138px] leading-[1] tracking-[-2px]">
              Healthy Eating is important part of lifestyle
            </h1>

            <p className="text-white text-[24px] w-[60%] mt-8 leading-[1.6] opacity-90">
              Discover balanced meals made with natural ingredients that support
              your body, energize your day, and help you feel your best.
            </p>

            <p className="absolute -left-[255px] top-[150%] rotate-90 whitespace-nowrap text-white tracking-[8px] text-[48px]">
              SCROLL ------------
            </p>
          </div>

          {/* IMAGE BLOCK */}
          <div className="absolute top-[170px] right-0 z-10">
            <Image src={meat} alt="Meat" width={792} height={931} />

            <Image
              src={spice}
              alt="Spice"
              className="absolute -bottom-[30px] left-[-220px]"
              width={854}
              height={240}
            />
          </div>
        </div>
        <div className="mt-[100px] grid grid-cols-2 gap-24 items-end">
          <div className="flex flex-col">
            <Image
              src={soup}
              alt="Soup"
              width={792}
              height={560}
              className="mb-10"
            />

            <h3 className="text-white text-[68px] leading-[1.1] mb-6 max-w-[700px]">
              Start to plan your diet today
            </h3>

            <p className="text-white text-[24px] leading-[1.7] opacity-90 max-w-[600px]">
              Choose nourishing meals, create healthy habits, and enjoy food
              that brings both taste and wellness into your daily routine.
            </p>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-white text-[24px] leading-[1.7] opacity-90 max-w-[500px] mb-10">
              Fresh ingredients, thoughtful recipes, and simple choices can make
              every meal more satisfying and naturally delicious.
            </p>

            <Image
              src={peper}
              alt="Peper"
              width={508}
              height={710}
              className="shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section className="relative bg-white w-full ">
        <Image src={leaves} alt="Leaves" className="absolute top-0 right-0" />
        <div className="pl-[138px] pt-[176px] ">
          <h2 className="text-[108px] text-bolt">Our Menu</h2>
          <p className="text-[#4d4d4d] text-2xl w-[532px]">
            This is a section of your menu. Give your section a brief
            description
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-x-24 gap-y-20 px-[138px] pt-[122px] pb-[200px]">
          {menu.map((item) => {
            return (
              <li key={item.id} className="flex flex-col">
                <span className="text-[48px] font-bold text-right border-b border-black pb-4">
                  ${item.coast}
                </span>

                <h3 className="text-[48px] leading-[1.2] mt-6 mb-4 max-w-[650px]">
                  {item.name}
                </h3>

                <p className="text-[#4d4d4d] text-[24px] leading-[1.6] max-w-[620px]">
                  {item.desc}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="relative bg-[#ebf0e4] w-full px-[138px] py-[180px] overflow-hidden">
        <div className="grid grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center">
            <Image
              src={leav}
              alt="Leaf"
              className="absolute -top-[80px] -left-[60px] w-[260px] opacity-80 z-0"
            />

            <Image
              src={chef}
              alt="Chef cook"
              className="relative z-10 w-full max-w-[700px] object-cover shadow-2xl"
            />
          </div>

          <div className="relative flex flex-col justify-center">
            <h3 className="text-[108px] leading-[1] mb-10 max-w-[620px]">
              Excellent cook
            </h3>

            <p className="text-[#4d4d4d] text-[24px] leading-[1.8] max-w-[620px]">
              Our chef combines modern techniques with seasonal ingredients to
              create unforgettable dishes full of flavor and elegance. Every
              plate is crafted with passion, precision, and attention to the
              smallest details.
            </p>

            <Image
              src={leav}
              alt="Leaf"
              className="absolute -bottom-[120px] right-[-60px] w-[320px] rotate-180 opacity-70"
            />
          </div>
        </div>
      </section>
      <section className="bg-white px-[138px] py-[180px]">
        <ul className="grid grid-cols-3 gap-20 items-start">
          <li className="flex flex-col items-center text-center">
            <div className="bg-[#ebf0e4] rounded-full w-60 h-60 flex items-center justify-center mb-10">
              <Image src={fish} alt="Fish" />
            </div>

            <h4 className="text-5xl font-bold mb-6">Premium Quality</h4>

            <p className="text-2xl text-[#4d4d4d] leading-[1.7] max-w-[420px]">
              We select only the finest ingredients to ensure every dish is rich
              in flavor, freshness, and exceptional quality.
            </p>
          </li>

          <li className="flex flex-col items-center text-center">
            <div className="bg-[#ebf0e4] rounded-full w-60 h-60 flex items-center justify-center mb-10">
              <Image src={carrot} alt="Carrot" />
            </div>

            <h4 className="text-5xl font-bold mb-6">Seasonal Vegetables</h4>

            <p className="text-2xl text-[#4d4d4d] leading-[1.7] max-w-[420px]">
              Our menu changes with the seasons, bringing vibrant vegetables
              harvested at their peak taste and nutrition.
            </p>
          </li>

          <li className="flex flex-col items-center text-center">
            <div className="bg-[#ebf0e4] rounded-full w-60 h-60 flex items-center justify-center mb-10">
              <Image src={lemon} alt="Lemon" />
            </div>

            <h4 className="text-5xl font-bold mb-6">Fresh Fruit</h4>

            <p className="text-2xl text-[#4d4d4d] leading-[1.7] max-w-[420px]">
              Carefully chosen fresh fruit adds natural sweetness, bright
              flavors, and a refreshing finish to every meal.
            </p>
          </li>
        </ul>
      </section>
      <section className="bg-white px-[138px] py-[130px]">
        <ul className="grid grid-cols-2 gap-x-10 gap-y-20">
          {blogs.slice(0, 2).map((blog) => {
            return (
              <li key={blog.id} className="flex flex-col group">
                <div className="overflow-hidden mb-8">
                  <Image
                    src={blog.img}
                    alt={blog.name}
                    className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-[42px] leading-[1.2] font-bold mb-5 max-w-[700px] group-hover:text-[#9CAA00] transition">
                  {blog.name}
                </h4>
                <p className="text-[#4d4d4d] text-[24px] leading-[1.7] mb-8 max-w-[620px]">
                  {blog.desc}
                </p>
                <Link
                  href={`/blogs/${blog.id}`}
                  className="text-[24px] font-semibold border-b border-black w-fit pb-1 hover:text-[#9CAA00] hover:border-[#9CAA00] transition"
                >
                  Show More
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <Reservations />
      <section className="bg-white px-[138px] py-[140px]">
        <div className="max-w-[900px] mx-auto text-center mb-20">
          <h2 className="text-[108px] leading-[1] mb-6">
            Calories Energy Balance
          </h2>

          <p className="text-[#4d4d4d] text-[24px] leading-[1.7]">
            Explore thoughtfully prepared dishes designed to bring taste,
            nutrition, and balance to every meal.
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-8">
          <li className="relative group overflow-hidden cursor-pointer">
            <Image
              src={starters}
              alt="Starters menu"
              className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition duration-500"></div>

            <h4 className="absolute top-[48px] left-[40px] text-white text-5xl z-10">
              Starters
            </h4>

            <Link href="/menu">
              <div className="absolute top-[48px] right-[40px] z-10 bg-white w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-[#9CAA00] transition">
                <Image src={Right} alt="Right" />
              </div>
            </Link>
          </li>

          <li className="relative group overflow-hidden cursor-pointer">
            <Image
              src={main}
              alt="Main menu"
              className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition duration-500"></div>

            <h4 className="absolute top-[48px] left-[40px] text-white text-5xl z-10">
              Mains
            </h4>

            <Link href="/menu">
              <div className="absolute top-[48px] right-[40px] z-10 bg-white w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-[#9CAA00] transition">
                <Image src={Right} alt="Right" />
              </div>
            </Link>
          </li>
          <li className="relative group overflow-hidden cursor-pointer">
            <Image
              src={Soup}
              alt="Soup menu"
              className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition duration-500"></div>

            <h4 className="absolute top-[48px] left-[40px] text-white text-5xl z-10">
              Soup
            </h4>

            <Link href="/menu">
              <div className="absolute top-[48px] right-[40px] z-10 bg-white w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-[#9CAA00] transition">
                <Image src={Right} alt="Right" />
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
