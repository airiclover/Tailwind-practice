import Image from "next/image";
import { SubHeader } from "../../components/SubHeader";

export default function Portfolio() {
  return (
    <div className="px-2">
      <SubHeader />
      <div className="pt-6 pb-4 text-center">
        <Image
          src="/screencapture3.png"
          alt="cafe"
          width={400}
          height={1000}
          objectFit="cover"
          loading="eager"
        />
      </div>
    </div>
  );
}
