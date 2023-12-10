import { NextRequest, NextResponse } from "next/server";
import { optimizeImage } from "./dist/optimizeImage";

// const svgData = Buffer.from(
//   `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
//     <rect x="50" y="50" width="100" height="100" fill="blue" />
//     <circle cx="100" cy="100" r="50" fill="red" />
//   </svg>`
// );

export const GET = async () => {
  const srcImage = await fetch(
    "https://raw.githubusercontent.com/SoraKumo001/zenn/master/images/0d107b03c58104/2022-04-14-17-03-07.png"
  ).then((res) => res.arrayBuffer());
  const image = await optimizeImage({
    image: srcImage,
    width: 200,
    height: 200,
  });
  return new NextResponse(image, {
    headers: {
      "Content-Type": "image/webp",
    },
  });
};

export const runtime = "edge";
