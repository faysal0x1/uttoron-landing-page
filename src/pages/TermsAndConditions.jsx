import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, Scale, Clock, Globe, HelpCircle, FileText } from "lucide-react";

export default function TermsAndConditions() {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using Abhijan, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use the service."
    },
    {
      title: "2. Description of Service",
      content: "Abhijan provides educational materials, practice tests, and analytics for BCS and government job exam preparation. We reserve the right to modify or discontinue any part of the service at any time."
    },
    {
      title: "3. User Conduct",
      content: "Users are prohibited from reverse-engineering the app, scraping content, or using the service for any illegal purpose. You are responsible for maintaining the confidentiality of your account credentials."
    },
    {
      title: "4. Intellectual Property",
      content: "All content provided in Abhijan, including questions, explanations, graphics, and logos, is the property of Abhijan or its licensors and is protected by copyright laws."
    },
    {
      title: "5. Limitation of Liability",
      content: "The service is provided 'as is'. We do not guarantee that the service will be error-free or that your use of the service will result in specific exam outcomes."
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
            Terms of <br /> <span className="text-primary-500 italic font-normal">Use.</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-slate-500 text-[10px] font-black tracking-widest uppercase">
            <div className="flex items-center gap-2"><Clock size={12} /> LAST UPDATED: MARCH 25, 2026</div>
            <div className="w-1 h-1 rounded-full bg-slate-800" />
            <div className="flex items-center gap-2"><Globe size={12} /> GLOBAL APPLICATION</div>
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
          <div className="flex flex-col md:flex-row gap-10 items-start p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
            <Scale className="text-primary-600 w-12 h-12" />
            <p className="text-2xl font-serif font-black text-slate-900 leading-tight">
              Please read these terms carefully. They govern your access to and 
              use of our platform and services.
            </p>
          </div>

          <div className="space-y-20">
            {terms.map((term, idx) => (
              <section key={idx} className="max-w-2xl">
                <h2 className="text-3xl font-black font-serif text-slate-950 mb-6 tracking-tight">{term.title}</h2>
                <p className="text-slate-500 font-medium leading-relaxed text-lg">
                  {term.content}
                </p>
              </section>
            ))}
          </div>

          <div className="pt-20 border-t border-slate-100 grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-black font-serif text-slate-950 inline-flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-primary-600" /> Need Help?
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                If you have questions about these terms, please contact us.
              </p>
              <a href="mailto:support@syntorit.com" className="inline-block text-xl font-black text-slate-950 hover:text-primary-600 transition-colors">
                support@syntorit.com
              </a>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative group overflow-hidden">
              <FileText className="text-slate-200 absolute -right-4 -bottom-4 w-32 h-32 group-hover:scale-110 transition-transform" />
              <p className="relative z-10 text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] leading-loose">
                Abhijan is a product of Syntorit. All rights reserved. Intellectual property protections apply to all question banks and original content.
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="py-20 text-center border-t border-slate-50">
        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
          © 2026 Abhijan. Legal guidelines.
        </div>
      </footer>
    </div>
  );
}
