"use client";
import { CldImage } from "next-cloudinary";

export default function CloudinaryImgWrapper(props) {
  return <CldImage {...props} />;
}
