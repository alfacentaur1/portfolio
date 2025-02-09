import BlurText from "./BlurText";
import Dock from "./Dock";
import linkedin from "./imgs/linkedin1.jpg";
import github from "./imgs/github.png";

export const Contact = () => {
    const items = [
        { 
          icon: <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />, 
          label: "LinkedIn", 
          onClick: () => window.open("https://www.linkedin.com/in/filipkopecky", "_blank") 
        },
        { 
          icon: <img src={github} alt="GitHub" className="w-6 h-6" />, 
          label: "GitHub", 
          onClick: () => window.open("https://github.com/alfacentaur1", "_blank") 
        },
      ];

  return (
    <section id="contact" className="py-16 flex flex-col justify-center items-center pt-55 pb-25">
      <BlurText
        text="Oh, my page is ending here, thank you for scrolling so far!"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-5xl mb-8"
      />
      <BlurText
        text="If you are interested, let's stay in touch!"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-3xl mb-8"
      />
      <div className=" bottom-0 left-1/2 transform -translate-x-1/2 z-50 mb-10">
      <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
      </div>
    </section>
  );
};
