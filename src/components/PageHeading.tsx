import Image from "next/image";
import { blackHanSans } from "@/lib/fonts";

type PageHeadingProps = {
  children: React.ReactNode;
};

export default function PageHeading({ children }: PageHeadingProps) {
  return (
    <h1
      className={`${blackHanSans.className} flex items-center justify-between text-[60px] text-[#428ce2] px-10 py-5`}
    >
      <span>{children}</span>
      <Image
        src="../../horok_icon.png"
        alt="horok"
        width={300}
        height={315}
        className="h-[60px] w-auto"
        priority
      />
    </h1>
  );
}
