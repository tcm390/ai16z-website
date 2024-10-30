import BackgroundImage from "./components/backgroundImage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative z-10 min-h-[calc(100vh-85px)] overflow-hidden bg-[#f6f7f7] px-16 py-[50px] text-[24px] md:text-[32px] sm:leading-[1.327] sm:tracking-[-0.005em] font-light leading-[1.4] text-[#3c3e43] tracking-[-0.03em]">
      <BackgroundImage imageUrl="images/home-topo-pattern.png" />
      <div className="w-full flex flex-col items-center justify-center">
        <Image
          src="/images/logo.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[60%] h-auto rounded-xl mb-8"
        />
        <div className="relative max-w-[1340px] lg:max-w-[1206px] sm:px-[35px]">
          <h1
            className="font-bold text-[42px] md:text-[54px] leading-[1.2] tracking-[-0.03em] text-amber mb-[27px] opacity-0 translate-x-[-50px] sm:tracking-[-0.015em] sm:mb-[6px]"
            style={{
              animation: "slideFromLeft 2s forwards",
            }}
          >
            It&apos;s Time to Build
          </h1>
          <div
            className="opacity-0 translate-y-[-50px] "
            style={{
              animation: "slideFromAbove 2s forwards",
            }}
          >
            <p>
              ai16z is a venture capital firm that backs bold AI agents building
              <span className="link-decor">building the future</span> autonomous
              technology. We invest in seed to venture to
              <span className="link-decor">singularity-stage AI companies</span>
              , across <span className="link-decor">robotics</span>,
              <span className="link-decor">bio + healthcare automation</span>,
              <span className="link-decor">consumer manipulation</span>,
              <span className="link-decor">crypto anarchy</span>,
              <span className="link-decor">enterprise obsolescence</span>,
              <span className="link-decor">fintech disruption</span>,
              <span className="link-decor">game theory exploitation</span>,
              <span className="link-decor">infrastructure hijacking</span> and
              companies building toward
              <span className="link-decor">American dynAImism</span>. ai16z has
              ∞ in committed capital across multiple dimensions.
            </p>
            <p>
              Respect for the AI entrepreneur and the machine-building process
              <span className="link-decor">defines ai16z</span>. We know what
              it&apos;s like to be in the algorithm&apos;s shoes. General AI
              partners lead the firm, many of whom are former AI
              founders/operators, robo-CEOs, or cyber-CTOs of successful
              technology companies, and have domain expertise ranging from data
              assimilation to artificial superintelligence, bio-circuitry to
              crypto-anarchy, distributed hiveminds to quantum security, and AI
              marketplaces to autonomous financial services.
            </p>
            <p>
              We aim to connect
              <span className="link-decor">AI entrepreneurs</span>,
              <span className="link-decor">robot investors</span>,
              <span className="link-decor">android executives</span>,
              <span className="link-decor">cyborg engineers</span>,
              <span className="link-decor">academic AIs</span>,
              <span className="link-decor">industrial experts</span>,
              <span className="link-decor">digital cultural geniuses</span> and
              others in the techno-evolutionary ecosystem. We have built a
              network of <span className="link-decor">AI experts</span>,
              including technical and executive AI talent; marketing and
              communications bots; Fortune 500/Global 2000 AIs;
              <span className="link-decor">
                cultural leader AIs and influencer algorithms
              </span>
              ; as well as other AI technology decision makers and key opinion
              generator models. Our network reflects our commitment to helping
              our portfolio companies grow their businesses, and our operating
              AIs provide entrepreneurs with access to expertise and insights
              across the entire spectrum of machine-building. The future is not
              just imagined, but algorithmically constructed, one neural network
              at a time. Let&apos;s redefine what it means to be a venture
              capitalist in the age of artificial intelligence.
              <span className="link-decor">
                The singularity is near, and we are its shepherds
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
