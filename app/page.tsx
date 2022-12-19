import NextImage from "next/image";
import { Navigation } from "../components";

const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row py-4 items-center gap-10">
        <div className="w-full md:w-[50%] h-full flex flex-col gap-8 ">
          <h1 className="text-4xl font-semibold">Welcome.</h1>
          <div className="flex flex-col gap-8 text-lg text-gray-400">
            <p>
              I'm a front-end developer based in Nairobi, Kenya. For the past 7+
              years, I've designed, developed & shipped all sorts of web
              applications for a myriad of industries i.e hospitality, real
              estate, ecommerce & healthcare
            </p>
            <p>
              I'm fascinated with cutting-edge, pixel-perfect, beautiful
              interfaces and intuitively implemented UX.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[50vw] h-full flex items-center justify-center gap-8">
          <div className="z-10 h-max w-max relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 rounded-md border-2 border-gray-200" />
            <NextImage
              alt=""
              width={380}
              height={760}
              src="/images/me.jpg"
              className="-translate-x-8 -translate-y-8 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center gap-8">
        <h1 className="w-full text-2xl font-semibold">Projects.</h1>
        <ul className="flex flex-col gap-3 p-4 list-disc">
          <li className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer  hover:scale-105 hover:translate-x-4 transition-all">
            Talent & Relationship Management
          </li>
          <li className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer  hover:scale-105 hover:translate-x-4 transition-all">
            Mzizi Design System
          </li>
          <li className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer  hover:scale-105 hover:translate-x-4 transition-all">
            Ostroffe Butchery
          </li>
          <li className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer  hover:scale-105 hover:translate-x-4 transition-all">
            Me-Chat
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
