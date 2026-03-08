import { motion } from 'framer-motion';
import { Trophy, GraduationCap } from 'lucide-react';

const photos = [
  '/demos/Fests_Awards/img1.jpeg',
  '/demos/Fests_Awards/img2.jpeg',
  '/demos/Fests_Awards/img3.jpeg',
  '/demos/Fests_Awards/img4.jpeg',
  '/demos/Fests_Awards/img5.jpeg',
  '/demos/Fests_Awards/img6.jpeg',
];

const iitPhotos = [
  '/demos/IIT_Madras_RSW/img1.jpeg',
  '/demos/IIT_Madras_RSW/img2.jpeg',
  '/demos/IIT_Madras_RSW/img3.jpeg',
  '/demos/IIT_Madras_RSW/img4.jpeg',
];

export default function Awards() {
  return (
    <section id="awards" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <motion.span
              whileHover={{ filter: "hue-rotate(90deg)" }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white hover:from-blue-400 hover:via-cyan-300 hover:to-sky-400 transition-colors duration-300 cursor-default"
            >
              Competitions & Awards
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto rounded-full" />
        </motion.div>

        {/* Fests Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass p-8 md:p-10 rounded-3xl border border-slate-700/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-colors" />
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30 shrink-0">
                  <Trophy className="text-yellow-400" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">Hackathons & Fests</h3>
                  <p className="text-yellow-400 font-medium text-lg">Competitive Coding & Building</p>
                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                I thrive in highly competitive and fast-paced environments. Participating in various college coding fests and hackathons has significantly sharpened my problem-solving skills and my ability to build robust, scalable applications under extreme time constraints.
              </p>
            </div>
          </motion.div>

          {/* Fests Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full overflow-hidden rounded-2xl glass border border-slate-700/50 shadow-xl aspect-square"
              >
                <img 
                  src={photo} 
                  alt={`Coding Competition Award ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* IIT Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* IIT Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass p-8 md:p-10 rounded-3xl border border-slate-700/50 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-colors z-0" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-sky-500/20 flex items-center justify-center border border-sky-500/30 shrink-0">
                    <GraduationCap className="text-sky-400" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">IIT Madras</h3>
                    <p className="text-sky-400 font-medium text-lg">Residential Student Workshop</p>
                  </div>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Selected as 1 of 3 students from over 430+ peers across my college to attend an exclusive 3-day Residential Student Workshop at IIT Madras. It was an incredible opportunity to network with top minds, engage in intensive technical sessions, and experience the culture of India's premier engineering institute firsthand.
                </p>
              </div>
            </div>
          </motion.div>

          {/* IIT Photos Grid */}
          <div className="grid grid-cols-2 gap-4">
            {iitPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`w-full overflow-hidden rounded-2xl glass border border-slate-700/50 shadow-xl ${idx === 0 || idx === 3 ? 'aspect-[4/5]' : 'aspect-square'}`}
              >
                <img 
                  src={photo} 
                  alt={`IIT Madras Workshop ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
