"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- Manual SVG Icons (No Import Errors) ---
const GithubIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const XIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M13.232 10.768l6.768 -6.768"></path></svg>;
const YoutubeIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>;
const FacebookIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      
      {/* --- GLOW EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/15 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/15 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* --- NAVIGATION BAR --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-black tracking-tighter">ROHIT<span className="text-blue-500">.</span>ALAM</div>
        
        {/* Desktop & Mobile Menu */}
        <div className="flex gap-2 md:gap-4 overflow-x-auto no-scrollbar">
          <button onClick={() => scrollTo('home')} className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 hover:text-blue-400 transition">Home</button>
          <button onClick={() => scrollTo('projects')} className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 hover:text-blue-400 transition">Projects</button>
          <button onClick={() => scrollTo('about')} className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 hover:text-blue-400 transition">About</button>
          <a href="mailto:htmlxzr@gmail.com" className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative z-10 pt-44 pb-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
          Professional Developer
        </motion.div>
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
          CODE THAT <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">INSPIRES.</span>
        </motion.h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
          Building the next generation of chat systems and web architectures.
        </p>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-12 tracking-tighter underline decoration-blue-500 decoration-4">FEATURED PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <motion.a href="https://nexus-chat-omega.vercel.app/chat" target="_blank" whileHover={{ scale: 1.02 }} className="group p-8 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:border-blue-500/50">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 font-bold text-xl tracking-tighter">NX</div>
              <span className="text-[10px] font-bold text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">LIVE NOW</span>
            </div>
            <h3 className="text-2xl font-black mb-2 uppercase">Nexus Chat</h3>
            <p className="text-gray-500 mb-6 text-sm">A super-fast real-time messaging platform built for modern scale.</p>
            <div className="flex items-center text-xs font-bold text-white group-hover:text-blue-400 transition">VIEW PROJECT ↗</div>
          </motion.a>

          {/* Project 2 */}
          <motion.a href="https://super-chat-opal.vercel.app/" target="_blank" whileHover={{ scale: 1.02 }} className="group p-8 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:border-purple-500/50">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-400 font-bold text-xl tracking-tighter">SC</div>
              <span className="text-[10px] font-bold text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full">STABLE</span>
            </div>
            <h3 className="text-2xl font-black mb-2 uppercase">Super Chat</h3>
            <p className="text-gray-500 mb-6 text-sm">Next-level communication dashboard with clean UI and high security.</p>
            <div className="flex items-center text-xs font-bold text-white group-hover:text-purple-400 transition">VIEW PROJECT ↗</div>
          </motion.a>

        </div>
      </section>

      {/* --- ABOUT ME SECTION --- */}
      <section id="about" className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
        <div className="p-10 md:p-16 rounded-[50px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl">
          <h2 className="text-4xl font-black mb-8 tracking-tighter">ABOUT ME</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Hi, I'm <span className="text-blue-500 font-bold">Rohit Alam</span>. I'm a passionate Full Stack Developer with a deep interest in software architecture.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Currently, I'm mastering <span className="text-white font-bold underline decoration-blue-500">Python</span> to build advanced automation and AI-driven tools. As a Web Developer, I specialize in the MERN/Next.js stack.
              </p>
            </div>
            <div className="space-y-4">
               <div className="flex justify-between items-center p-4 border border-white/5 rounded-2xl bg-white/5 hover:bg-white/10 transition">
                  <span className="font-bold">Python Developer</span>
                  <span className="text-blue-500 text-xs font-black italic">LEARNING</span>
               </div>
               <div className="flex justify-between items-center p-4 border border-white/5 rounded-2xl bg-white/5 hover:bg-white/10 transition">
                  <span className="font-bold">Web Development</span>
                  <span className="text-green-500 text-xs font-black italic">PRO</span>
               </div>
               <div className="flex justify-between items-center p-4 border border-white/5 rounded-2xl bg-white/5 hover:bg-white/10 transition">
                  <span className="font-bold">Chat Systems</span>
                  <span className="text-purple-500 text-xs font-black italic">EXPERT</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER & SOCIALS --- */}
      <footer className="relative z-10 mt-20 pb-20 pt-10 border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-8 tracking-widest uppercase">Connect with Me</h3>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="https://github.com/htmlxzr-ops" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/html-xzr-a36a323a0" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white transition-all"><LinkedinIcon /></a>
            <a href="https://x.com/HtmlXzr13714" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all"><XIcon /></a>
            <a href="https://youtube.com/@htmlxzr?si=Fsl_GjYb9Hyk1hyr" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-[#ff0000] hover:text-white transition-all"><YoutubeIcon /></a>
            <a href="https://www.facebook.com/share/1Bj4F9JMSg/" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-[#1877f2] hover:text-white transition-all"><FacebookIcon /></a>
          </div>

          <p className="text-gray-600 text-[10px] font-bold tracking-[0.4em] uppercase">
            © 2026 Rohit Alam. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
