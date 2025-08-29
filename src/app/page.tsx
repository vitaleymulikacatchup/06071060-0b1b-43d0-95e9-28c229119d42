"use client";
import NavbarBase from '@/components/navigation/NavbarBase';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <>
      <NavbarBase
        logoSrc="/images/logo.svg"
        logoAlt="MemCoin Splash"
        leftButtonText="Menu"
        rightButtonText="Get MEM"
        onLeftButtonClick={() => {}}
        onRightButtonClick={() => {}}
        className="bg-white shadow-md"
      />
      <FrameHero
        title="Welcome to MemCoin"
        description="Join the fun and discover exciting opportunities."
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
      />
      <CtaAbout
        title="What is MemCoin?"
        descriptions={["MemCoin is a fun new way to engage with cryptocurrencies.", "Join our community and enjoy trading with memes!"]}
      />
      <HowToBuy2D
        variant="simple"
        title="How to Buy"
        steps={{
          title: "Step by Step",
          description: "Follow these easy steps to buy MemCoin.",
          image: "/images/logo.svg",
          position: "center",
          isCenter: true
        }}
      />
      <ExpandingGridTokenomics
        title="Tokenomics"
        description="Understanding the math behind MemCoin."
        cardItems={[
          { id: 1, title: "Total Supply", description: "1 million coins" },
          { id: 2, title: "Circulating Supply", description: "500k coins" },
          { id: 3, title: "Market Cap", description: "$10 million" }
        ]}
      />
      <FooterLogo
        logoSrc="/images/logo.svg"
        logoAlt="MemCoin Logo"
        logoText="MemCoin Splash"
        className="bg-gray-100 text-gray-700"
      />
    </>
  );
}