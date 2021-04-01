import Image from "next/image";

const SERVICES = [
  {
    src: "/mac.svg",
    name: "WEB制作",
    contents:
      "ヒアリング内容をもとに、お客さまの目的に沿ったWEB制作を致します。各デバイス幅に合わせてデザインするレスポンジブ化や、サイト修正も対応可能です。",
  },
  {
    src: "/code.svg",
    name: "コーディング",
    contents:
      "HTML・CSSはもちろん、JavaScriptを用いてアニメーションなどの動的なコンテンツの対応も可能です。シンプルでわかりやすい、SEO対策まで意識したコーディングをさせていただきます。",
  },
  {
    src: "/create.svg",
    name: "ライティング",
    contents:
      "ブログ・ウェブメディア（記事作成）のライティング作業も好きです。ぜひご相談下さい。",
  },
];

export function Service() {
  return (
    <div id="service" className="bg-stoneImg pt-12 pb-14 px-2 text-center">
      <h1 className="font-Unna text-3xl tracking-wide">Service</h1>
      <div className="border-t w-12 mx-auto mt-1 mb-10"></div>
      <div className="lg:mx-auto lg:flex lg:items-start lg:w-9/12">
        {SERVICES.map((service) => (
          <div
            key={service.name}
            className="border-solid border w-64 mx-auto mb-8 last:mb-0 py-6 px-8 bg-white lg:h-72"
          >
            <Image
              src={service.src}
              alt={service.name}
              loading="eager"
              width={60}
              height={60}
              priority
              className="text-white"
            />
            <h2 className="py-1 border-dotted border-b border-black">
              {service.name}
            </h2>
            <p className="pt-4 text-xs text-left">{service.contents}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
