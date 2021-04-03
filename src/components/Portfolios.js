import Link from "next/link";
import Image from "next/image";

const PTFIMAGES = [
  {
    href: "https://airicat-portfolio.vercel.app/",
    src: "/scr_shot1.png",
    name: "制作物-portfolio",
    class: "justify-self-end",
  },
  {
    href: "https://airiclover.github.io/weatherwebapp/",
    src: "/whether.png",
    name: "制作物-whetherApp",
    class: "justify-self-start",
  },
  {
    href: "https://cafe-search.vercel.app/",
    src: "/cafe.png",
    name: "制作物-cafeSearchApp",
    class: "justify-self-end",
  },
  {
    href:
      "https://airicat-portfolio.com/portfolio/works-items/osaka-rightsup/osaka-rightsup.html",
    src: "/Osaka.jpg",
    name: "制作物-OsakalightUp",
    class: "justify-self-start",
  },
];

export function Portfolios() {
  return (
    <div
      id="portfolios"
      className="pt-12 pb-14 px-4 text-center bg-amber lg:pt-16 lg:pb-20"
    >
      <h1 className="font-Unna text-3xl tracking-wide">Portfolios</h1>
      <div className="border-t w-12 mx-auto mt-2 mb-10"></div>

      <div className="grid grid-cols-2 gap-y-1 gap-x-2.5 sm:gap-y-2 sm:gap-x-3.5 lg:gap-y-4 lg:gap-x-6">
        {PTFIMAGES.map((ptfimage) => (
          <a
            key={ptfimage.name}
            target="_blank"
            rel="noopener noreferrer"
            href={ptfimage.href}
            className={`${ptfimage.class} hover:opacity-75`}
          >
            <Image
              src={ptfimage.src}
              alt={ptfimage.name}
              width={230}
              height={230}
              loading="eager"
            />
          </a>
        ))}
      </div>

      <Link href="/portfolio">
        <a className="mt-8 py-3 px-20 text-sm font-light border inline-block">
          <div>
            MORE<span className="pl-1">&gt;</span>
          </div>
        </a>
      </Link>
    </div>
  );
}
