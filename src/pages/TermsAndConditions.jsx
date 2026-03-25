import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, Scale, Clock, Globe, HelpCircle, FileText } from "lucide-react";

export default function TermsAndConditions() {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using Uttoron, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use the service."
    },
    {
      title: "2. Description of Service",
      content: "Uttoron provides educational materials, practice tests, and analytics for BCS and government job exam preparation. We reserve the right to modify or discontinue any part of the service at any time."
    },
    {
      title: "3. User Conduct",
      content: "Users are prohibited from reverse-engineering the app, scraping content, or using the service for any illegal purpose. You are responsible for maintaining the confidentiality of your account credentials."
    },
    {
      title: "4. Intellectual Property",
      content: "All content provided in Uttoron, including questions, explanations, graphics, and logos, is the property of Uttoron or its licensors and is protected by copyright laws."
    },
    {
      title: "5. Limitation of Liability",
      content: "The service is provided 'as is'. We do not guarantee that the service will be error-free or that your use of the service will result in specific exam outcomes."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fefdf8] pb-24">
      {/* Header */}
      <header className="bg-primary-900 pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-accent-light text-sm font-bold mb-8 hover:translate-x-[-4px] transition-transform">
            <ChevronLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black font-serif text-white mb-4">Terms of Use</h1>
          <div className="flex items-center justify-center gap-4 text-white/40 text-[10px] font-bold uppercase tracking-widest">
            <div className="flex items-center gap-1.5"><Clock size={12} /> Last Updated: March 25, 2026</div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-1.5"><Globe size={12} /> Global Application</div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 mt-[-40px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-black/[0.03] border border-black/5"
        >
          <div className="flex items-center gap-4 mb-12 p-6 rounded-3xl bg-primary-50">
            <Scale className="text-primary-700 w-8 h-8 shrink-0" />
            <p className="text-primary-900 text-sm font-semibold leading-relaxed">
              Please read these terms carefully before using Uttoron. These terms govern your access to and 
              use of our platform and services.
            </p>
          </div>

          <div className="space-y-12">
            {terms.map((term, idx) => (
              <section key={idx}>
                <h2 className="text-xl font-black text-primary-900 font-serif mb-4">{term.title}</h2>
                <p className="text-text-mid leading-relaxed pl-4 border-l-2 border-primary-100">
                  {term.content}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-black/5 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-black text-primary-900 mb-4 inline-flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary-600" /> Need Help?
              </h3>
              <p className="text-text-mid text-sm leading-relaxed mb-6">
                If you have questions about these terms, please contact us.
              </p>
              <a href="mailto:support@syntorit.com" className="text-primary-600 font-bold hover:underline">
                support@syntorit.com
              </a>
            </div>
            <div className="bg-bg-cream p-6 rounded-2xl flex items-start gap-4">
              <FileText className="text-primary-400 w-6 h-6 shrink-0" />
              <p className="text-[10px] text-text-light uppercase font-bold tracking-widest leading-loose">
                Uttoron is a product of Syntorit. All rights reserved. Intellectual property protections apply to all question banks and original content.
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer link */}
      <div className="text-center mt-12">
        <Link to="/" className="text-primary-600 font-bold text-sm hover:underline underline-offset-4">
          Return to Uttoron Home
        </Link>
      </div>
    </div>
  );
}
