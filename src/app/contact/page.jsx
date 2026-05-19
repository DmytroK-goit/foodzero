import Image from "next/image";
import contactbg from "../../../img/contact/contactbg.png";
import orange from "../../../img/contact/Orange.png";
import table from "../../../img/contact/table.png";
import build from "../../../img/contact/build.png";
import Link from "next/link";
import Reservations from "@/components/reservations";

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
      <section className="relative bg-[#f5f5f2] overflow-hidden py-[140px]">
        <div className="relative px-[138px]">
          <Image
            src={orange}
            alt="Orange"
            className="absolute top-[-40px] left-1/2 -translate-x-1/2 opacity-70"
          />

          <div className="relative z-10 flex items-center justify-between gap-24">
            <div className="overflow-hidden rounded-[28px] shadow-2xl">
              <Image
                src={table}
                alt="Table"
                className="w-[620px] h-auto object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="max-w-[520px] flex flex-col gap-8">
              <span className="uppercase tracking-[6px] text-[#9CAA00] text-sm font-semibold">
                Contact
              </span>

              <h2 className="text-7xl leading-tight text-[#111] font-semibold">
                Let’s Create Something Memorable Together
              </h2>

              <p className="text-2xl text-[#555] leading-[1.9]">
                Whether you are planning a private dinner, celebrating a special
                occasion, or simply want to learn more about our restaurant, we
                would love to hear from you.
              </p>

              <div className="flex flex-col gap-5 pt-4">
                <div className="border-b border-[#d9d9d9] pb-4">
                  <p className="text-sm uppercase tracking-[3px] text-[#9CAA00] mb-2">
                    Email
                  </p>

                  <p className="text-3xl text-[#111] font-medium">
                    info@foodzero.com
                  </p>
                </div>

                <div className="border-b border-[#d9d9d9] pb-4">
                  <p className="text-sm uppercase tracking-[3px] text-[#9CAA00] mb-2">
                    Telephone
                  </p>

                  <p className="text-3xl text-[#111] font-medium">
                    +86 852 346 000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[#f5f5f2] overflow-hidden py-[140px]">
        <div className="relative px-[138px]">
          <div className="relative z-10 flex items-center justify-between gap-24">
            <div className="max-w-[520px] flex flex-col gap-8">
              <span className="uppercase tracking-[6px] text-[#9CAA00] text-sm font-semibold">
                Location
              </span>

              <p className="text-2xl text-[#555] leading-[1.9]">
                We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230
              </p>
              <Link
                className="w-40 px-6 py-4 border border-black flex items-center justify-center transition duration-300 hover:scale-[1.05]"
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in maps
              </Link>
            </div>
            <div className="overflow-hidden rounded-[28px] shadow-2xl">
              <Image
                src={build}
                alt="Restourant"
                className="w-[620px] h-auto object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>
      <Reservations />
    </section>
  );
}
