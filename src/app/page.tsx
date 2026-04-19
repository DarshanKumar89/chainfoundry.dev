import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Primitives from "@/components/home/Primitives";
import CodeExamples from "@/components/home/CodeExamples";
import Audiences from "@/components/home/Audiences";
import Numbers from "@/components/home/Numbers";
import Architectures from "@/components/home/Architectures";
import OpenSource from "@/components/home/OpenSource";
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
      <Primitives />
      <CodeExamples />
      <Audiences />
      <Numbers />
      <Architectures />
      <OpenSource />
      <CTAFooter />
    </>
  );
}
