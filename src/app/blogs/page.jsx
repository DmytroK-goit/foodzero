"use client";
import Image from "next/image";
import bgBlog from "../../../img/blogs_main.png";
import { blogs } from "@/db/blogs";
import Link from "next/link";
import { useEffect } from "react";
import { heroAnimation } from "@/animations/heroAnimation";
import { initScrollReveal } from "@/animations/scrollReveal";
import { imageReveal } from "@/animations";

export default function Page() {
  useEffect(() => {
    heroAnimation();
    initScrollReveal();
    imageReveal();
  }, []);
  return (
    <section className="bg-white w-full overflow-hidden">
      <section className="relative h-screen flex items-center justify-center px-[138px]">
        <Image
          src={bgBlog}
          alt="Blogs Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#233000]/65"></div>
        <div className="relative z-10 text-center max-w-[1100px]">
          <h2
            data-hero-title
            className="text-white text-[108px] leading-[1] mb-8"
          >
            Blogs
          </h2>

          <p
            data-reveal="text"
            className="text-white text-[26px] leading-[1.8] opacity-90 max-w-[760px] mx-auto"
          >
            Discover stories, recipes, healthy lifestyle tips, and culinary
            inspiration crafted to bring fresh ideas to your table every day.
          </p>
        </div>
      </section>

      <section data-reveal className="px-[138px] py-[140px]">
        <div className="grid grid-cols-2 gap-x-14 gap-y-24">
          {blogs.map((blog) => {
            return (
              <article key={blog.id} className="group flex flex-col">
                <div data-hero-image className="overflow-hidden mb-8 rounded-sm">
                  <Image
                    src={blog.img}
                    alt={blog.name}
                    className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <h4 className="text-[42px] leading-[1.2] font-bold mb-5 max-w-[700px] group-hover:text-[#9CAA00] transition duration-300">
                  {blog.name}
                </h4>

                <p className="text-[#4d4d4d] text-[24px] leading-[1.7] mb-8 max-w-[620px]">
                  {blog.desc}
                </p>

                <Link
                  href={`/blogs/${blog.id}`}
                  className="text-[24px] font-semibold border-b border-black w-fit pb-1 hover:text-[#9CAA00] hover:border-[#9CAA00] transition duration-300"
                >
                  Show More
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}
