import Image from "next/image";
import contactbg from "../../../img/contact/contactbg.png";
export default function Page() {
  return (
    <section className="bg-white w-full overflow-hidden">
      <section className="relative h-screen flex items-center justify-center px-[138px]">
        <Image
          src={contactbg}
          alt="Contact us Background"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 text-center max-w-[1100px]">
          <h2 className="text-white text-[108px] leading-[1] mb-8">
            Get in Touch
          </h2>

          <p className="text-white text-[26px] leading-[1.8] opacity-90 max-w-[760px] mx-auto">
            The freshest ingredients for you every day
          </p>
        </div>
      </section>
    </section>
  );
}
