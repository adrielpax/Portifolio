import * as H from '../layout/home/home';


export function Homepage(){
    return(
        <div className="w-full h-auto">
            <H.HeroSection/>
            <section className="mb-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <H.HomeCard/>
                        <H.HomeCard/>
                        <H.HomeCard/>
                    </div>
                </div>
            </section>
            <div className="flex flex-wrap">
                <H.ProjectCard/>
                <H.ProjectCard/>
                <H.ProjectCard/>
            </div>
            <div className="flex flex-wrap">
                <H.ProjectCard/>
                <H.ProjectCard/>
                <H.ProjectCard/>
            </div>
        </div>
    )
}