import Image from "next/image";

  export function Profile ()
  return (
    <div>
      <h1>Profile</h1>
      <p>＼ Hello! ／</p>
      <Image
        src="/IMG_6794.JPG"
        alt="profile-img"
        loading="eager"
        width={500}
        height={370}
        priority
      />
      <div>Airi</div>
      <p>
        岡山生まれ、大阪育ち。猫をこよなく愛しています。基本インドア派ですが海外が大好きで、時間があればよく一人旅に出かけてます。現在はＷＥＢ制作・プログラミングを学習しています。デザインを考えたり自分の考えたアイデアを形にしたり、ものを創り出すことが好きです。日々楽しんで成長していけるようこれからも頑張ります！
      </p>
    </div>
  );
};
