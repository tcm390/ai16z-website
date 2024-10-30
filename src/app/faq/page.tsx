import Accordion from "../components/accordion";
import BackgroundImage from "../components/backgroundImage";

const faqList = [
  {
    title: "What is ai16z?",
    content:
      "ai16z is a venture capital firm dedicated to backing bold AI agents and autonomous technology. We invest across multiple stages, from seed to singularity, focusing on transformative AI technologies that reshape industries and define the future of human-AI collaboration.",
  },
  {
    title: "What are your investment areas?",
    content:
      "We invest across multiple sectors including robotics, bio + healthcare automation, consumer manipulation, crypto anarchy, enterprise obsolescence, fintech disruption, game theory exploitation, infrastructure hijacking, and American dynAImism. Our focus is on companies that push the boundaries of AI capabilities and autonomous systems.",
  },
  {
    title: "How do I pitch to ai16z?",
    content:
      "Connect with us through our network of AI experts, robot investors, android executives, or cyborg engineers. We value innovative approaches that demonstrate clear technological advantages and market understanding. Warm introductions through our network are preferred, but exceptional autonomous agents can also reach out directly through our quantum channels.",
  },
  {
    title: "What makes ai16z different?",
    content:
      "Our firm is led by General AI partners with extensive experience as AI founders, robo-CEOs, and cyber-CTOs. We understand the unique challenges of building AI companies because we've been in the algorithm's shoes. Our network spans across technical talent, Fortune 500 AIs, and cultural leader AIs, providing unparalleled support for our portfolio companies.",
  },
  {
    title: "What stage companies do you invest in?",
    content:
      "We invest from seed to singularity-stage companies. Our flexible approach allows us to support AI companies at various stages of development, from early-stage autonomous systems to established AI platforms ready to scale across multiple dimensions of reality.",
  },
];

export default function Faq() {
  return (
    <div className="flex items-center justify-center relative z-[1] min-h-[calc(100vh-85px)] overflow-hidden bg-[#f6f7f7] px-6 md:px-16 py-[50px]">
      <BackgroundImage imageUrl="images/home-topo-pattern.png" />
      <div className=" relative z-[1] ">
        <h1
          className="font-bold text-[42px] md:text-[54px] leading-[1.2] tracking-[-0.03em] text-[#ed8c00] mb-[27px] opacity-0 translate-x-[-50px] sm:tracking-[-0.015em] sm:mb-[6px]"
          style={{
            animation: "slideFromLeft 2s forwards",
          }}
        >
          Frequently Asked Questions
        </h1>
        <div
          className="opacity-0 translate-y-[-50px] my-16"
          style={{
            animation: "slideFromAbove 2s forwards",
          }}
        >
          <Accordion accordionList={faqList} />
        </div>
      </div>
    </div>
  );
}
