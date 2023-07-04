
export interface TypeProps {
    project: {
        src: string,
        mockupImage: string,
        title: string,
        technologies: string[]
    }
}

const Project = ({ project }: TypeProps) => {
    return (
        <a href={project.src} target="_blank">
            <div className="flex flex-col items-center gap-1">
                <div className="w-96 h-56">
                    <img className="h-full" src={project.mockupImage} alt="mockup-image" />
                </div>
                <h2 className="text-2xl font-semibold text-white tracking-tighter uppercase">
                    {project.title}
                </h2>
                <div className="flex justify-center gap-3 h-8">
                    {project.technologies.map((n) => (
                        <img src={n} alt="technologie-icon" width={32} />
                    ))}
                </div>
            </div>
        </a>
    )
}

export default Project