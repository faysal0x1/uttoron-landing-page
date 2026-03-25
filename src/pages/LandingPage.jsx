import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Target, Zap, BarChart3, Trophy, WifiOff, 
  ChevronRight, Download, Play, Star, ShieldCheck, 
  HelpCircle, MessageCircle, Info, Menu, X, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: <BookOpen className="w-6 h-6" />, title: "10,000+ MCQ Questions", desc: "Comprehensive question bank covering BCS Preliminary, Bank Job, and all Government Job exams with detailed explanations." },
  { icon: <Target className="w-6 h-6" />, title: "Full Mock Tests", desc: "Simulate the real BCS Preliminary exam experience with timed full-length tests and instant performance analysis." },
  { icon: <Zap className="w-6 h-6" />, title: "Daily Challenge", desc: "Fresh questions every single day to keep your preparation sharp and consistent. Build a daily study habit." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Performance Analytics", desc: "Track your progress over time, identify weak subjects, and get personalized recommendations to improve." },
  { icon: <Trophy className="w-6 h-6" />, title: "National Leaderboard", desc: "Compete with thousands of students across Bangladesh. See your rank and climb to the top." },
  { icon: <WifiOff className="w-6 h-6" />, title: "Offline Mode", desc: "Download question sets and practice without internet. Study on the bus, train — anywhere, anytime." },
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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#fefdf8]">
      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] px-6 py-4 transition-all duration-300 ${scrolled ? "bg-primary-900/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-black font-serif text-white tracking-tight">
            Uttoron<span className="text-accent">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-white/80 font-medium text-sm">
            <a href="#features" className="hover:text-accent transition-colors">Features</a>
            <a href="#subjects" className="hover:text-accent transition-colors">Subjects</a>
            <a href="#testimonials" className="hover:text-accent transition-colors">Reviews</a>
            <a href="#download" className="bg-accent text-primary-900 px-6 py-2.5 rounded-full font-bold text-xs hover:scale-105 transition-transform shadow-lg shadow-accent/20">
              Download Free
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-[99] bg-primary-900 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-white">
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#subjects" onClick={() => setMobileMenuOpen(false)}>Subjects</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
              <a href="#download" className="bg-accent text-primary-900 p-3 rounded-lg text-center font-bold" onClick={() => setMobileMenuOpen(false)}>
                Download Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-green-950">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 text-accent-light text-[10px] font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Now Available on Google Play
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white font-serif leading-[1.1] mb-6">
              Rise Up <br className="hidden md:block" />
              With <span className="text-accent">Uttoron</span>
            </h1>
            <p className="text-xl text-white/50 font-light mb-8 italic">উত্তরণ — উঠে আসো, এগিয়ে যাও</p>
            <p className="text-lg text-white/70 leading-relaxed max-w-lg mb-10">
              Bangladesh's most complete BCS & Government Job exam preparation app.
              Practice 10,000+ MCQ questions, take full mock tests, and track your
              progress — all for free.
            </p>
            
            <div className="flex flex-wrap gap-12 mb-10">
              <div>
                <span className="block text-3xl font-serif font-bold text-accent">10K+</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Questions</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div>
                <span className="block text-3xl font-serif font-bold text-accent">50K+</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Students</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div>
                <span className="block text-3xl font-serif font-bold text-accent">4.8★</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Rating</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#download" className="flex items-center gap-3 bg-accent text-primary-900 px-8 py-4 rounded-full font-bold shadow-2xl shadow-accent/30 hover:-translate-y-1 transition-transform group">
                <Download size={20} className="group-hover:bounce" />
                Download Free
              </a>
              <a href="#features" className="flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                <Play size={20} className="fill-white" />
                See Features
              </a>
            </div>
          </motion.div>

          {/* Desktop Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="w-[300px] h-[600px] rounded-[3rem] bg-zinc-900 border-[8px] border-zinc-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] relative overflow-hidden group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20" />
              <div className="absolute inset-0 bg-primary-900 overflow-hidden flex flex-col pt-10 px-4">
                <div className="py-4 text-center border-b border-white/5 mb-6">
                  <div className="text-sm font-bold text-white tracking-widest">UTTORON</div>
                  <div className="text-[10px] text-white/40 mt-1">Daily Quiz Challenge</div>
                </div>
                
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-4">
                  <div className="text-[8px] text-accent font-black tracking-widest uppercase mb-2">Question 4 of 20 · BCS</div>
                  <div className="text-white text-sm font-semibold leading-relaxed mb-4">বাংলাদেশের স্বাধীনতা যুদ্ধ কত সালে শুরু হয়েছিল?</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-accent/20 border border-accent text-accent p-3 rounded-xl text-[10px] font-bold text-center">✓ 1971</div>
                    <div className="bg-white/5 border border-white/5 text-white/40 p-3 rounded-xl text-[10px] text-center">1969</div>
                    <div className="bg-white/5 border border-white/5 text-white/40 p-3 rounded-xl text-[10px] text-center">1972</div>
                    <div className="bg-white/5 border border-white/5 text-white/40 p-3 rounded-xl text-[10px] text-center">1970</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                    <div className="text-xl font-serif font-black text-white">85%</div>
                    <div className="text-[8px] text-white/40 uppercase tracking-widest">Score</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                    <div className="text-xl font-serif font-black text-white">7🔥</div>
                    <div className="text-[8px] text-white/40 uppercase tracking-widest">Streak</div>
                  </div>
                </div>

                <div className="mt-auto pb-4">
                  <div className="flex justify-between text-[8px] text-white/40 mb-2 uppercase tracking-widest">
                    <span>Course Progress</span>
                    <span>68%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "68%" }} className="h-full bg-accent" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="bg-accent py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "10,000+", l: "MCQ Questions" },
            { n: "50,000+", l: "Active Users" },
            { n: "10+", l: "BCS Subjects" },
            { n: "4.8 ★", l: "Play Store" }
          ].map((s, i) => (
            <motion.div {...fadeIn} transition={{ delay: i * 0.1 }} key={i}>
              <div className="text-4xl font-black font-serif text-primary-900 leading-none">{s.n}</div>
              <div className="text-[10px] font-bold text-primary-800 uppercase tracking-widest mt-2">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20 text-center mx-auto">
            <div className="text-primary-600 font-bold text-xs tracking-[0.2em] uppercase mb-4">Why Choose Uttoron</div>
            <h2 className="text-4xl md:text-5xl font-black font-serif text-primary-900 leading-tight mb-6">
              Everything You Need to <br />
              <span className="text-primary-600 italic font-normal">Crack Your Dream Job</span>
            </h2>
            <p className="text-text-mid leading-relaxed">Built specifically for BCS and government job aspirants in Bangladesh — with the right tools, right questions, and right guidance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }} 
                key={i}
                className="bg-white p-8 rounded-3xl border border-black/5 hover:-translate-y-2 transition-all hover:shadow-2xl hover:shadow-black/5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-700 mb-6 group-hover:bg-primary-900 group-hover:text-accent transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">{f.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section id="subjects" className="py-32 bg-primary-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <div className="text-accent-light font-bold text-xs tracking-[0.2em] uppercase mb-4">Full Coverage</div>
              <h2 className="text-4xl md:text-5xl font-black font-serif text-white leading-tight mb-8">
                All BCS Subjects <br />
                Covered in Depth
              </h2>
              <p className="text-white/60 leading-relaxed mb-10 max-w-md">From Bangla Literature to Computer Science — every subject you need for BCS Preliminary, Bank Job, and Government exams is fully covered.</p>
              
              <div className="flex flex-wrap gap-3">
                {["BCS Prelim", "Bank Job", "Govt Job", "Non-Cadre"].map(tag => (
                  <span key={tag} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {subjects.map((s, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  key={i}
                  className="bg-white/5 border border-white/10 p-5 rounded-2xl group hover:bg-white/10 hover:border-accent/30 transition-all flex items-center gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                  <div>
                    <div className="text-white text-sm font-semibold">{s.name}</div>
                    <div className="text-white/30 text-[10px] mt-1 font-medium">{s.count}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-32 bg-bg-cream-2 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-primary-600 font-bold text-xs tracking-[0.2em] uppercase mb-4">Student Stories</div>
            <h2 className="text-4xl md:text-5xl font-black font-serif text-primary-900 leading-tight">
              Real Students, <br />
              <span className="text-primary-600 italic font-normal">Real Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-white p-10 rounded-[2.5rem] border border-black/5 flex flex-col h-full shadow-lg shadow-black/[0.02]"
              >
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-text-mid leading-relaxed mb-10 flex-grow text-lg italic">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-black/5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-700 to-primary-500 flex items-center justify-center text-white font-black text-xs">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-primary-900 font-black text-sm">{t.name}</div>
                    <div className="text-primary-600 text-[10px] font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="download" className="py-32 px-6 overflow-hidden bg-primary-900 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl md:text-7xl font-black font-serif text-white mb-8 leading-[1.05]">
              Start Your Journey <br />
              To <span className="text-accent">Success Today</span>
            </h2>
            <p className="text-lg text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join 50,000+ students across Bangladesh who are already preparing smarter with Uttoron. 
              Download free and start practicing right now.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-accent text-primary-900 px-10 py-5 rounded-[2rem] font-black shadow-2xl shadow-accent/40 group hover:scale-105 transition-all">
                <Play className="fill-current w-8 h-8" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-black opacity-60 tracking-widest">Get it on</div>
                  <div className="text-xl">Google Play</div>
                </div>
              </a>
              <a href="#features" className="px-10 py-5 rounded-[2rem] border-2 border-white/20 text-white font-black hover:bg-white/5 transition-colors">
                Learn More
              </a>
            </div>
            
            <p className="mt-12 text-[10px] text-white/30 uppercase tracking-[0.3em] font-black">
              Free to download • Works offline • Updated daily
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary-950 pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.02] blur-[100px]" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <div className="text-3xl font-black font-serif text-white mb-8">Uttoron<span className="text-accent">.</span></div>
              <p className="text-white/40 leading-relaxed mb-8 max-w-xs">Bangladesh's most complete BCS and Government Job exam preparation app. Rise up, break through, achieve your dream.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:text-accent hover:bg-white/10 transition-all"><MessageCircle size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:text-accent hover:bg-white/10 transition-all"><Info size={20} /></a>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-xs font-black text-accent uppercase tracking-widest mb-8">Product</h4>
              <ul className="space-y-4 text-sm text-white/40 font-medium">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#subjects" className="hover:text-white transition-colors">BCS Preparation</a></li>
                <li><a href="#download" className="hover:text-white transition-colors">Mock Tests</a></li>
                <li><a href="#download" className="hover:text-white transition-colors">Leaderboard</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-xs font-black text-accent uppercase tracking-widest mb-8">Legal</h4>
              <ul className="space-y-4 text-sm text-white/40 font-medium">
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-black text-accent uppercase tracking-widest mb-8">Download</h4>
              <ul className="space-y-6">
                <li>
                  <a href="https://play.google.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-accent group-hover:bg-accent/10 transition-all"><Download size={24} /></div>
                    <div>
                      <div className="text-[10px] text-white/30 uppercase font-black tracking-widest">Get it on</div>
                      <div className="text-white font-bold">Google Play</div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-4 opacity-30">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40"><ArrowRight size={20} /></div>
                    <div>
                      <div className="text-[10px] text-white/30 uppercase font-black tracking-widest">Coming Soon</div>
                      <div className="text-white font-bold">iOS App Store</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
              © 2026 Uttoron. Made with ❤️ in Bangladesh.
            </div>
            <div className="text-sm font-light text-white/20 italic">
              উত্তরণ — আপনার স্বপ্নের চাকরির পথে
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
