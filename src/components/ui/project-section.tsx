import { Carousel } from "@/components/ui/carousel";

interface SlideData {
    title: string;
    src: string;
}

interface ProjectSectionProps {
    slides: SlideData[],
    title: string,
    body: string
}

export function ProjectSection({ slides, title, body }: ProjectSectionProps) {
    return (
        <div className="py-4">
            <div className="grid grid-cols-3">
                <div className="z-10 px-8 bg-white dark:bg-zinc-950">
                    <h2 className="font-extrabold text-2xl mb-2">{title}</h2>
                    <p className="text-black dark:text-neutral-400">{body}</p>
                </div>
                <div className="col-span-2 ">
                    <Carousel slides={slides}/>
                </div>
            </div>
        </div>
    )
}