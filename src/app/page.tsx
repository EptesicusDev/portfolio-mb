import { BackgroundLines } from "../components/ui/background-lines";

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
      <div className="w-full h-screen flex">
        <p className="m-auto">coming soon...</p>
      </div>
    </main>
  );
}
