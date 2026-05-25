
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/db/blogs";


export default async function Page({ params }) {
  const resolvedParams = await params;
  const blog = blogs.find((item) => item.id === Number(resolvedParams.id));

  if (!blog) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 data-hero-title className="text-[72px] mb-6">Blog Not Found</h2>

          <Link
            href="/blogs"
            className="text-2xl border-b border-black pb-1 hover:text-[#9CAA00] hover:border-[#9CAA00] transition"
          >
            Back to Blogs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white w-full overflow-hidden">
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src={blog.img}
          alt={blog.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 max-w-[1200px] px-[138px] text-center">
          <h2 data-hero-title className="text-white text-[88px] leading-[1.1]">{blog.name}</h2>
        </div>
      </section>

      <section className="px-[138px] py-[140px]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[#9CAA00] text-[22px] mb-8 uppercase tracking-[4px]">
            Food Zero Blog
          </p>

          <p className="text-[34px] leading-[1.7] text-[#4d4d4d] mb-16">
            {blog.desc}
          </p>

          <div className="w-full h-[1px] bg-black/10 mb-16"></div>

          <p className="text-[28px] leading-[2] text-[#2e2e2e] whitespace-pre-line">
            {blog.fullDesc}
          </p>

          <div className="flex justify-between items-center mt-24">
            <Link
              href="/blogs"
              className="text-[24px] border-b border-black pb-1 hover:text-[#9CAA00] hover:border-[#9CAA00] transition"
            >
              ← Back to Blogs
            </Link>

            <Link
              href="/menu"
              className="bg-[#233000] text-white px-10 py-5 text-xl hover:bg-[#9CAA00] transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
