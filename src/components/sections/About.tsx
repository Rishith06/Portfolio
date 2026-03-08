import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Code2 } from 'lucide-react';

const highlights = [
  {
    icon: <BookOpen className="text-blue-400" size={24} />,
    title: 'Education',
    desc: 'B.Tech in Computer Science Engineering, Narayana Engineering College (CGPA - 9.0)',
  },
  {
    icon: <Users className="text-purple-400" size={24} />,
    title: 'Leadership',
    desc: 'President of Coding Club & Central Coordinator for Arohan Tech Fest',
  },
  {
    icon: <Award className="text-yellow-400" size={24} />,
    title: 'Mentorship',
    desc: 'Guest Lecturer conducting DSA sessions for 140+ students',
  },
  {
    icon: <Code2 className="text-green-400" size={24} />,
    title: 'Problem Solving',
    desc: 'Solved 120+ LeetCode problems & active participant in coding workshops',
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
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
              About Me
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-slate-300 text-lg leading-relaxed"
          >
            <p>
              I am a Computer Science undergraduate with a deep passion for building practical,
              high-performance web applications. My journey involves a mix of robust academic 
              learning, competitive programming, and hands-on system development.
            </p>
            <p>
              Beyond just writing code, I thrive in environments where I can lead and mentor. As the 
              President of the Coding Club and a guest lecturer for DSA, I actively work on fostering a 
              strong tech community.
            </p>
            <p>
              Whether it's designing a dynamic asset allocation strategy, building ML backends for hackathons,
              or creating visually stunning React frontends, I enjoy bridging the gap between complex 
              logic and seamless user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
