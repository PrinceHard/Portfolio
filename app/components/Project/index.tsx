import Image from "next/image"

export interface TypeProps {
    project: {
        id: number,
        src: string,
        mockupImage: string,
        title: string,
    }
}

const Project = ({ project }: TypeProps) => {
    return (
        <a href={project.src} target="_blank">
            <div className="flex flex-col items-center gap-1">
                <div className="w-7/12 sm:w-60 sm:h-40 md:w-64 lg:w-80 lg:h-48 big:w-96 big:h-56">
                    <Image className="h-full" src={project.mockupImage} alt="mockup-image" width={340} height={224} />
                </div>
                <h2 className="text-lg sm:text-lg md:text-lg lg:text-xl big:text-2xl font-semibold text-white tracking-tighter uppercase">
                    {project.title}
                </h2>
            </div>
        </a>
    )
}

export default Project
