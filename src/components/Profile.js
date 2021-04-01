import Image from "next/image";

export function Profile() {
  return (
    <div id="profile" className="pt-12 pb-14 px-2 text-center bg-amber">
      <h1 className="font-Unna text-3xl tracking-wide">Profile</h1>
      <div className="border-t w-12 mx-auto mt-1 mb-16"></div>
      <div>
        <p className="font-CourierNew text-xs mt-8 ml-40 -mb-8 transform rotate-45">
          ＼ Hello! ／
        </p>
        <Image
          src="/IMG_6794.JPG"
          alt="profile"
          loading="eager"
          width={200}
          height={200}
          priority
          className="rounded-full mx-auto object-cover"
        />
      </div>
      <div className="pt-6 text-3xl font-light inline-block tracking-widest border-dotted border-b border-black">
        Airi
      </div>
      <p className="pt-6 px-9 text-sm text-left sm:px-28 lg:w-6/12 lg:mx-auto">
        岡山生まれ、大阪育ち。とにかく猫が大好き！愛猫は"クローバー"。趣味は海外旅行で時間があればふらっと一人旅に出かけることも。現在はWEB制作・プログラミングを学習しています。デザインをしたり自分の考えたアイデアを形にしたり、ものを創り出すことが好きです。日々楽しんで成長していけるようこれからも頑張ります！
      </p>
    </div>
  );
}
