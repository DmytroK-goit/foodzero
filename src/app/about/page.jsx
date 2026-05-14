import Reservations from "@/components/reservations";
import aboutBg from "../../../img/about/main_bg.png";
import tomato from "../../../img/about/Tomato.png";
import ourStories from "../../../img/about/OurStories.png";
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
      <Reservations />
    </section>
  );
}
