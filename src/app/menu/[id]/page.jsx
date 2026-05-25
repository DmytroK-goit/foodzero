import Image from "next/image";
import Link from "next/link";
import { menu } from "@/db/menu";

export default async function Page({ params }) {
  const menuParams = await params;
  const menuItem = menu.find((item) => item.id === Number(menuParams.id));

  if (!menuItem) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#f9f9f7]">
        <div className="text-center">
          <h2 className="text-[64px] text-[#233000] mb-6">Dish Not Found</h2>

          <Link href="/menu" className="inline-block border border-[#233000] px-8 py-4 hover:bg-[#233000] hover:text-white transition">
            Back to Menu
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-[#f9f9f7] overflow-hidden">
      <section className="relative min-h-screen flex items-center px-[138px] py-[160px] overflow-hidden bg-[#233000]">
        {menuItem.img && <Image src={menuItem.img} alt={menuItem.name} fill priority className="object-cover" />}

        <div className="absolute inset-0 bg-gradient-to-b from-[#233000]/90 via-[#233000]/75 to-[#233000]" />

        <div className="relative z-10 max-w-[900px]">
          <span className="uppercase tracking-[6px] text-[#9CAA00] text-sm">Food Zero Signature Dish</span>

          <h1 className="text-white text-[96px] leading-[1] mt-8 mb-8">{menuItem.name}</h1>

          <p className="text-white/85 text-[24px] leading-[1.8] max-w-[750px]">{menuItem.desc}</p>

          <div className="mt-12 flex items-center gap-10">
            <span className="text-white text-[64px] font-semibold">${menuItem.coast}</span>

            <Link href="/reservations" className="border border-white px-8 py-5 text-white hover:bg-white hover:text-[#233000] transition">
              Reserve Table
            </Link>
          </div>
        </div>
      </section>

      <section className="px-[138px] py-[160px]">
        <div className="grid grid-cols-2 gap-24 items-start">
          <div>
            <span className="uppercase tracking-[5px] text-[#9CAA00] text-sm">About Dish</span>

            <h2 className="text-[72px] text-[#233000] mt-6 mb-10 leading-[1.1]">{menuItem.about}</h2>

            <p className="text-[22px] text-[#4d4d4d] leading-[1.9] mb-10">{menuItem.desc}</p>

            {menuItem.ingredients && (
              <div className="mb-8">
                <h4 className="text-[#233000] text-[28px] mb-4">Ingredients</h4>

                <ul className="flex flex-wrap gap-3">
                  {menuItem.ingredients.map((item) => (
                    <li key={item} className="px-4 py-2 bg-white border text-[#233000] text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {menuItem.taste && (
              <div>
                <h4 className="text-[#233000] text-[28px] mb-4">Taste Profile</h4>

                <div className="flex gap-3 flex-wrap">
                  {menuItem.taste.map((t) => (
                    <span key={t} className="px-4 py-2 bg-[#233000] text-white text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-white p-12 shadow-2xl rounded-[28px]">
            <h3 className="text-[36px] text-[#233000] mb-8">Nutrition Facts</h3>

            <ul className="space-y-5 text-[22px] text-[#4d4d4d]">
              <li>
                Calories: <b>{menuItem.calories}</b>
              </li>
              <li>
                Protein: <b>{menuItem.protein}</b>
              </li>
              <li>
                Fat: <b>{menuItem.fat}</b>
              </li>
              <li>
                Carbs: <b>{menuItem.carbs}</b>
              </li>
              <li>
                Cook Time: <b>{menuItem.cookTime}</b>
              </li>
              <li>
                Serving: <b>{menuItem.serving}</b>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-[138px] py-[140px]">
        <div className="text-center mb-20">
          <h2 className="text-[88px] text-[#233000]">Why Guests Love It</h2>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {[
            {
              title: "Premium Taste",
              text: "Balanced flavor profile with depth and elegance.",
            },
            {
              title: "Fresh Ingredients",
              text: "Only seasonal and high-quality products used.",
            },
            {
              title: "Healthy Balance",
              text: "Designed for nutrition, energy, and wellness.",
            },
          ].map((i) => (
            <div key={i.title} className="bg-[#f5f5f2] p-10 rounded-[28px]">
              <h3 className="text-[34px] mb-4 text-[#233000]">{i.title}</h3>
              <p className="text-[20px] text-[#4d4d4d] leading-[1.7]">{i.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-[138px] pb-[160px]">
        <Link
          href="/menu"
          className="inline-flex border-b border-[#233000] text-[#233000] text-[22px] hover:text-[#9CAA00] hover:border-[#9CAA00]"
        >
          ← Back to Menu
        </Link>
      </section>
    </main>
  );
}
