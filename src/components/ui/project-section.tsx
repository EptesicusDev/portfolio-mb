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
        <div className="p-4">
            <div className="grid grid-cols-3 h-auto">
                <div>
                    <h2 className="">{title}</h2>
                    <p className="text-black dark:text-neutral-400">{body}</p>
                </div>
                <div className="col-span-2 overflow-x-hidden h-auto">
                    <Carousel slides={slides}/>
                </div>
            </div>
        </div>
    )
}