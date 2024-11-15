import Image from "next/image";

interface PageBannerProps {
  title: string;
  images: [string, string];
}

const PageBanner = ({ images: [img1, img2], title }: PageBannerProps) => (
  <section className="flex h-banner w-full relative">
    <div className="flex-1 relative">
      <Image alt="" src={img1} fill priority className="object-cover" />
    </div>
    <div className="flex-1 relative opacity-[0.55]">
      <Image alt="" src={img2} fill priority className="object-cover" />
    </div>
    <div className="absolute z-10 inset-0 flex justify-center items-center">
      <h2 className="text-white text-[100px]">{title}</h2>
    </div>
  </section>
);

export default PageBanner;
