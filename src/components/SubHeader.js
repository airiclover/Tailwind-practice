import Link from "next/link";
import Image from "next/image";

export function SubHeader() {
  return (
    <div>
      <div className="w-full h-14 flex">
        <Link href="/">
          <a className="pt-2 pb-1">
            <Image
              src="/phonto.png"
              alt="headerIcon"
              width={200}
              height={37}
              loading="eager"
              priority
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
