import heroImage from '/src/assets/images/elHeroeSenegalesfeaturedThumbnail.jpg';
import losLocosImage from '/src/assets/images/losLocosDeCesuraThumbnail.jpg';
import refugeeImage from '/src/assets/images/refugeeArchipelagoThumbnail.webp';
import elHabitoImage from '/src/assets/images/elHabitoThumbnail.webp';
import React, { useState, useEffect, useCallback } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './FeaturedProjectsSlider.css';

const projects = [
  {
    id: 1,
    title: "El Héroe Senegalés",
    subtitle: "Animación. Interstitial Media.",
    description: "El corto de animación El Héroe Senegalés es un retrato animado de Mouhammed Diof, un migrante senegalés indocumentado afincado en Bilbao, que se lanzó a la ría (por segunda vez) para salvar a alguien de ahogarse y (esta vez) se volvió viral.",
    link: "https://www.interstitialmedia.org/post/el-h%C3%A9roe%20senegal%C3%A9s",
    image: heroImage
  },
  {
    id: 2,
    title: "Los Locos de Cesura",
    subtitle: "Crónica, podcast, ilustración. Revista 5W.",
    description: "Miles huyen de Honduras en caravanas. Otros se quedan a pelear. La historia de Raquel y de estos jóvenes hondureños explica por qué.",
    link: "https://www.revista5w.com/temas/conflictos/los-locos-de-cesura-7905",
    image: losLocosImage,
  },
  {
    id: 3,
    title: "Refugee Archipelago",
    subtitle: "Novela gráfica. Justin Kiersky y German Andino. Interstitial Media.",
    description: "2019. Bidi Bidi Settlement se consideraba un experimento urbano capaz de transformar la ayuda humanitaria. Entre las 285.000 personas que llegaron a Bidi Bidi se encontraba Richard Akim, cineasta de Sudán del Sur que luego fundó, con ayuda de German Andino, Justin Kiersky y Sidd Joag el Bidi Bidi Media Lab.",
    link: "https://www.interstitialmedia.org/post/refugee-archipelago",
    image: refugeeImage
  },
  {
    id: 4,
    title: "El Hábito de la Mordaza",
    subtitle: "Novela gráfica. German Andino. El País, México.",
    description: "Este trabajo pone el enfoque en la violencia latinoamericana. Un cómic multimedia que trata el fenómeno de las pandillas en Honduras desde historias personales que cobran vida a través de la imagen y el audio. El proyecto experimenta con formas de lectura y control narrativo, presentándose a los lectores en un sólo dibujo de casi 100 metros.",
    link: "https://elpais.com/especiales/2016/el-habito-de-la-mordaza/",
    image: elHabitoImage
  }
];

const SLIDE_DURATION = 10000; 

const AnimatedTitle = ({ text, progress }) => {
    const characters = text.split('');
    
    return (
      <span className="slider-title">
        {characters.map((char, index) => {
          const charProgress = Math.max(0, Math.min(1, (progress * characters.length - index) / 2));
          const props = useSpring({
            color: charProgress > 0 ? '#8909ec' : 'white',
            config: config.molasses,
          });
          return <animated.span key={index} style={props}>{char}</animated.span>;
        })}
      </span>
    );
};

const Slide = React.memo(({ project, isActive }) => {
  const [isShared, setIsShared] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleViewContent = () => {
    window.open(project.link, '_blank');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(project.link).then(() => {
      setIsShared(true);
      setShowNotification(true);
      setTimeout(() => {
        setIsShared(false);
        setShowNotification(false);
      }, 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Error al copiar el link: ', err);
    });
  };

  return (
    <div className={`slide ${isActive ? 'active' : ''}`}>
        <div className="thumbnail" style={{backgroundImage: `url(${project.image})`}}></div>
       
        <div className="content">
            <span className="project-title">{project.title}</span>
            <span className="project-subtitle">{project.subtitle}</span>
            <p className="project-description">{project.description}</p>
        </div>

        <div className="buttons-container">
            <button onClick={handleViewContent} className="view-button">
               <ion-icon name="eye-outline"></ion-icon>
            </button>
        
            <button onClick={handleShare} className={`share-button ${isShared ? 'shared' : ''}`}>
                <ion-icon name={isShared ? "checkmark-outline" : "share-social-outline"}></ion-icon>
            </button>
        
            <div className={`share-notification ${showNotification ? 'visible' : ''}`}>
                Link copiado al portapapeles
            </div>
        </div>
    </div>
  );
});

const AnimatedCounter = ({ currentSlide, totalSlides }) => {
  const springs = useSpring({
    from: { y: currentSlide * 25 },
    to: { y: currentSlide * 25 },
    config: config.slow,
  });

  return (
    <div className="slider-counter">
      <animated.div style={{ transform: springs.y.to(y => `translateY(-${y}%)`) }}>
        {Array.from({ length: totalSlides }, (_, i) => (
          <span key={i} className={i === currentSlide ? 'active' : ''}>{i + 1}</span>
        ))}
      </animated.div>
    </div>
  );
};

const FeaturedProjectsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
        setProgress(0);
      }, SLIDE_DURATION);

      const progressTimer = setInterval(() => {
        setProgress(prev => Math.min(prev + 0.01, 1));
      }, SLIDE_DURATION / 100);

      return () => {
        clearInterval(timer);
        clearInterval(progressTimer);
      };
    }, []);

  return (
    <div className="featured-projects-slider">
      <AnimatedTitle text="Proyectos Destacados" progress={progress} />
      {projects.map((project, index) => (
        <Slide
          key={project.id}
          project={project}
          isActive={index === currentSlide}
        />
      ))}
      <AnimatedCounter currentSlide={currentSlide} totalSlides={projects.length} />
    </div>
  );
};

export default FeaturedProjectsSlider;