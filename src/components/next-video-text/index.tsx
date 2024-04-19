import React from "react";

export type NextVideoTextProps = {
  typeVideo?: "video/mp4" | "video/webm" | "video/ogg";
  pathVideoInsideText: string;
  children: React.ReactNode;
};

export default function NextVideoText({
  children,
  pathVideoInsideText,
  typeVideo = "video/mp4",
}: NextVideoTextProps) {
  return (
    <div className="relative h-full w-full">
      <div className="relative h-auto w-full">
        <video
          autoPlay
          loop
          controls
          className="h-full w-full border object-cover object-center"
          muted={false}
        >
          <source src={pathVideoInsideText} type={typeVideo} />
        </video>
        <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center bg-white align-middle font-bold text-black mix-blend-screen">
          {children}
        </div>
      </div>
    </div>
  );
}
