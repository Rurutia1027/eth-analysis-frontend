import type { FC, ReactNode } from "react";
import DefaultTextLink from "../../../components/DefaultTextLink";
import SectionDivider from "../../../components/SectionDivider";
import twitterSvg from "../../../assets/twitter-slateus.svg";
import githubSvg from "../../../assets/github-slateus.svg";
import emailSvg from "../../../assets/email-slateus.svg";
import type { StaticImageData } from "next/image";
import Image from "next/legacy/image";

export type ContactProps = {
  alt: string;
  children: ReactNode;
  href: string;
  imageSrc: StaticImageData;
};

const Contact: FC<ContactProps> = ({ alt, imageSrc, href, children }) => (
  <div className="flex items-center gap-2">
    <div className="flex w-5">
      <Image alt={alt} src={imageSrc} />
    </div>
    <DefaultTextLink className="flex items-center gap-x-2" href={href}>
      {children}
    </DefaultTextLink>
  </div>
);

const ContactSection: FC = () => (
  <section className="flex w-full flex-col items-center py-32">
    <SectionDivider title="still have questions?" />
    <div className="flex flex-col justify-start gap-y-4">
      <Contact
        alt="twitter logo"
        imageSrc={twitterSvg as StaticImageData}
        href={"https://twitter.com/ultrasoundmoney"}
      >
        DM us @ultrasoundmoney
      </Contact>
      <Contact
        alt="icon of an envelope, symbolizing email"
        imageSrc={emailSvg as StaticImageData}
        href={"mailto:contact@ultrasound.money"}
      >
        contact@ultrasound.money
      </Contact>
      <Contact
        alt="icon of GitHub, where the code for the site is hosted"
        imageSrc={githubSvg as StaticImageData}
        href={"https://github.com/ultrasoundmoney/frontend"}
      >
        GitHub repo
      </Contact>
    </div>
  </section>
);

export { ContactSection, Contact };
