import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
const base = import.meta.env.BASE_URL;
const projects = [
  {
    title: "Jooblie",
    category: "Multi-Portal Job Board & Hiring Platform",
    description:
      "Developed a full-stack recruitment platform using React, Node.js, Express.js, and Supabase (PostgreSQL). Built role-based authentication, RESTful APIs with Zod validation, resume parsing for skill extraction, a candidate hiring pipeline, and role-specific dashboards for seekers, recruiters, and admins.",
    tools: "React, Node.js, Express.js, Supabase (PostgreSQL), REST APIs, Zod",
    image: `${base}updated/jooblie.png`,
    link: "https://jooblie-updated.vercel.app/",
  },
  {
    title: "Zelvomart",
    category: "E-Commerce Platform & Admin Management System",
    description:
      "Developed a full-stack e-commerce platform using Next.js, React, TypeScript, Node.js, Express.js, Prisma, and PostgreSQL (Supabase). Built JWT authentication with 2FA, role-based staff permissions, idempotent checkout supporting COD and NayaPay, PostEx courier integration, Cloudflare R2 image storage, and Meta and TikTok marketing event tracking.",
    tools: "Next.js, React, TypeScript, Node.js, Express.js, Prisma, PostgreSQL",
    image: `${base}updated/zelvomart.png`,
    link: "https://zelvo-mart.vercel.app/",
  },
  {
    title: "Resilient Minds Foundation",
    category: "Mental Wellness Non-Profit Website",
    description:
      "Built a responsive multi-page website using React 19, Vite, React Router, and Tailwind CSS. Developed an accessible component library featuring FAQ accordions and a mobile navigation drawer, validated inquiry and donation pickup forms, and integrated asynchronous email submissions with loading and error states.",
    tools: "React 19, Vite, React Router, Tailwind CSS, Email Integration",
    image: `${base}updated/resilient-minds.png`,
    link: "https://www.resilientmindsfoundation.ca/",
  },
  {
    title: "World Education Society",
    category: "Study Abroad & Educational Consultancy Platform",
    description:
      "Built a responsive modern web platform for international educational consultancy using React, Vite, and Tailwind CSS. Developed university admissions guidance, interactive program search across 70+ partner institutions, consultation inquiry booking, and dynamic program filters.",
    tools: "React, Vite, Tailwind CSS, Responsive UI, Interactive Search",
    image: `${base}updated/world-education-society.png`,
    link: "https://world-education-society.vercel.app/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link && (
                          <div className="carousel-link-wrap">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="carousel-live-link"
                              data-cursor="disable"
                            >
                              Live Project ↗
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;