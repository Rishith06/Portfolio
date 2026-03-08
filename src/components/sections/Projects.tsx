import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, PlayCircle, ArrowRight } from 'lucide-react';

// --- (Project definitions remain above here, omitted for brevity, will replace below import)


const projects = [
  {
    id: 1,
    title: 'GameHub - Full-Stack App',
    shortDesc: 'React & TypeScript frontend with Django REST backend proxy.',
    fullDesc: 'Built a React + TypeScript frontend with routing and dynamic, data-driven screens using Material UI. Implemented a Django REST backend as a secure proxy for the IGDB API to handle CORS and API reliability. Included caching to serve fallback data to improve performance.',
    tech: ['React', 'TypeScript', 'Material UI', 'Django', 'REST'],
    github: 'https://github.com/Rishith06/Game-Hub',
    live: '#',
    videoDummy: '/demos/Game-Hub_Demo.mp4',
    posterDummy: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Algorithmic Investment Strategy',
    shortDesc: 'Dynamic asset allocation strategy backtested over 25+ years.',
    fullDesc: 'Designed a dynamic asset allocation strategy using NIFTY/Gold ratio, moving averages, and z-score-based rebalancing. Backtested over 25+ years of Indian equity and commodity data. Applied a Random Forest model to optimize moving-average windows on historical data.',
    tech: ['Python', 'Pandas', 'Plotly', 'yfinance', 'Random Forest'],
    github: 'https://github.com/Rishith06',
    live: '#',
    videoDummy: undefined,
    images: [
      '/demos/AllocationStrategy/WebDemo1.jpeg',
      '/demos/AllocationStrategy/WebDemo2.jpeg',
      '/demos/AllocationStrategy/WebDemo3.jpeg',
      '/demos/AllocationStrategy/LiveGraphDemo.jpeg',
      '/demos/AllocationStrategy/ThresholdsGraph.jpeg',
      '/demos/AllocationStrategy/StaticAllocationGraph.jpeg',
      '/demos/AllocationStrategy/Gold-Nifty-RatioGraph.jpeg'
    ],
    posterDummy: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Multilingual Translation Hub',
    shortDesc: 'Hackathon Project: Live translation module built in 1 day.',
    fullDesc: 'Part of a 4-member team that built a multilingual translation prototype during a 1-Day hackathon. Owned the live translation module using Argos and online fallback, integrated into a Streamlit app. Worked on pipeline integration (audio/text input → translation → output).',
    tech: ['Python', 'Streamlit', 'Vosk', 'Argos Translate', 'gTTS'],
    github: 'https://github.com/Rishith06/Translation-Hub',
    live: '#',
    videoDummy: '/demos/Translator-hub-demo.mp4',
    posterDummy: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'AI-Based Internship Engine',
    shortDesc: 'SIH 2K25 - ML backend exposing predictions via REST APIs.',
    fullDesc: 'Our team was shortlisted in the internal round of SIH 2K25. Responsible for Django-based ML backend, exposing predictions via REST APIs. Implemented logistic regression to estimate selection probability and integrated MySQL DB to manage user and internship data.',
    tech: ['Django', 'REST Framework', 'MySQL', 'Scikit-learn'],
    github: 'https://github.com/ramya1106/internship-recommendation-engine',
    live: '#',
    videoDummy: '/demos/SIH-2K25-PrototypeDemo.mp4',
    posterDummy: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2089&auto=format&fit=crop',
  }
];

