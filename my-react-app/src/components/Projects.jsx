import CircularGallery from './CircularGallery';
import ShinyText from './ShinyText'; 

export const Projects = () => {
    return (
        
        <section id="projects" className="pb-25 pt-25 flex items-center justify-center flex-col">
            <ShinyText text="Projects" disabled={false} speed={3} className='shiny-text text-5xl' />
            <ShinyText text="All source codes avalaible on my github." disabled={false} speed={3} className='shiny-text text-xl pt-5' />
    
        <div style={{ height: '600px',
            width:"100%"}}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
        </section>
        
    );
}