import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ShieldCheck, Mail, Calendar, Eye, Server, RefreshCcw } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Information We Collect",
      content: (
        <ul className="space-y-3 list-disc pl-5 text-text-mid">
          <li><strong>Account data:</strong> name, username, email, phone (if provided), profile image URL.</li>
          <li><strong>Authentication data:</strong> access token and session metadata stored securely on device.</li>
          <li><strong>Device and network data:</strong> device identifier and local IP (used for API security, fraud prevention, and diagnostics).</li>
          <li><strong>Usage and performance data:</strong> quiz attempts, results, leaderboard participation, analytics summaries.</li>
        </ul>
      )
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "How We Use Data",
      content: (
        <ul className="space-y-3 list-disc pl-5 text-text-mid">
          <li>To create and manage your account.</li>
          <li>To deliver quizzes, evaluate results, and show rankings.</li>
          <li>To personalize your practice and show progress analytics.</li>
          <li>To maintain service security and reliability.</li>
        </ul>
      )
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Security & Retention",
      content: (
        <p className="text-text-mid leading-relaxed">
          We use industry-standard security controls. Sensitive local credentials are stored using secure storage APIs 
          on supported devices. We retain data for as long as your account is active or as required for legal and 
          operational purposes. We do not sell personal data.
        </p>
      )
    },
    {
      icon: <RefreshCcw className="w-5 h-5" />,
      title: "Your Rights & Updates",
      content: (
        <p className="text-text-mid leading-relaxed">
          You may request access, correction, or deletion of your account data by contacting us. 
          We may update this policy from time to time; any changes will be posted on this page.
        </p>
      )
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
          <h1 className="text-4xl md:text-5xl font-black font-serif text-white mb-4">Privacy Policy</h1>
          <div className="flex items-center justify-center gap-4 text-white/40 text-[10px] font-bold uppercase tracking-widest">
            <div className="flex items-center gap-1.5"><Calendar size={12} /> Effective: March 25, 2026</div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-1.5"><ShieldCheck size={12} /> Version 1.0</div>
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
          <p className="text-text-mid text-lg leading-relaxed mb-12">
            At Uttoron, we are committed to protecting your privacy. This policy explains what data we collect, 
            why we collect it, and how we protect it in our BCS and government job preparation services.
          </p>

          <div className="space-y-12">
            {sections.map((section, idx) => (
              <section key={idx}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-700">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-black text-primary-900 font-serif">{section.title}</h2>
                </div>
                <div className="pl-13">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-black/5">
            <h3 className="text-lg font-black text-primary-900 mb-4 inline-flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary-600" /> Contact Us
            </h3>
            <p className="text-text-mid text-sm leading-relaxed mb-6">
              For privacy requests or questions about our data practices, please reach out to our support team:
            </p>
            <a href="mailto:support@syntorit.com" className="inline-block bg-primary-50 text-primary-900 font-bold px-6 py-3 rounded-2xl hover:bg-primary-100 transition-colors">
              support@syntorit.com
            </a>
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
