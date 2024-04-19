import NextVideoText from "@/components/next-video-text";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NextVideoText pathVideoInsideText="https://www.w3schools.com/html/mov_bbb.mp4">
        <h1 className="text-[300px]">Next Video: any Text: any</h1>
      </NextVideoText>
    </main>
  );
}
