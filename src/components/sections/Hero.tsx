import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

// Variants for staggered text reveals
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { stiffness: 100, damping: 10 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 w-full">
        {/* Left Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 w-fit text-sm font-medium">
            <Terminal size={16} />
            <span>Computer Science Undergraduate</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Hi, I'm <br />
            <motion.span 
              whileHover={{ scale: 1.05, filter: "hue-rotate(90deg)" }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 cursor-default transition-all duration-300 relative z-20"
            >
              Raja Rishith
            </motion.span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-lg">
            A passionate Full-Stack Developer building robust systems through real-world projects, hackathons, and dynamic UI experiences.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-4 relative z-20">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="group px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-500/25"
            >
              View My Work
              <motion.span 
                initial={{ x: 0 }} 
                group-hover={{ x: 5 }} 
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 1)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 rounded-xl bg-slate-800/50 backdrop-blur-md text-white font-medium border border-slate-700/50"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Visual element - 3D abstract or placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          className="relative hidden md:flex justify-center items-center"
        >
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* Optimized background visuals (Removed high-CPU infinite spin loops) */}
            <div className="absolute inset-0 rounded-full border border-slate-800/50 border-dashed opacity-50" />
            <div className="absolute inset-8 rounded-full border border-blue-900/40 opacity-50" />
            <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-16 rounded-full border border-sky-500/20 blur-[2px]" />
            
            {/* Center glow and code snippet */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="absolute inset-0 flex items-center justify-center cursor-pointer pointer-events-auto z-20"
            >
              <div className="glass p-6 rounded-2xl w-64 shadow-[0_0_30px_rgba(56,189,248,0.15)] border border-slate-700/50 transform rotate-[-5deg] transition-all duration-500 hover:shadow-[0_0_50px_rgba(56,189,248,0.3)]">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="font-mono text-sm text-slate-300 space-y-2">
                  <p><span className="text-pink-400">const</span> developer = {'{'}</p>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
                    className="pl-4"
                  >
                    name: <span className="text-green-300">'Raja Rishith'</span>,
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }}
                    className="pl-4"
                  >
                    role: <span className="text-green-300">'Full-Stack Dev'</span>,
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 }}
                    className="pl-4"
                  >
                    status: <span className="text-yellow-300">'Innovating...'</span>
                  </motion.div>
                  <p>{'};'}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
