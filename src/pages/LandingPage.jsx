import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Target, Zap, BarChart3, Trophy, WifiOff, 
  ChevronRight, Download, Play, Star, ShieldCheck, 
  HelpCircle, MessageCircle, Info, Menu, X, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: <BookOpen />, title: "10,000+ MCQ Questions", desc: "Comprehensive question bank covering BCS Preliminary, Bank Job, and all Government Job exams with detailed explanations." },
  { icon: <Target />, title: "Full Mock Tests", desc: "Simulate the real BCS Preliminary exam experience with timed full-length tests and instant performance analysis." },
  { icon: <Zap />, title: "Daily Challenge", desc: "Fresh questions every single day to keep your preparation sharp and consistent. Build a daily study habit." },
  { icon: <BarChart3 />, title: "Performance Analytics", desc: "Track your progress over time, identify weak subjects, and get personalized recommendations to improve." },
  { icon: <Trophy />, title: "National Leaderboard", desc: "Compete with thousands of students across Bangladesh. See your rank and climb to the top." },
  { icon: <WifiOff />, title: "Offline Mode", desc: "Download question sets and practice without internet. Study on the bus, train — anywhere, anytime." },
];

const subjects = [
  { name: "Bangla Language & Literature", count: "1,200+ questions" },
  { name: "English Language & Literature", count: "1,100+ questions" },
  { name: "Bangladesh Affairs & History", count: "1,400+ questions" },
  { name: "International Affairs & GK", count: "900+ questions" },
  { name: "Mathematics & Mental Ability", count: "800+ questions" },
  { name: "General Science & Technology", count: "700+ questions" },
  { name: "Computer Science & IT", count: "600+ questions" },
  { name: "Geography & Environment", count: "500+ questions" },
];

