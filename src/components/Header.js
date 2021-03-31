import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { src: "/", name: "TOP" },
  { src: "/", name: "CONCEPT" },
  { src: "/", name: "PROFILE" },
  { src: "/", name: "SERVICE" },
  { src: "/", name: "PORTFOLIOS" },
  { src: "/", name: "CONTACT" },
];

export function Header() {
  return (
    <div>
      <div className="w-full h-14 bg-white fixed flex justify-between items-center ">
        <Link href="/">
          <a className="pt-2 pb-1 px-2">
            <Image
              src="/phonto.png"
              alt="headerIcon"
              loading="eager"
              width={200}
              height={37}
              priority
            />
          </a>
        </Link>

        <div className="pt-2 pb-1 px-2 cursor-pointer">
          <Image
            src="/menu.svg"
            // src="/cross.svg"
            alt="menuIcon"
            loading="eager"
            width={37}
            height={37}
            priority
          />
        </div>
      </div>

      {/* -----🍔------ */}
      <div className="w-3/6 h-screen py-4 text-center bg-gray-dark text-white fixed top-14 right-0 z-10">
        <div>
          <p className="text-xs font-extralight">
            thank you for
            <br />
            coming to my portfolio!
          </p>

          <div className="mx-6 py-1 flex justify-between text-xs -mb-8">
            <p className="font-CourierNew">＼</p>
            <p className="font-CourierNew">／</p>
          </div>
          <Image
            src="/cat.png"
            alt="cat"
            loading="eager"
            width={130}
            height={130}
            priority
          />
        </div>

        <ul className="border-dotted border-b border-black">
          {LINKS.map((link) => (
            <li
              key={link.name}
              className="py-4 text-sm tracking-widest font-light border-dotted border-t border-black"
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
      {/* -----🍔------ */}
    </div>
  );
}
