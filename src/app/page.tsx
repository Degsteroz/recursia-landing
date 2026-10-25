import { AlsoShipped } from "@/sections/AlsoShipped/AlsoShipped";
import { Contact } from "@/sections/Contact/Contact";
import { Header } from "@/sections/Header/Header";
import { Hero } from "@/sections/Hero/Hero";
import { Marquee } from "@/sections/Marquee/Marquee";
import { People } from "@/sections/People/People";
import { Playground } from "@/sections/Playground/Playground";
import { Services } from "@/sections/Services/Services";
import { Ventures } from "@/sections/Ventures/Ventures";
import { Work } from "@/sections/Work/Work";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <Work />
      <Ventures />
      <AlsoShipped />
      <Playground />
      <Services />
      <People />
      <Contact />
    </>
  );
}
