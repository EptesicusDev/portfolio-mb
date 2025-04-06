"use client";

import { Box } from "lucide-react";
import { GlowingEffect } from "./glowing-effect";
import { Badge } from "@/components/ui/badge"


export function GlowingEffectGrid() {
  return (
    <ul id="projects" className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 p-4 mb-4">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Crocodive"
        description="Une application mobile cross plateforme pour les adhérents d'une association."
        technos={[{name: "React Native", color: "sky"}, {name: "Laravel", color: "red"}]}
      />
 
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="ChatbotDAFC"
        description="Refonte avec carte blanche de l'interface d'un des Chatbots de chez Orano, simple et épurée."
        technos={[{name: "Bootstrap", color: "indigo"}, {name: "OpenAI", color: "teal"}]}
      />
 
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Blog Twitter-like"
        description="Le but de cette application est d'héberger les posts que mon équipe et moi créons pour constituer notre veille technologique. Je me suis fortement inspiré des applications avec un feed qui trône au centre (Twitter, Linkedin, ...)."
        technos={[{name: "Vue JS", color: "green"}, {name: "Tailwind", color: "cyan"}]}
      />
 
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Portfolio"
        description="Voilà ma vision du beau en terme de Frontend. Fait avec passion pour m'exercer avec une stack technique à la pointe de la technologie."
        technos={[{name: "Next JS", color: "slate"}, {name: "Aceternity", color: "slate"}, {name: "shadcn/ui", color: "slate"}, {name: "Vercel", color: "slate"}]}
      />
 
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Coming soon..."
        description="..."
        technos={[]}
      />
    </ul>
  );
}
 
interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  technos: {name: string, color: string}[];
}
 
const GridItem = ({ area, icon, title, description, technos }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <div className="flex gap-1">
                {technos.map((techno, index) => 
                  <Badge className={`bg-${techno.color}-500 dark:bg-${techno.color}-900`} variant="default" key={index}>{techno.name}</Badge>
                )}
              </div>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
