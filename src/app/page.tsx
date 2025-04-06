import { BackgroundLines } from "@/components/ui/background-lines";
import { GlowingEffectGrid } from "@/components/ui/glowing-effect-grid";
import { ProjectSection } from "@/components/ui/project-section";

const projectsData = [
  {
    title: "Crocodive",
    body: "Crocodive est un projet réalisé en groupe de 9 dans le cadre des mes études. Il est composé d'un Backend Laravel et d'un Frontend en React Native. L'application est conçue pour accueillir les données d'un club de plongée, allant de la liste des plongeurs, des accompagnateurs jusqu'à l'agenda détaillé de toutes les séances prévues.",
    slides: [
      {
        title: "crocodive_front_skills",
        src: "/images/IMG_3201.jpg"
      },
      {
        title: "crocodive_front_home",
        src: "/images/IMG_3205.jpg"
      },
      {
        title: "crocodive_front_login",
        src: "/images/IMG_3207.jpg"
      },
    ]
  }
]

export default function Home() {
  return (
    <main>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 z-0">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Martin Ballu, <br /> apprenti développeur.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Rigoureux et passionné de développement Web. Mon prochain objectif est d’acquérir de solides compétences en cybersécurité.
        </p>
      </BackgroundLines>
      <div className="ps-4 pt-4">
        <h1 className="font-extrabold text-4xl mb-2">Projets</h1>
        <p className="text-black dark:text-neutral-400">Une liste non-exhaustive des mes projets les plus montrables.</p>
      </div>
      <GlowingEffectGrid />
      <ProjectSection slides={projectsData[0].slides} title={projectsData[0].title} body={projectsData[0].body} />
      <div className="w-full h-screen flex">
        <p className="m-auto">coming soon...</p>
      </div>
    </main>
  );
}
