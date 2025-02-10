import BlurText from "./BlurText";
import pfp from "./imgs/pfp.jpg";
import ParticlesBG from "./Particles";
export const About = () => {
    return (
        <section id="about" className="relative overflow-hidden min-h-screen flex justify-center items-center pt-25 z-20">
            <ParticlesBG /> 
            <div className="flex justify-center flex-col items-center">
                <img src={pfp} alt="pfp pic" width="20%" className="mb-8" />
                <BlurText
                    text="Hello! Welcome to my personal page!"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-5xl mb-8 rounded-md shadow-sm"
                />
                <div>
                    <h1 className="text-center break-words max-w-3xl">
                        My name is Filip Kopecký and I am a passionate developer from the Czech Republic, currently pursuing my software engineering degree at CTU FEE.
                    </h1>
                    <h1 className="text-center break-words max-w-3xl">
                        I mainly program in Python, PHP and JS. Currently learning Java.
                    </h1>
                </div>
            </div>
        </section>
    );
};