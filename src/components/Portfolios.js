import Image from "next/image";

const PTFIMAGES = [
  {
    src: "/mac.svg",
    name: "制作物1",
  },
  {
    src: "/code.svg",
    name: "制作物2",
  },
  {
    src: "/create.svg",
    name: "制作物3",
  },
];

export function Portfolios() {
  return (
    <div className="py-12 px-2 text-center bg-amber-light">
      <h1 className="font-Unna text-3xl tracking-wide">Portfolios</h1>
      <div className="border-t w-12 mx-auto mt-1 mb-10"></div>
      {PTFIMAGES.map((ptfimage) => (
        <Image
          key={ptfimage.name}
          src={ptfimage.src}
          alt={ptfimage.name}
          loading="eager"
          width={60}
          height={60}
          priority
        />
      ))}
      <div></div>
    </div>
  );
}
