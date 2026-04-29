import Image from "next/image";
import Link from "next/link";
import bgmain from "../../img/bg_main.png";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <Image
        src={bgmain}
        alt="Background photo"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#233000]/85 z-10"></div>

      <section className="relative z-20 flex items-center justify-between min-h-screen px-72">
        <ul className="flex flex-col gap-8 text-white font-semibold">
          {["Home", "Menu", "Blogs", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="relative group cursor-pointer text-7xl w-fit"
            >
              {item}
              <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="text-white max-w-md flex flex-col gap-6">
          <h4 className="text-5xl font-bold mb-4 border-b border-white pb-3">
            Contact
          </h4>

          <a
            href="tel:+86852346000"
            className="text-2xl hover:text-[#9CAA00] transition duration-300"
          >
            +86 852 346 000
          </a>

          <a
            href="mailto:info@foodzero.com"
            className="text-2xl hover:text-[#9CAA00] transition duration-300"
          >
            info@foodzero.com
          </a>

          <p className="text-lg text-gray-200 leading-relaxed">
            1959 Sepulveda Blvd. <br />
            Culver City, CA, 90230
          </p>

          <ul className="flex gap-6 pt-4 text-lg font-medium">
            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-[#9CAA00] transition"
              >
                Instagram
              </Link>
            </li>

            <li>
              <Link
                href="https://x.com"
                target="_blank"
                className="hover:text-[#9CAA00] transition"
              >
                X
              </Link>
            </li>

            <li>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-[#9CAA00] transition"
              >
                Facebook
              </Link>
            </li>

            <li>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="hover:text-[#9CAA00] transition"
              >
                YouTube
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
