import Image from "next/image";
import meat from "../../../img/home/meat.png";
import spice from "../../../img/home/spice.png";
import soup from "../../../img/home/soup.png";
import peper from "../../../img/home/peper.png";
import leaves from "../../../img/home/leavs.png";
import chef from "../../../img/home/Chef.png";
import leav from "../../../img/home/Leaf.png";
import { menu } from "@/db/menu";

export default function Page() {
  return (
    <>
      <section className="relative bg-[#233000] w-full min-h-screen px-[138px] pt-[302px] pb-[200px] overflow-hidden">
        <div className="relative min-h-[1100px]">
          <div className="absolute z-20 max-w-[1057px]">
            <h1 className="text-white text-[138px] leading-[1] tracking-[-2px]">
              Healthy Eating is important part of lifestyle
            </h1>

            <p className="text-white text-[24px] w-[60%] mt-8 leading-[1.6] opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </p>
            <p className="absolute -left-[255px] top-[150%] rotate-90 whitespace-nowrap text-white tracking-[8px] text-[48px]">
              SCROLL ------------
            </p>
          </div>

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
        {/* {"second block "} */}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </p>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-white text-[24px] leading-[1.7] opacity-90 max-w-[500px] mb-10 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
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
      <section className="bg-[#ebf0e4] w-full px-[138px]">
        <div className="flex">
          <div className="relative ">
            <Image src={chef} alt="Chef cook" className="relative z-2" />
            <Image
              className="absolute left-0 top-0 z-1"
              src={leav}
              alt="Leav"
            />
          </div>
          <div>
            <h3 className="text-[108px]">Excellent cook</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
