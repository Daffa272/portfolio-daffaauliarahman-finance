import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, MapPin, Linkedin, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export default function Contact() {
  const { profile } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity: Finance Staff / Accounting Staff',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or organization.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your contact email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate form submission & prepare mailto fallback
    setSubmitted(true);
  };

  const handleOpenMailClient = () => {
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
            06. Professional Communication
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Get in Touch for Opportunities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Available for immediate full-time employment as Finance Staff, Accounting Staff, or Treasury Operations in Indonesia.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-2xs space-y-5">
              <h3 className="text-base font-bold text-slate-900">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you have an opening for an entry-level Finance Staff role, an accounting test inquiry, or wish to review my academic credentials, feel free to reach out directly.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 shrink-0">
                    <Mail className="w-4 h-4 text-slate-700" />
                  </div>
                  <div className="flex-1">
                    <span className="text-slate-500 block text-[11px]">Primary Email</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-semibold text-slate-900 hover:underline"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded hover:bg-white"
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 shrink-0">
                    <Linkedin className="w-4 h-4 text-slate-700" />
                  </div>
                  <div className="flex-1">
                    <span className="text-slate-500 block text-[11px]">LinkedIn Profile</span>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-slate-900 hover:underline inline-flex items-center gap-1"
                    >
                      <span>linkedin.com/in/daffaauliar</span>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 text-xs">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 shrink-0">
                    <MapPin className="w-4 h-4 text-slate-700" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Based In</span>
                    <span className="font-semibold text-slate-900">
                      {profile.location} (Open to Greater Jakarta / Jabodetabek & Hybrid/WFO)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recruiter Guarantee Card */}
            <div className="p-4 bg-slate-900 text-white rounded-xl text-xs space-y-2">
              <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block">
                Recruiter Responsiveness
              </span>
              <p className="text-slate-300 leading-relaxed">
                Messages sent via email or LinkedIn are typically answered within 24 hours on business days.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Fill in the details below to initiate contact directly with Daffa.
              </p>

              {submitted ? (
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4 animate-fade-in text-center sm:text-left">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm justify-center sm:justify-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Message Formatted Successfully!</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Because this static site operates without an active cloud database endpoint, click the button below to launch your email client with your prefilled message, or email directly to <strong>{profile.email}</strong>.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                    <button
                      onClick={handleOpenMailClient}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Launch Email Application</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-3.5 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-50 cursor-pointer"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name / Recruiter Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins (HR Recruitment)"
                      className={`w-full text-xs px-3 py-2.5 rounded-lg border bg-white focus:outline-hidden focus:ring-2 focus:ring-slate-900 ${
                        errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Corporate / Contact Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.co.id"
                      className={`w-full text-xs px-3 py-2.5 rounded-lg border bg-white focus:outline-hidden focus:ring-2 focus:ring-slate-900 ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject / Role Category <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-slate-900 text-slate-800"
                    >
                      <option value="Job Opportunity: Finance Staff / Accounting Staff">Job Opportunity: Finance Staff / Accounting Staff</option>
                      <option value="Treasury Staff / Financial Operations Inquiry">Treasury Staff / Financial Operations Inquiry</option>
                      <option value="Technical Skills / Accurate 5 Competency Query">Technical Skills / Accurate 5 Competency Query</option>
                      <option value="General Professional Inquiry">General Professional Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700">
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your inquiry or interview invitation details..."
                      className={`w-full text-xs p-3 rounded-lg border bg-white focus:outline-hidden focus:ring-2 focus:ring-slate-900 ${
                        errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      *All inquiries handled confidentially.
                    </span>

                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg inline-flex items-center gap-2 transition-colors shadow-2xs cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
