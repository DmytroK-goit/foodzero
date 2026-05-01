import Image from "next/image";
import meat from "../../../img/home/meat.png";
import spice from "../../../img/home/spice.png";
import soup from "../../../img/home/soup.png";
import peper from "../../../img/home/peper.png";

export default function Page() {
  return (
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
  );
}
