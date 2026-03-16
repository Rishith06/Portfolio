import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-slate-800 bg-[#020617] pt-24 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-900/10 blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Left: Text & Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              <motion.span
                whileHover={{ filter: "hue-rotate(90deg)" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white hover:from-blue-400 hover:via-cyan-300 hover:to-sky-400 transition-colors duration-300 cursor-default"
              >
                Let's create something
              </motion.span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                amazing together.
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-md">
              Whether you have a question, a project in mind, or just want to say hi, I try my best to get back to you!
            </p>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rishith292@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
            >
              <Mail size={20} />
              Say Hello
            </a>
          </motion.div>

          {/* Right: Contact Info Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-slate-700/50 text-blue-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email</p>
                <a href="mailto:rishith292@gmail.com" className="text-lg">rishith292@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-slate-700/50 text-sky-400">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Phone</p>
                <p className="text-lg">8125124945</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-slate-700/50 text-emerald-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Location</p>
                <p className="text-lg">Nellore, India</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ram Rishith. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/Rishith06" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            {/* <a href="https://www.linkedin.com/in/raja-rishi-27baa2306/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a> */}
            <a href="https://www.linkedin.com/in/ram-rishith" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
