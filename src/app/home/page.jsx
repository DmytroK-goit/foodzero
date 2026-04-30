import Image from "next/image";
import meat from "../../../img/home/meat.png";
import spice from "../../../img/home/spice.png";
export default function Page() {
  return (
    <section className="bg-[#233000] w-full h-[2762px] pt-[302px] pl-[138px] relative">
      <div className="w-[1057px] absolute z-2">
        <h1 className="text-white text-[138px]">
          Healthy Eating is important part of lifestyle
        </h1>
        <p className="text-white text-[24px] w-[60%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue
          arcu
        </p>
      </div>
      <div className="absolute top-[300px] right-[138px] z-0">
        <Image className=" " src={meat} alt="Meat" width={792} height={931} />
        <Image
          src={spice}
          alt="Spice"
          className="absolute -bottom-[25px] right-[320px] z-1"
        />
      </div>
    </section>
  );
}
