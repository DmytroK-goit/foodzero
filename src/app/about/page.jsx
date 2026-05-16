import Reservations from "@/components/reservations";
import aboutBg from "../../../img/about/main_bg.png";
import tomato from "../../../img/about/Tomato.png";
import ourStories from "../../../img/about/OurStories.png";
import manager from "../../../img/about/menager.png";
import chef from "../../../img/about/chef.png";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white w-full overflow-hidden">
      <section className="relative h-screen flex items-center justify-center px-[138px]">
        <Image
          src={aboutBg}
          alt="About us Background"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 text-center max-w-[1100px]">
          <h2 className="text-white text-[108px] leading-[1] mb-8">
            Who We Are
          </h2>

          <p className="text-white text-[26px] leading-[1.8] opacity-90 max-w-[760px] mx-auto">
            The most important thing for us is to give you the comfortable
            dining experience
          </p>
        </div>
      </section>
      <section className="relative flex items-center justify-between gap-16 px-[138px] py-[140px] overflow-hidden bg-[#f9f9f7]">
        <Image
          src={tomato}
          alt="Tomato"
          className="absolute top-0 left-1/2 -translate-x-1/2  rotate-12"
        />

        <div className="relative z-10 max-w-[620px] flex flex-col gap-8">
          <h2 className="text-8xl leading-tight text-[#233000] font-semibold">
            Our Story
          </h2>

          <p className="text-2xl leading-[1.8] text-[#4d4d4d]">
            Food Zero was created from a passion for honest ingredients,
            seasonal flavors, and unforgettable dining experiences. We believe
            every meal should tell a story — from locally sourced produce to
            carefully crafted plates served with warmth and creativity.
          </p>

          <p className="text-xl leading-[1.7] text-[#6b6b6b]">
            Our kitchen blends modern techniques with timeless traditions,
            creating a menu that celebrates freshness, balance, and the joy of
            sharing food with others.
          </p>
        </div>
        <div className="relative z-10 overflow-hidden rounded-[24px] shadow-2xl">
          <Image
            src={ourStories}
            alt="Our Stories"
            className="w-[620px] h-auto object-cover hover:scale-105 transition duration-700"
          />
        </div>
      </section>
      <section className="relative flex flex-col gap-32 px-[138px] py-[140px] bg-[#f9f9f7] overflow-hidden">
        <div className="grid grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="overflow-hidden rounded-[28px] shadow-2xl">
              <Image
                src={manager}
                alt="Manager"
                className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-semibold text-[#233000]">
                Restaurant Manager
              </h3>

              <p className="text-[#9CAA00] text-lg mt-1">Carson Hugn</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <span className="uppercase tracking-[5px] text-[#9CAA00] text-sm font-semibold">
              Leadership
            </span>

            <h2 className="text-6xl leading-tight text-[#233000] font-semibold">
              Passionate About Exceptional Service
            </h2>

            <p className="text-2xl leading-[1.9] text-[#4d4d4d]">
              Carson leads our restaurant with a dedication to hospitality,
              consistency, and unforgettable guest experiences. With years of
              industry expertise, he ensures every detail — from ambiance to
              service — reflects the Food Zero philosophy.
            </p>

            <p className="text-xl leading-[1.7] text-[#6b6b6b]">
              His leadership creates a welcoming atmosphere where guests can
              relax, connect, and enjoy thoughtfully prepared cuisine.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-24 items-center">
          <div className="flex flex-col gap-8">
            <span className="uppercase tracking-[5px] text-[#9CAA00] text-sm font-semibold">
              Kitchen
            </span>

            <h2 className="text-6xl leading-tight text-[#233000] font-semibold">
              Creativity Meets Culinary Excellence
            </h2>

            <p className="text-2xl leading-[1.9] text-[#4d4d4d]">
              Executive Chef Jane Cooper brings innovation and artistry into
              every dish. Inspired by seasonal ingredients and global flavors,
              she creates a menu that is both elegant and approachable.
            </p>

            <p className="text-xl leading-[1.7] text-[#6b6b6b]">
              Her vision transforms simple ingredients into memorable
              experiences, celebrating freshness, balance, and modern
              gastronomy.
            </p>
          </div>

          <div className="relative group">
            <div className="overflow-hidden rounded-[28px] shadow-2xl">
              <Image
                src={chef}
                alt="Chef"
                className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-semibold text-[#233000]">
                Executive Chef
              </h3>

              <p className="text-[#9CAA00] text-lg mt-1">Jane Cooper</p>
            </div>
          </div>
        </div>
      </section>
      <Reservations />
    </section>
  );
}
