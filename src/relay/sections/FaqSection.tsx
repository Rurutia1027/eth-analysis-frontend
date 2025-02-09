import * as React from "react";
import Accordion from "../../components/Accordion";
import { SectionTitle } from "../../components/TextNext/SectionTitle";
import { NavigationContext } from "../../contexts/NavigationContext";
import copy from "../copy.json";

const calcCenterElement = (element: HTMLElement): number => {
  const topEl = element.getBoundingClientRect().y + window.scrollY;
  const heightEl = element.clientHeight;

  return topEl - window.innerHeight / 2 + heightEl / 2;
};

const FaqBlock: React.FC = () => {
  const { changeFaqPosition } = React.useContext(NavigationContext);
  const faqSection = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const resizeFun = () => {
      if (faqSection.current) {
        const centerBlock: number = calcCenterElement(faqSection.current);
        changeFaqPosition(centerBlock);
      }
    };

    resizeFun();

    window.addEventListener("resize", resizeFun);
    return () => window.removeEventListener("resize", resizeFun);
  }, [changeFaqPosition]);

  return (
    <section
      className="mt-64"
      ref={faqSection}
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      id="faq"
    >
      <div className="w-full px-4 md:px-8 lg:px-0">
        <Accordion
          title={copy[0]?.question as string}
          text={copy[0]?.answer as string}
        />
        <div
          className="w-full bg-slateus-400"
          style={{ height: "1px", opacity: "0.3" }}
        />
        <Accordion
          title={copy[1]?.question as string}
          text={copy[1]?.answer as string}
        />
        <div
          className="w-full bg-slateus-400"
          style={{ height: "1px", opacity: "0.3" }}
        />
        <Accordion
          title={copy[2]?.question as string}
          text={copy[2]?.answer as string}
        />{" "}
        <div
          className="w-full bg-slateus-400"
          style={{ height: "1px", opacity: "0.3" }}
        />
        <Accordion
          title={copy[3]?.question as string}
          text={copy[3]?.answer as string}
        />
        <div
          className="w-full bg-slateus-400"
          style={{ height: "1px", opacity: "0.3" }}
        />
        <Accordion
          title={copy[4]?.question as string}
          text={copy[4]?.answer as string}
        />
        <div
          className="w-full bg-slateus-400"
          style={{ height: "1px", opacity: "0.3" }}
        />
        <Accordion
          title={copy[5]?.question as string}
          text={copy[5]?.answer as string}
        />
      </div>
    </section>
  );
};

export default FaqBlock;
