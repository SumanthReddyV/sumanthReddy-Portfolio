import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Cpu, 
  Globe, 
  Terminal,
  BookOpen,
  Award,
  Menu,
  X,
  MapPin,
  Bot,
  Eye,
  Factory,
  Server,
  Shield,
  Layout,
  TriangleAlert // Standard modern name for AlertTriangle
} from 'lucide-react';

// --- Components ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">SRV</a>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium uppercase tracking-wider">{link.name}</a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900 absolute w-full border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md text-base font-medium">{link.name}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);

  const phrases = [
    "an AI Master's student.",
    "specializing in Computer Vision & Industrial IoT.",
    "building Autonomous Agents & RAG Systems."
  ];

  useEffect(() => {
    const tick = () => {
      let i = loopNum % phrases.length;
      let fullText = phrases[i];
      let updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) setDelta(30);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(50);
      } else if (!isDeleting && updatedText !== fullText) {
        setDelta(50);
      }
    };

    const ticker = setTimeout(() => { tick(); }, delta);
    return () => clearTimeout(ticker);
  }, [text, delta, isDeleting, loopNum, phrases]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-16">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Sumanth Reddy <span className="text-blue-500">Vudem</span></h1>
        <div className="h-32 md:h-24 mb-4 flex items-center justify-center">
          <p className="text-xl md:text-2xl text-slate-400">
            <span className="text-slate-200">I am </span>
            <span className="text-blue-400">{text}</span>
            <span className="animate-pulse text-blue-400 font-bold">|</span>
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full bg-yellow-500/10 border border-yellow-500/20">
          <TriangleAlert size={16} className="text-yellow-500" />
          <span className="text-sm font-medium text-yellow-200/90">Note: Currently undergoing updates.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full"><Linkedin size={20} /> LinkedIn</a>
          <a href="#" className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-full border border-slate-700"><Github size={20} /> GitHub</a>
          <a href="mailto:vudemsumanthreddy@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-full border border-slate-700"><Mail size={20} /> Email Me</a>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-20 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
        <h3 className="text-2xl font-bold mb-4">Professional Profile</h3>
        <p className="text-slate-300 mb-4 leading-relaxed">
          I am an <strong>AI Master's student</strong> at Brandenburg University of Technology specializing in <strong>Computer Vision</strong> and <strong>Industrial IoT</strong>.
        </p>
        <p className="text-slate-300 leading-relaxed">Focusing on automated defect detection and Agentic AI systems.</p>
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Innovating in <span className="text-blue-500">Vision</span> & <span className="text-purple-500">Automation</span></h2>
        <div className="flex items-start gap-4">
          <MapPin className="text-blue-400" />
          <div><h4 className="font-semibold">Location</h4><p className="text-slate-400">Cottbus, Germany</p></div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skillCategories = [
    { title: "Deep Learning & CV", icon: <Eye />, skills: ["PyTorch", "OpenCV", "CNNs", "Object Detection"] },
    { title: "AI & Agentic Systems", icon: <Bot />, skills: ["RAG Systems", "LangChain", "PydanticAI"] },
    { title: "Backend & Cloud", icon: <Server />, skills: ["Python", "FastAPI", "Docker", "GCP"] },
    { title: "IoT & Frontend", icon: <Factory />, skills: ["Industrial IoT", "ReactJS", "Angular"] }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            <div key={i} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <div className="text-blue-400 mb-4">{cat.icon}</div>
              <h3 className="text-white font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, j) => (
                  <span key={j} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const timeline = [
    { role: "MSc. in AI", org: "BTU Cottbus", date: "2025 - Present", desc: "Specializing in Vision & IoT." },
    { role: "Full Stack Developer", org: "LTIMindtree", date: "2024 - 2025", desc: "Built enterprise Java systems." }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Journey</h2>
        <div className="space-y-8">
          {timeline.map((item, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <div className="flex justify-between mb-2">
                <span className="font-bold">{item.role}</span>
                <span className="text-blue-400 text-sm">{item.date}</span>
              </div>
              <div className="text-slate-400 text-sm mb-2">{item.org}</div>
              <p className="text-slate-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { title: "Visual Inspection System", tags: ["PyTorch", "CNN"], desc: "Automated defect detection with 96% accuracy.", icon: <Eye className="text-blue-400" /> },
    { title: "Enterprise RAG Agent", tags: ["LangChain", "FastAPI"], desc: "Production-ready knowledge retrieval system.", icon: <Database className="text-green-400" /> }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Key Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{p.desc}</p>
              <div className="flex gap-2">
                {p.tags.map((t, j) => (
                  <span key={j} className="text-xs bg-slate-800 text-slate-500 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900 text-center">
    <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
    <div className="flex justify-center gap-6">
      <a href="mailto:vudemsumanthreddy@gmail.com" className="text-slate-400 hover:text-white"><Mail size={32} /></a>
      <a href="#" className="text-slate-400 hover:text-white"><Linkedin size={32} /></a>
      <a href="#" className="text-slate-400 hover:text-white"><Github size={32} /></a>
    </div>
  </section>
);

const App = () => (
  <div className="bg-slate-950 min-h-screen text-slate-200 font-sans">
    <Navigation />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
    <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center text-slate-600 text-sm">
      © {new Date().getFullYear()} Sumanth Reddy Vudem.
    </footer>
  </div>
);

export default App;