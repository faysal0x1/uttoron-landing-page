import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ShieldCheck, Mail, Calendar, Eye, Server, RefreshCcw } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Information We Collect",
      content: (
        <ul className="space-y-4 text-slate-500 font-medium">
          <li><strong className="text-slate-900">Account data:</strong> name, username, email, phone (if provided), profile image URL.</li>
          <li><strong className="text-slate-900">Authentication data:</strong> access token and session metadata stored securely on device.</li>
          <li><strong className="text-slate-900">Device and network data:</strong> device identifier and local IP (used for API security, fraud prevention, and diagnostics).</li>
          <li><strong className="text-slate-900">Usage and performance data:</strong> quiz attempts, results, leaderboard participation, analytics summaries.</li>
        </ul>
      )
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "How We Use Data",
      content: (
        <ul className="space-y-4 text-slate-500 font-medium">
          <li>To create and manage your account.</li>
          <li>To deliver quizzes, evaluate results, and show rankings.</li>
          <li>To personalize your practice and show progress analytics.</li>
          <li>To maintain service security and reliability.</li>
        </ul>
      )
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Security & Retention",
      content: (
        <p className="text-slate-500 font-medium leading-relaxed">
          We use industry-standard security controls. Sensitive local credentials are stored using secure storage APIs 
          on supported devices. We retain data for as long as your account is active or as required for legal and 
          operational purposes. We do not sell personal data.
        </p>
      )
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: "Your Rights & Updates",
      content: (
        <p className="text-slate-500 font-medium leading-relaxed">
          You may request access, correction, or deletion of your account data by contacting us. 
          We may update this policy from time to time; any changes will be posted on this page.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-950 py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-400 text-xs font-black tracking-widest uppercase mb-12 hover:text-white transition-colors group">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
          </Link>
          <h1 className="text-6xl md:text-8xl font-black font-serif text-white tracking-tighter mb-8">
            Privacy <br /> <span className="text-primary-500 italic font-normal">Policy.</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-slate-500 text-[10px] font-black tracking-widest uppercase">
            <div className="flex items-center gap-2"><Calendar size={12} /> EFFECTIVE: MARCH 25, 2026</div>
            <div className="w-1 h-1 rounded-full bg-slate-800" />
            <div className="flex items-center gap-2"><ShieldCheck size={12} /> VERSION 1.0</div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-24"
        >
          <p className="text-3xl font-serif font-black text-slate-900 leading-tight">
            At Uttoron, we are committed to protecting your privacy. This policy explains what data we collect, 
            why we collect it, and how we protect it.
          </p>

          <div className="space-y-20">
            {sections.map((section, idx) => (
              <section key={idx} className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 sticky top-32">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-2xl text-slate-950 font-black text-xs uppercase tracking-widest mb-4">
                    {section.icon}
                    {section.title}
                  </div>
                </div>
                <div className="md:col-span-8 pt-2">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          <div className="pt-20 border-t border-slate-100">
            <div className="bg-slate-950 rounded-[3rem] p-12 text-center text-white">
              <Mail className="w-12 h-12 text-primary-500 mx-auto mb-6" />
              <h3 className="text-3xl font-black font-serif mb-4">Contact Us</h3>
              <p className="text-slate-400 font-medium mb-10 max-w-sm mx-auto">
                For privacy requests or questions about our data practices, please reach out to our team.
              </p>
              <a href="mailto:support@syntorit.com" className="inline-block px-10 py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-primary-500 hover:text-white transition-all">
                support@syntorit.com
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="py-20 text-center border-t border-slate-50">
        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
          © 2026 Uttoron. Respecting your data.
        </div>
      </footer>
    </div>
  );
}
