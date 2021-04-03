import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";

const LINKS = [
  { href: "top", name: "TOP" },
  { href: "concept", name: "CONCEPT" },
  { href: "profile", name: "PROFILE" },
  { href: "service", name: "SERVICE" },
  { href: "portfolios", name: "PORTFOLIOS" },
  { href: "contact", name: "CONTACT" },
];

export function MainHeader() {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div className="w-full h-14 bg-white fixed flex justify-between items-center z-10">
        <Link href="/">
          <a className="pt-2 pb-1 px-2">
            <Image
              src="/phonto.png"
              alt="headerIcon"
              width={200}
              height={37}
              loading="eager"
              priority
            />
          </a>
        </Link>

        <button
          onClick={() => setMenu((menu) => !menu)}
          className="pt-2 pb-1 pr-3 pl-6 cursor-pointer focus:outline-none lg:hidden"
        >
          <Image
            src={menu ? "/cross.svg" : "/menu.svg"}
            alt="menuIcon"
            width={37}
            height={37}
            loading="eager"
            priority
          />
        </button>

        {/* 🍔ハンバーガーメニュー🍔 */}
        {menu ? (
          <div className="w-3/6 h-screen py-4 z-10 text-center bg-gray-dark text-white fixed top-14 right-0 lg:hidden">
            {/* SP/TB */}
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
              <Image src="/cat.png" alt="cat" width={130} height={130} />
            </div>

            <ul className="border-dotted border-b border-black">
              {LINKS.map((link) => (
                <AnchorLink href={`#${link.href}`} key={link.name} offset="40">
                  <li className="py-4 text-sm tracking-widest font-light border-dotted border-t border-black">
                    {link.name}
                  </li>
                </AnchorLink>
              ))}
            </ul>
          </div>
        ) : null}
        {/* 🍔🍔🍔 */}

        {/* PC */}
        <div className="hidden lg:flex lg:font-extralight">
          <ul className="lg:flex">
            {LINKS.map((link) => (
              <AnchorLink href={`#${link.href}`} key={link.name} offset="40">
                <li className="p-4">{link.name}</li>
              </AnchorLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
