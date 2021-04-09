import Link from "next/link";
import Image from "next/image";
import { SubHeader } from "../../components/SubHeader";

// 👇別リンク用
const ANOTHERLINKS = [
  {
    href: "https://airicat-portfolio.vercel.app/",
    src: "/scr-shot-pc-ver1.png",
    name: "My Portfolio",
  },
  {
    href: "https://weatherwebapp.vercel.app/",
    src: "/whether.png",
    name: "Whether App",
  },
  {
    href: "https://cafe-search.vercel.app/",
    src: "/cafe.png",
    name: "Cafe Search App",
  },
  {
    href: "https://airiclover.github.io/OsakaLightUp/",
    src: "/scr-shot-pc-ver5.png",
    name: "Osaka light Up HP",
  },
  {
    href: "https://airiclover.github.io/catchatbot/",
    src: "/chat.png",
    name: "Chatbot App",
  },
  {
    href: "https://airiclover.github.io/TodoApp-React/",
    src: "/ScreenShotTodo.png",
    name: "Todo App【copied for study】",
  },
];

// 👇別ページ用
const ANOTHERPAGES = [
  {
    href: "cafe",
    src: "/scr-shot-pc-ver3.jpeg",
    name: "Cafe HP 【virtual】",
  },
];

export default function Portfolio() {
  return (
    <div className="px-2">
      <SubHeader />
      <div className="px-4 text-center text-sm font-light">
        <div className="pt-10 pb-7">
          <h1 className="font-Unna text-3xl tracking-wide">Portfolios</h1>
          <div className="border-t w-12 mx-auto mt-2 mb-10"></div>
        </div>

        <div className="inline-flex flex-col">
          {ANOTHERLINKS.map((anotherLink) => (
            <a
              key={anotherLink.name}
              href={anotherLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-10"
            >
              <Image
                src={anotherLink.src}
                alt={anotherLink.name}
                loading="eager"
                width={530}
                height={330}
                objectFit="cover"
                className="object-top hover:opacity-75"
              />
              <div>{anotherLink.name}</div>
            </a>
          ))}

          {ANOTHERPAGES.map((anotherPage) => (
            <Link
              href={`/portfolio/${anotherPage.href}`}
              key={anotherPage.name}
            >
              <a className="mb-10">
                <Image
                  src={anotherPage.src}
                  alt={anotherPage.name}
                  loading="eager"
                  width={530}
                  height={330}
                  objectFit="cover"
                  className="object-top hover:opacity-75"
                />
                <div>{anotherPage.name}</div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
