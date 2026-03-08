import { motion } from 'framer-motion';
import { Users, BookOpen } from 'lucide-react';

const photos = [
  '/demos/DSA_Mentoring/img1.jpeg',
  '/demos/DSA_Mentoring/img2.jpeg',
  '/demos/DSA_Mentoring/img3.jpeg',
  '/demos/DSA_Mentoring/img4.jpeg',
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Mentorship & Leadership</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photos Grid */}
          <div className="grid grid-cols-2 gap-4">
            {photos.map((photo, idx) => (
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
                  alt={`DSA Mentoring Session ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="glass p-8 rounded-3xl border border-slate-700/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <Users className="text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">DSA Guest Lecturer</h3>
                  <p className="text-blue-400 font-medium">Mentoring 200+ Students</p>
                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                As a passionate computer science student, I believe in giving back to the community. I have actively conducted Data Structures and Algorithms (DSA) sessions as a guest lecturer, breaking down complex algorithmic concepts for over 200 aspiring engineers, helping them prepare for competitive programming and industrial interviews.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-slate-700/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                  <BookOpen className="text-purple-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">President of Coding Club</h3>
                  <p className="text-purple-400 font-medium">Arohan Tech Fest Coordinator</p>
                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Beyond individual mentorship, I lead the central coding club at my college. I coordinate major technical festivals like Arohan, organizing hackathons, ideathons, and workshops to foster a culture of innovation and collaborative development on campus.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
