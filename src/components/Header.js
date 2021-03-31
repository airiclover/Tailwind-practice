import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <div className="w-full h-14 bg-white fixed flex justify-between items-center">
      <Link href="/">
        <a className="pt-2 pb-1 px-2">
          <Image
            src="/phonto.png"
            alt="headerIcon"
            loading="eager"
            width={200}
            height={37}
            priority
          />
        </a>
      </Link>

      <div className="pt-2 pb-1 px-2">
        <Image
          src="/menu.svg"
          alt="menuIcon"
          loading="eager"
          width={37}
          height={37}
          priority
        />
      </div>
    </div>
  );
}