const testimonials = [
  { text: "Uttoron helped me pass BCS Preliminary on my first attempt. The mock tests are exactly like the real exam. I practiced daily for 3 months and the results were amazing.", name: "Rahim Uddin", role: "45th BCS Candidate", initial: "R" },
  { text: "Best bank job preparation app in Bangladesh. The question quality is excellent and explanations are very clear. I got selected in Sonali Bank after using this app.", name: "Fatema Begum", role: "Sonali Bank Officer", initial: "F" },
  { text: "I tried many apps but Uttoron is the most complete one. Offline mode is very helpful since I study during my commute. Highly recommend to all job seekers.", name: "Karim Hossain", role: "Govt Job Aspirant", initial: "K" },
];

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary-200 selection:text-primary-900">
      {/* NAV */}
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-500/30 group-hover:rotate-6 transition-transform">
              <Trophy size={20} />
            </div>
            <span className={`text-2xl font-black font-serif tracking-tighter transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
              Uttoron<span className="text-primary-500">.</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Features', 'Subjects', 'Reviews'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-semibold transition-colors ${scrolled ? "text-slate-600 hover:text-primary-600" : "text-white/80 hover:text-white"}`}
              >
                {link}
              </a>
            ))}
            <a 
              href="#download"
              className="px-6 py-2.5 bg-primary-600 text-white rounded-full font-bold text-sm shadow-lg shadow-primary-500/25 hover:bg-primary-700 hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </a>
          </div>

          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-8">
              {['Features', 'Subjects', 'Reviews'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  className="text-3xl font-black font-serif text-slate-900 border-b border-slate-100 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a 
                href="#download"
                className="w-full py-5 bg-primary-600 text-white rounded-3xl font-black text-xl text-center shadow-2xl shadow-primary-500/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download Uttoron
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-950">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[120px] -mr-96 -mt-96" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[100px] -ml-48 -mb-48" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 mix-blend-soft-light" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-primary-400 text-xs font-black tracking-widest uppercase mb-10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Now Live on Play Store
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white font-serif leading-[0.95] mb-8 tracking-tighter">
              Rise <span className="text-primary-500 italic font-normal">higher</span> <br />
              with Uttoron.
            </h1>
            
            <p className="text-xl text-slate-400 font-medium mb-10 max-w-lg leading-relaxed">
              Bangladesh's premier BCS & Government Job prep platform. 
              <span className="text-white block mt-2 italic font-light">উত্তরণ — আপনার স্বপ্নের চাকরির পথে।</span>
            </p>

            <div className="flex flex-wrap gap-6 mb-16">
              <div className="flex flex-wrap gap-12">
                <div>
                  <div className="text-3xl font-black font-serif text-white">10K+</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Questions</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-3xl font-black font-serif text-white">50K+</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Users</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-3xl font-black font-serif text-white">4.8★</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Rating</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-5">
              <a href="#download" className="group relative flex items-center gap-4 bg-white text-slate-950 px-8 py-5 rounded-[2rem] font-black text-lg hover:bg-primary-500 hover:text-white transition-all overflow-hidden">
                <Download size={24} />
                Download App
                <div className="absolute inset-0 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left -z-10" />
              </a>
              <a href="#features" className="flex items-center gap-4 bg-white/5 border border-white/10 text-white px-8 py-5 rounded-[2rem] font-black text-lg hover:bg-white/10 transition-colors backdrop-blur-md">
                <Play size={24} className="fill-white" />
                Watch Demo
              </a>
            </div>
          </motion.div>

          {/* Premium UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 100, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative perspective-1000 hidden lg:block"
          >
            <div className="relative z-10 w-[320px] h-[640px] bg-slate-900 rounded-[3.5rem] border-[12px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden mx-auto transform-gpu transition-transform hover:scale-[1.02] duration-500">
              {/* Screen Content */}
              <div className="absolute inset-0 flex flex-col pt-12 pb-6 px-5 bg-slate-900">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-xl font-black font-serif text-white">Uttoron</div>
                  <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 border border-primary-500/20">
                    <Trophy size={16} />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="p-5 bg-white/5 border border-white/10 rounded-3xl">
                    <div className="text-[8px] font-black text-primary-400 uppercase tracking-widest mb-2">Subject: Bangladesh Affairs</div>
                    <div className="text-white text-sm font-bold leading-relaxed mb-4">বঙ্গবন্ধুর ঐতিহাসিক ৭ই মার্চের ভাষণ সংবিধানের কোন তফসিলে অন্তর্ভুক্ত?</div>
                    <div className="space-y-2">
                       {['পঞ্চম', 'ষষ্ঠ', 'সপ্তম', 'চতুর্থ'].map((opt, i) => (
                         <div key={i} className={`p-3 rounded-xl border text-[10px] font-bold ${i === 0 ? "bg-primary-500 border-primary-500 text-white" : "bg-white/5 border-white/5 text-white/40"}`}>
                           {opt} {i === 0 && "✓"}
                         </div>
                       ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 border border-white/5 p-4 rounded-3xl">
                    <div className="text-lg font-black text-white">427</div>
                    <div className="text-[8px] text-slate-500 uppercase tracking-widest">Points</div>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-4 rounded-3xl">
                    <div className="text-lg font-black text-white">12🔥</div>
                    <div className="text-[8px] text-slate-500 uppercase tracking-widest">Day Streak</div>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="bg-primary-500 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-lg shadow-primary-500/30 cursor-pointer">
                    Next Question
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/30 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="bg-white border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-12">
          {['10K+ Questions', '50K+ Active Users', 'BCS Coverage', 'Top 1% Results'].map((stat, i) => (
            <motion.div 
              {...fadeIn} 
              transition={{ delay: i * 0.1 }}
              key={stat} 
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 transition-transform group-hover:scale-110">
                <Target size={20} />
              </div>
              <span className="text-lg font-bold text-slate-900">{stat}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
            <div>
              <div className="text-primary-600 font-black text-xs tracking-widest uppercase mb-4">Core Engine</div>
              <h2 className="text-5xl md:text-7xl font-black font-serif text-slate-950 leading-[0.9] tracking-tighter">
                Tools that define <br />
                <span className="text-primary-600 italic font-normal">your success.</span>
              </h2>
            </div>
            <p className="text-xl text-slate-500 leading-relaxed max-w-md ml-auto text-right">
              We've re-engineered the way job seekers study. Fast, data-driven, and focused.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                key={i}
                className="group relative bg-white p-10 rounded-[3rem] border border-slate-100 hover:border-primary-200 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-slate-50 flex items-center justify-center text-slate-900 mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-950 mb-4">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
                <div className="mt-8 pt-8 border-t border-slate-50 flex items-center text-primary-600 font-black text-xs gap-2 cursor-pointer hover:gap-4 transition-all">
                  EXPLORE FEATURE <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK SECTION: SUBJECTS */}
      <section id="subjects" className="py-32 px-6 bg-slate-950 rounded-[4rem] mx-4 my-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl md:text-7xl font-black font-serif text-white mb-8 tracking-tighter">
              All BCS Subjects. <br />
              <span className="text-primary-500 italic font-normal">One Master Key.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {subjects.map((s, i) => (
              <motion.div 
                {...fadeIn}
                transition={{ delay: i * 0.05 }}
                key={i}
                className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all group flex flex-col items-center text-center backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 mb-4 group-hover:scale-110 transition-transform">
                  <Star size={16} fill="currentColor" />
                </div>
                <div className="text-white font-bold mb-1">{s.name}</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-widest">{s.count}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-24">
            <div className="text-primary-600 font-black text-xs tracking-widest uppercase mb-4">Social Proof</div>
            <h2 className="text-5xl md:text-6xl font-black font-serif text-slate-950 tracking-tighter">
              Winning hearts, <br />
              changing lives.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <motion.div 
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-white p-12 rounded-[3.5rem] border border-slate-100 flex flex-col shadow-xl shadow-slate-200/20"
              >
                <div className="flex gap-1 text-primary-500 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-2xl font-medium text-slate-900 mb-12 italic leading-relaxed">"{t.text}"</p>
                <div className="mt-auto flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-white font-black text-lg">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-slate-950 font-black">{t.name}</div>
                    <div className="text-xs font-bold text-primary-600 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="py-40 px-6 bg-primary-600 rounded-[5rem] mx-4 my-10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black font-serif text-white mb-12 tracking-tighter">
            Your dream job <br /> 
            starts here.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="px-12 py-6 bg-white text-primary-900 rounded-[2.5rem] font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary-950/20">
              Download on Play Store
            </a>
            <a href="#" className="px-12 py-6 bg-primary-950 text-white rounded-[2.5rem] font-black text-xl hover:scale-105 transition-transform">
              Join Community
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
           <div className="text-5xl font-black font-serif text-slate-950 mb-12">
            Uttoron<span className="text-primary-600">.</span>
           </div>
           
           <div className="flex flex-wrap justify-center gap-12 mb-20 text-slate-500 font-bold uppercase tracking-widest text-xs">
            {['Privacy Policy', 'Terms of Use', 'Support', 'Faq'].map((link) => (
              <Link key={link} to={link === 'Privacy Policy' ? "/privacy-policy" : (link === 'Terms of Use' ? "/terms" : "#")} className="hover:text-primary-600 transition-colors">
                {link}
              </Link>
            ))}
           </div>

           <div className="flex flex-wrap justify-center gap-8 mb-20">
             {['Twitter', 'Instagram', 'Youtube', 'Linkedin'].map(s => (
               <a key={s} href="#" className="w-14 h-14 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-950 hover:bg-primary-600 hover:text-white transition-all shadow-sm">
                 <ArrowRight size={20} className="-rotate-45" />
               </a>
             ))}
           </div>

           <div className="w-full pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
             <div className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                © 2026 UTTORON INC. ALL RIGHTS RESERVED.
             </div>
             <div className="text-slate-900 font-serif font-black italic">
               উত্তরণ — উঠে আসো, এগিয়ে যাও।
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
