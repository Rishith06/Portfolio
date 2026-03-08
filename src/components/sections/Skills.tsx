import { motion } from 'framer-motion';
import { TiltCard } from '../ui/TiltCard';

const skillsData = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C', 'Java'],
    color: 'from-yellow-400 to-orange-500',
    colSpan: 'md:col-span-2',
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Django', 'Express.js'],
    color: 'from-blue-400 to-cyan-500',
    colSpan: 'md:col-span-1',
  },
  {
    category: 'Runtime & Tools',
    skills: ['Node.js', 'Git', 'Tailwind CSS'],
    color: 'from-green-400 to-emerald-500',
    colSpan: 'md:col-span-1',
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB'],
    color: 'from-purple-400 to-pink-500',
    colSpan: 'md:col-span-2',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-slate-950/50">
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
              Technical Arsenal
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{ willChange: 'transform, opacity' }}
              className={`h-full ${item.colSpan}`}
            >
              <TiltCard rotationIntensity={15} className={`glass p-8 rounded-3xl border border-slate-700/50 relative overflow-hidden group h-full`}>
                {/* Hover gradient background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-[.is-hovered]:opacity-10 transition-opacity duration-500`} />
                
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{item.category}</h3>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 rounded-full bg-slate-800/80 text-slate-300 text-sm font-medium border border-slate-700/50 hover:bg-slate-700 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
