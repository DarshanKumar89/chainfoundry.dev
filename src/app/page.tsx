import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
// import Primitives from "@/components/home/Primitives"; // moved to /about
// import CodeExamples from "@/components/home/CodeExamples"; // hidden on home
// import Audiences from "@/components/home/Audiences"; // hidden on home
import WhyNow from "@/components/home/WhyNow";
import Numbers from "@/components/home/Numbers";
// import Architectures from "@/components/home/Architectures"; // moved to /about
// import OpenSource from "@/components/home/OpenSource"; // hidden on home
import CTAFooter from "@/components/CTAFooter";

export const metadata: Metadata = {
  title: "ChainFoundry — The Universal Blockchain Data Toolkit",
  description:
    "Decode, transport, index, and correlate blockchain data across 7 architectures and 500+ networks. One Rust core, 6 language bindings.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      {/* <Primitives /> — moved to /about */}
      {/* <CodeExamples /> — hidden on home */}
      {/* <Audiences /> — hidden on home */}
      <WhyNow />
      <Numbers />
      {/* <Architectures /> — moved to /about */}
      {/* <OpenSource /> — hidden on home */}
      <CTAFooter />
    </>
  );
}
