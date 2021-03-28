export function Profile() {
  return (
    <div className="py-12 px-2 text-center bg-amber-light">
      <h1 className="font-Unna text-3xl tracking-wide">Profile</h1>
      <div className="border-t w-12 mx-auto mt-1 mb-16"></div>
      <p className="font-CourierNew text-xs mt-8 ml-40 -mb-8 transform rotate-45">
        ＼ Hello! ／
      </p>
      <img
        src="IMG_6794.JPG"
        className="rounded-full h-48 w-48 mx-auto object-cover"
      />
      <div className="pt-6 text-3xl font-light inline-block tracking-widest border-dotted border-b border-black">
        Airi
      </div>
      <p className="pt-6 px-9 text-sm text-left">
        岡山生まれ、大阪育ち。猫をこよなく愛しています。普段はインドア派ですが海外が大好き。時間があればふらっと一人旅に出かけることも。現在はWEB制作・プログラミングを学習しています。デザインをしたり、自分の考えたアイデアを形にしたりなど、ものを創り出すことが好きです。日々楽しんで成長していけるようこれからも頑張ります！
      </p>
    </div>
  );
}
