import { ImageResponse } from "next/og";
import LogoIcon from "./icons/logo";

export type Props = {
  title?: string;
};

export default function OpenGraphImage(props?: Props): ImageResponse {
  const { title } = {
    title: process.env.SITE_NAME || process.env.COMPANY_NAME || "Bagisto",
    ...props,
  };

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black px-16 text-center">
        <div tw="flex h-[160px] w-[160px] flex-none items-center justify-center rounded-3xl border border-neutral-700">
          <LogoIcon fill="white" height="58" width="64" />
        </div>
        <p tw="mt-12 text-6xl font-bold text-white">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
