import Link from "next/link";
import Image from "next/image";

const PTFIMAGES = [
  {
    href: "airicat-portfolio.vercel.app",
    src: "/scr_shot1.png",
    name: "制作物-portfolio",
  },
  {
    href: "https://airiclover.github.io/weatherwebapp/",
    src: "/whether.png",
    name: "制作物-whetherApp",
  },
  {
    href: "https://cafe-search.vercel.app/",
    src: "/cafe.png",
    name: "制作物-cafeSearchApp",
  },
  {
    href:
      "https://airicat-portfolio.com/portfolio/works-items/osaka-rightsup/osaka-rightsup.html",
    src: "/Osaka.jpg",
    name: "制作物-OsakalightUp",
  },
];

export function Portfolios() {
  return (
    <div className="pt-12 pb-14 px-2 text-center bg-amber">
      <h1 className="font-Unna text-3xl tracking-wide">Portfolios</h1>
      <div className="border-t w-12 mx-auto mt-1 mb-10"></div>

      <div className="grid grid-cols-2 grid-rows-2">
        {PTFIMAGES.map((ptfimage) => (
          <a
            key={ptfimage.name}
            target="_blank"
            rel="noopener noreferrer"
            href={ptfimage.href}
            className="my-1 mx-2 hover:opacity-75"
          >
            <Image
              key={ptfimage.name}
              src={ptfimage.src}
              alt={ptfimage.name}
              loading="eager"
              width={230}
              height={230}
              priority
            />
          </a>
        ))}
      </div>

      <Link href="/">
        <a>
          <div className="mt-8 py-3 px-20 text-sm font-light border inline-block">
            MORE<span className="pl-1">&gt;</span>
          </div>
        </a>
      </Link>
    </div>
  );
}
