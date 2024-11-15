import { NAV_ROUTES, PUBLIC_ROUTES } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = () => {
  const routes = NAV_ROUTES.filter(({ href }) => PUBLIC_ROUTES.HOME !== href);

  return (
    <div className="flex flex-col gap-[100px]">
      <section className="w-fit mx-auto grid grid-cols-3 gap-20 py-20">
        {routes.map(({ href, title }, index) => (
          <div key={index} className="flex flex-col w-40 h-40">
            <span className="text-[98px] leading-[140px]">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <Link href={href} className="text-[13px] uppercase underline">
              {title}
            </Link>
          </div>
        ))}
      </section>
      <section className="flex flex-col items-center gap-10 max-w-[980px] mx-auto text-center text-[20px] leading-[1.35em] italic">
        <p className="text-justify not-italic">
          Jenk is a London based social entrepreneur, public speaker and social
          change activist, as well as the Founder & CEO of Thred Media, a 100%
          social change focused enterprise that specialises in Publishing,
          Consulting and Production aimed at Generation Z. Jenk is a member of
          the Google Z-Council, Oracle for Startups, Microsoft Surface young
          entrepreneur team and The Knowledge Society.
        </p>
        <p>
          &quot;If we are to achieve lasting impact through our efforts, then
          this generation must
          <br /> parse the sometimes un-focused energy of digital media and
          combine it with
          <br /> longstanding principles for building and sustaining social
          campaigns.
        </p>
        <p>
          As someone 15 years younger than the internet, its universal influence
          has
          <br /> directly shaped the way that I and others born into the online
          generation
          <br /> engage with social change. For some like me, it makes activism
          without
          <br /> the ability to connect using social media completely
          unimaginable.
        </p>
        <p>
          Use your media to grow awareness.
          <br /> Use your voice to bring attention.
          <br />
          Use your privilege to drive purpose.
          <br /> And use your time on this planet to
          <br /> create positive social change at scale.&quot;
          <br />
          <Link
            href="https://youtu.be/evvv45BAYvc"
            className="underline text-xs"
          >
            TEDxTalk by Jenk Oz- &apos;Can a &apos;like&apos; change the
            world&apos;, 2021
          </Link>
        </p>

        <Image
          src="https://static.wixstatic.com/media/f6e04a_b72a4bfef2a44f0db7fc5e6847495080~mv2.png/v1/crop/x_290,y_143,w_1423,h_697/fill/w_235,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/BeFunky-collage%20(95).png"
          alt=""
          width={235}
          height={113}
        />
      </section>
    </div>
  );
};

export default DashboardPage;
