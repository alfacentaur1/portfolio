import CircularGallery from './CircularGallery';
import ShinyText from './ShinyText'; 
import Masonry from './Masonry';
import calc from "./imgs/calc.png"; 
import php from "./imgs/php.png"; 
import rps from "./imgs/rps.png"; 
import sms from "./imgs/real.png";
import TiltedCard from './TiltedCard';

const data = [
    { id: "https://alfacentaur1.github.io/calculator/", image: calc, height: 500 },
    { id: 2, image: php, height: 600 },
    { id: 3, image: rps, height: 500 },
    { id: 4, image: sms, height: 700}
    ];
export const Projects = () => {
    return (
        
        <section id="projects" className="pb-25 pt-25 flex items-center justify-center flex-col z-50 mb-20">
            <ShinyText text="Projects" disabled={false} speed={3} className='shiny-text text-5xl' />
            <ShinyText text="All source codes avalaible on my GitHub." disabled={false} speed={3} className='shiny-text text-xl pt-5 mb-40' />

{/* <Masonry data={data} /> */}
        {/* <div className="z-50" style={{ height: '600px',
            width:"100%"}}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} className="z-50"/>
        </div> */}
        <div className="flex flex-row justify-between">
                    <a href="https://alfacentaur1.github.io/calculator/"><TiltedCard
                    imageSrc={calc}
                    altText="calc"
                    captionText="JS Calculator"
                    containerHeight="400px"
                    containerWidth="400px"
                    imageHeight="350px"
                    imageWidth="350px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text">
                        JS Calculator
                        </p>
                    }
                    /></a>
                    <a href="https://zwa.toad.cz/~kopecfi3/phpqr/QR-code-generator/">
                    <TiltedCard
                    imageSrc={php}
                    altText="qr"
                    captionText="QR code generator"
                    containerHeight="400px"
                    containerWidth="400px"
                    imageHeight="350px"
                    imageWidth="350px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text">
                        PHP QR code generator
                        </p>
                    }
                    /></a>
                    <a href="https://alfacentaur1.github.io/rock-paper-scissors-js/">
                    <TiltedCard
                    imageSrc={rps}
                    altText="rps"
                    captionText="JS rock paper scissors"
                    containerHeight="400px"
                    containerWidth="400px"
                    imageHeight="350px"
                    imageWidth="350px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text">
                        JS rock paper scissors
                        </p>
                    }
                    /></a>
                    <a href="https://zwa.toad.cz/~kopecfi3/zwa-php/">
                    <TiltedCard
                    imageSrc={sms}
                    altText="estate"
                    captionText="PHP reality estate website"
                    containerHeight="400px"
                    containerWidth="400px"
                    imageHeight="350px"
                    imageWidth="350px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text">
                        PHP reality estate website
                        </p>
                    }
                    /></a>
                </div>
        </section>
        
    );
}