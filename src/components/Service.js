import Image from "next/image";

const SERVICES = [
  {
    src: "/mac.svg",
    name: "ＨＰ・ＬＰ制作",
    contents:
      "ヒアリング内容をもとに、お客さまの目的に沿ったWEB制作を致します。各デバイス幅に合わせてデザインするレスポンジブ化や、サイト修正も対応可能です。",
  },
  {
    src: "/code.svg",
    name: "コーディング",
    contents:
      "HTML・CSSはもちろん、JavaScript(jQuery)を用いてアニメーションなどの動的なコンテンツの対応も可能です。シンプルでわかりやすい、SEO対策まで意識したコーディングをさせていただきます。",
  },
  {
    src: "/create.svg",
    name: "Writing",
    contents:
      "ブログ・ウェブメディア（記事作成）のライティングなどにも対応致します。ご相談下さい。",
  },
];

export function Service() {
  return (
    <div>
      <h1 className="font-serif text-3xl tracking-wide">Service</h1>
      <div>
        {/* 👇map回す */}
        {SERVICES.map((service) => (
          <div key={service.name}>
            <Image
              src={service.src}
              alt={service.name}
              loading="eager"
              width={60}
              height={60}
              priority
            />
            <h2>{service.name}</h2>
            <p>{service.contents}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
