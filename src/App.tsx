import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  Mail, 
  Instagram, 
  Linkedin, 
  Terminal, 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Trophy, 
  PenTool,
  Menu,
  X
} from "lucide-react";

// Import local images
import profileImg from './profile.jpg';
import vitaCupImg from './vita-cup.jpg';
import puisiImg from './puisi.jpg';
import ucImg from './uc.jpg';
import dblImg from './dbl.jpg';
import analysisImg from './analysis.jpg';
import learningImg from './learning.jpg';
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter uppercase">CURATOR</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Skills", "Achievements", "Projects", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-brand-gradient px-6 py-2 rounded-lg font-bold text-black uppercase text-[10px] tracking-widest hover:scale-105 transition-transform">
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          {["About", "Skills", "Achievements", "Projects", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500"
            >
              {item}
            </a>
          ))}
          <button className="bg-brand-gradient px-6 py-3 rounded-lg font-bold text-black uppercase text-xs tracking-widest">
            Hire Me
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple/10 via-transparent to-transparent opacity-50" />
    <div className="max-w-7xl w-full z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-brand-purple font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Available for Opportunities</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
          Hi, I'm <span className="text-gradient">Steve Addison Effendy</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light mb-12 max-w-2xl">
          Data Analyst & Problem Solver. A highly analytical student with a deep passion for mathematics and data analysis. I think critically, solve problems efficiently, and am dedicated to continuous improvement — a disciplined individual who consistently strives to grow academically and personally, preparing for a future where data-driven thinking creates meaningful impact.
        </p>
        <div className="flex flex-wrap gap-6">
          <button className="bg-brand-gradient text-black px-10 py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center gap-2">
            View My Work <ArrowUpRight size={16} />
          </button>
          <button className="border border-white/20 text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-colors">
            Contact Me
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative aspect-[4/5] rounded-2xl overflow-hidden group"
      >
        {/* STEP: Replace the URL below with your hosted image link (e.g., from Imgur) */}
        <img 
          src={profileImg} 
          alt="Steve Addison Effendy" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-brand-purple font-bold text-xs uppercase tracking-[0.3em] mb-8 block">Storyteller of Data</span>
        <h2 className="text-5xl font-extrabold tracking-tighter mb-10 leading-tight">
          Learning through action. <br />Thinking through <span className="text-brand-purple">data.</span>
        </h2>
        <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
          <p>My story began at SMAK Frateran Surabaya — a school I've called home since kindergarten. What started as a child's curiosity slowly grew into something more deliberate: a genuine love for mathematics, structure, and the elegant logic that underlies complex systems.</p>
          <p>Over the years, I discovered that I don't just enjoy solving problems — I thrive on them. Mathematics became my language, and data became the medium through which I began to see the world more clearly. I developed a habit of breaking things down, identifying patterns, and asking the questions that others overlook.</p>
          <p>My approach to learning has always been practical. I don't learn well from passive observation — I learn by doing, experimenting, and applying. Every concept I engage with, I test. Every theory I encounter, I challenge. This mindset has shaped not just how I study, but how I think.</p>
          <p>Discipline and consistency define my character. Whether in academics, competition, or personal growth, I hold myself to a high standard and I show up — every single day. I believe that sustained effort, compounded over time, is the real driver of excellence.</p>
          <p>Looking ahead, I'm committed to pursuing a major in Data Analytics at Universitas Petra Surabaya. My long-term vision is to become a highly capable, data-driven thinker — someone who can transform raw information into clear, actionable insights that solve real-world problems.</p>
        </div>
        <div className="mt-12 flex gap-12">
          <div>
            <div className="text-4xl font-black">2024</div>
            <div className="text-[10px] uppercase tracking-widest text-brand-purple font-bold mt-2">Active Year</div>
          </div>
          <div>
            <div className="text-4xl font-black">5+</div>
            <div className="text-[10px] uppercase tracking-widest text-brand-purple font-bold mt-2">Core Domains</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    { name: "Mathematics", level: 90 },
    { name: "Problem Solving", level: 90 },
    { name: "Critical Thinking", level: 88 },
    { name: "Data Analysis", level: 85 },
    { name: "Discipline", level: 85 },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-brand-purple font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Core Capabilities</span>
            <h2 className="text-5xl font-black tracking-tighter">Analytical precision meets focused discipline.</h2>
          </div>
          <p className="text-zinc-500 max-w-sm">The mathematical framework and behavioral discipline that drive my analytical approach.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {skills.map((skill, idx) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-3"
            >
              <div className="flex justify-between items-end">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">{skill.name}</span>
                <span className="text-brand-purple font-black">{skill.level}%</span>
              </div>
              <div className="h-1 bg-white/10 w-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-brand-gradient" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => (
  <section id="achievements" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <span className="text-brand-purple font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Track Record</span>
        <h2 className="text-5xl font-black tracking-tighter">Driven by competition. Proven by results.</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Basketball — Vita Cup 2025/2026",
            desc: "1st Place. Vita Cup 2025/2026.",
            label: "Basketball",
            year: "2025",
            icon: <Trophy size={20} />,
            img: vitaCupImg
          },
          {
            title: "Musikalisasi Puisi — Teater Sanggar Satria",
            desc: "2nd Place. Teater Sanggar Satria, Universitas Muhammadiyah Surabaya.",
            label: "Musikalisasi Puisi",
            year: "2025",
            icon: <PenTool size={20} />,
            img: puisiImg
          },
          {
            title: "Basketball — Universitas Ciputra 2025",
            desc: "1st Place. Universitas Ciputra 2025.",
            label: "Basketball",
            year: "2025",
            icon: <Trophy size={20} />,
            img: ucImg
          },
          {
            title: "Basketball — Mini Tournament Road to DBL",
            desc: "3rd Place. Mini Tournament Road to DBL by SMALA Surabaya.",
            label: "Basketball",
            year: "2024",
            icon: <Trophy size={20} />,
            img: dblImg
          }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative h-[400px] rounded-2xl overflow-hidden flex flex-col justify-end p-10"
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-purple/20 backdrop-blur-md border border-brand-purple/30 p-3 rounded-full text-brand-purple">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-purple">{item.label}</span>
                </div>
                <span className="text-[10px] font-bold text-zinc-500">{item.year}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm max-w-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-32 px-6 bg-zinc-900/30">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <span className="text-brand-purple font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Selected Work</span>
        <h2 className="text-5xl font-black tracking-tighter mb-6">Applying theory to <span className="text-brand-purple">reality.</span></h2>
        <p className="text-zinc-500 max-w-2xl">A collection of projects showcasing my analytical approach, technical capabilities, and commitment to learning by doing.</p>
      </div>

      <div className="space-y-32">
        {/* Project 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 rounded-2xl overflow-hidden group"
          >
            <img 
              src={analysisImg} 
              alt="Data Analysis Exploration" 
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {["Python", "Pandas", "Data Visualization", "Statistical Analysis"].map(tag => (
                <span key={tag} className="bg-white/5 text-zinc-400 px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-full">{tag}</span>
              ))}
            </div>
            <h3 className="text-4xl font-black mb-6 leading-none">Data Analysis Exploration</h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">A deep personal investigation into complex datasets — identifying hidden patterns, testing hypotheses, and translating raw numbers into clear, actionable insights. Built on a foundation of mathematical thinking and hands-on experimentation.</p>
          </motion.div>
        </div>

        {/* Project 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 order-2 md:order-1"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {["Documentation", "Critical Analysis", "Applied Learning", "Self-Development"].map(tag => (
                <span key={tag} className="bg-white/5 text-zinc-400 px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-full">{tag}</span>
              ))}
            </div>
            <h3 className="text-4xl font-black mb-6 leading-none">Learning & Growth</h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">A living record of skills built through consistent action, not memorization. Each entry documents a concept engaged with, tested against reality, and truly understood — a testament to a learning philosophy built on doing.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 rounded-2xl overflow-hidden group order-1 md:order-2"
          >
            <img 
              src={learningImg} 
              alt="Learning & Growth" 
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <span className="text-brand-purple font-bold text-xs uppercase tracking-[0.3em] mb-8 block">Connect</span>
          <h2 className="text-6xl font-black tracking-tighter mb-10">Let's solve <br />something <span className="text-brand-purple">together.</span></h2>
          <div className="space-y-10">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-purple transition-colors duration-300">
                <Mail className="text-white group-hover:text-black transition-colors" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Email Me</div>
                <div className="text-xl font-bold">steveaddison2007@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-purple transition-colors duration-300">
                <Instagram className="text-white group-hover:text-black transition-colors" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Follow Me</div>
                <div className="text-xl font-bold">@steveaddison._</div>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/50 p-12 rounded-2xl border border-white/5"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-brand-purple">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-black border border-white/10 focus:border-brand-purple rounded-lg p-4 text-white placeholder:text-zinc-700 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-brand-purple">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-black border border-white/10 focus:border-brand-purple rounded-lg p-4 text-white placeholder:text-zinc-700 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-brand-purple">Message</label>
              <textarea 
                rows={4}
                placeholder="How can I help you?"
                className="w-full bg-black border border-white/10 focus:border-brand-purple rounded-lg p-4 text-white placeholder:text-zinc-700 outline-none transition-all resize-none"
              />
            </div>
            <button className="w-full bg-brand-gradient text-black py-5 rounded-lg font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] transition-transform">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-xl font-black uppercase tracking-tighter">CURATOR</div>
      <div className="text-zinc-600 text-[10px] uppercase tracking-widest font-medium">
        Made with AI Studio © 2024
      </div>
      <div className="flex gap-8">
        {[Instagram, Mail, Linkedin].map((Icon, idx) => (
          <a key={idx} href="#" className="text-zinc-600 hover:text-white transition-colors">
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
