import React, { useState } from "react";
import Image from "next/image";

const SNSES = [
  {
    href: "https://twitter.com/cloverlovexxx",
    src: "/twitter.svg",
    alt: "twitter",
  },
  {
    href: "https://github.com/airiclover",
    src: "/github.svg",
    alt: "github",
  },
];

export function Contact() {
  const [contactAlert, setcontactAlert] = useState("");

  const onFocusContact = () => {
    setcontactAlert("現在お問合せはTwitterDMでのみ受付しております。");
  };

  const onBlurContact = () => {
    setcontactAlert("");
  };

  return (
    <div className="py-12 pb-4 px-2 text-center bg-pink-dark ">
      <h1 className="font-Unna text-3xl tracking-wide ">Contact</h1>
      <div className="border-t w-12 mx-auto mt-1 mb-10"></div>
      <div className="flex flex-col items-center">
        <label className="mb-4 text-left block">
          <div className="text-sm">
            お名前<span className="text-red">*</span>
          </div>
          <input
            className="w-72 py-1.5 px-3 placeholder-gray-500 focus:outline-none"
            placeholder="お名前"
            onFocus={onFocusContact}
            onBlur={onBlurContact}
          />
          <p className="text-xs text-red">{contactAlert}</p>
        </label>
        <label className="mb-4 text-left block">
          <div className="text-sm">
            メールアドレス<span className="text-red">*</span>
          </div>
          <input
            className="w-72 py-1.5 px-3 placeholder-gray-500 focus:outline-none"
            placeholder="example@mail.co.jp"
          />
        </label>
        <label className="mb-6 text-left block">
          <div className="text-sm">
            お問い合わせ内容<span className="text-red">*</span>
          </div>
          <textarea
            className="w-72 h-24 py-2 px-3 placeholder-gray-500 focus:outline-none resize-none"
            placeholder="問い合わせ内容をご記入下さい。"
          />
        </label>
        <button className="py-2.5 px-28 bg-gray text-sm font-light inline-block focus:outline-none">
          送信する
        </button>
      </div>

      <div className="mt-10">
        {SNSES.map((sns) => (
          <a
            key={sns.alt}
            target="_blank"
            rel="noopener noreferrer"
            href={sns.href}
            className="p-1 m-2"
          >
            <Image
              src={sns.src}
              alt={sns.alt}
              loading="eager"
              width={30}
              height={30}
              priority
            />
          </a>
        ))}
      </div>
    </div>
  );
}
