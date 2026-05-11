import Image from "next/image";
import menuBg from "../../../img/menu/menu_bg.png";
import Reservations from "@/components/reservations";
import startersBg from "../../../img/menu/starters_bg.png";
import { menu } from "@/db/menu";
export default function Page() {
  return (
    <section className="bg-white w-full overflow-hidden">
      <section className="relative h-screen flex items-center justify-center px-[138px]">
        <Image
          src={menuBg}
          alt="Menu Background"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 text-center max-w-[1100px]">
          <h2 className="text-white text-[108px] leading-[1] mb-8">
            View Our New Menu
          </h2>

          <p className="text-white text-[26px] leading-[1.8] opacity-90 max-w-[760px] mx-auto">
            The freshest ingredients for you every day
          </p>
        </div>
      </section>
      <section className="relative px-[138px] py-[140px] overflow-hidden bg-white">
        <Image
          src={startersBg}
          alt="Starters Background"
          priority
          className="absolute top-0 right-0"
        />

        <div className="text-center mb-24">
          <h2 className="text-[108px] leading-[1] mb-6">Starters</h2>

          <p className="text-2xl text-[#4d4d4d] max-w-[720px] mx-auto leading-[1.7]">
            Begin your dining experience with fresh, elegant starters prepared
            to awaken your appetite.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-x-20 gap-y-20 relative z-10">
          {menu
            .filter((item) => item.cat === "starters")
            .map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex gap-8 group border-b border-black/10 pb-10"
                >
                  <div className="overflow-hidden w-[220px] h-[220px] shrink-0">
                    <Image
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between gap-8 items-start">
                      <h3 className="text-[42px] leading-[1.2] max-w-[500px] group-hover:text-[#9CAA00] transition">
                        {item.name}
                      </h3>

                      <span className="text-[36px] font-bold whitespace-nowrap">
                        ${item.coast}
                      </span>
                    </div>

                    <p className="text-[#4d4d4d] text-[22px] leading-[1.7] mt-4">
                      {item.desc}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
      <Reservations />
    </section>
  );
}