// Slideshow Component
function Slideshow({ images, autoPlay = true }: { images: string[], autoPlay?: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length, autoPlay]);

  return (
    <div className="relative w-full h-full bg-slate-900 group flex items-center justify-center">
      {/* Structural invisible layer to give the div an intrinsic aspect ratio / height */}
      <img src={images[0]} loading="lazy" alt="" className="w-full max-h-[85vh] object-contain invisible pointer-events-none" />
      
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={index}
            src={images[index]}
            loading="lazy"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-contain bg-black"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-0 right-0 gap-2 flex justify-center z-20">
          {images.map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? 'bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'bg-white/30'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedId]);

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <motion.span
              whileHover={{ filter: "hue-rotate(90deg)" }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white hover:from-blue-400 hover:via-cyan-300 hover:to-sky-400 transition-colors duration-300 cursor-default"
            >
              Featured Projects
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedId(project.id)}
              className="group cursor-pointer glass rounded-3xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-colors"
            >
              {/* Media Container - Persistent AutoPlay Video or Slideshow */}
              <div className="relative aspect-video overflow-hidden bg-slate-900 group-hover:shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
                {project.videoDummy ? (
                  <>
                    {/* Glitch Effect Container (Now using Video) */}
                    <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 mix-blend-screen z-10">
                      <video src={project.videoDummy} preload="metadata" muted loop playsInline autoPlay className="absolute inset-0 w-full h-full object-contain bg-black opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-100" style={{ filter: 'hue-rotate(-90deg) saturate(200%)' }} />
                      <video src={project.videoDummy} preload="metadata" muted loop playsInline autoPlay className="absolute inset-0 w-full h-full object-contain bg-black opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:translate-y-1 transition-all duration-100 delay-50" style={{ filter: 'hue-rotate(90deg) saturate(200%)' }} />
                    </div>

                    <video src={project.videoDummy} preload="metadata" muted loop playsInline autoPlay className="w-full h-full object-contain bg-black transition-all duration-300 group-hover:scale-105" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <PlayCircle size={64} className="text-white drop-shadow-xl" strokeWidth={1.5} />
                    </div>
                  </>
                ) : project.images ? (
                  <Slideshow images={project.images} />
                ) : (
                  <img src={project.posterDummy} loading="lazy" className="w-full h-full object-cover" />
                )}
              </div>
              
              {/* Project Preview Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.shortDesc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium border border-slate-700">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* And Many More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/Rishith06"
            target="_blank"
            rel="noreferrer"
            className="group px-8 py-4 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-slate-300 font-medium transition-all hover:text-white flex items-center gap-3 shadow-lg hover:shadow-blue-500/10"
          >
            ...and many more on GitHub
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 text-blue-400" />
          </a>
        </motion.div>

        {/* Modal / Expanded View */}
        <AnimatePresence>
          {selectedId && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 cursor-pointer"
              />
              
              {/* Modal Content */}
              <div className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-8 pointer-events-none">
                {projects.filter(p => p.id === selectedId).map(project => (
                  <motion.div
                    layoutId={`card-${project.id}`}
                    key={`modal-${project.id}`}
                    className="w-full max-w-5xl max-h-[90vh] md:max-h-[85vh] glass rounded-3xl overflow-hidden pointer-events-auto border border-slate-700 shadow-2xl flex flex-col md:flex-row"
                  >
                    {/* Media Section - Side by Side on Desktop */}
                    <div className="relative h-64 md:h-full md:w-3/5 flex-shrink-0 bg-slate-900 border-b md:border-b-0 md:border-r border-slate-700/50">
                      {project.videoDummy ? (
                        <video 
                          src={project.videoDummy}
                          muted
                          autoPlay
                          loop
                          controls
                          className="w-full h-full object-contain bg-black"
                        />
                      ) : project.images ? (
                        <Slideshow images={project.images} />
                      ) : (
                        <img src={project.posterDummy} className="w-full h-full object-cover" />
                      )}
                      
                      <button  
                        onClick={() => setSelectedId(null)}
                        className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <div className="p-8 overflow-y-auto custom-scrollbar">
                      <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
                            {t}
                          </span>
                        ))}
                      </div>

                      <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        {project.fullDesc}
                      </p>

                      <div className="flex gap-4">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
                        >
                          <Github size={20} />
                          Source Code
                        </a>
                        {/* <a 
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a> */}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
