import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, ArrowUpRight, Loader2, AlertCircle } from 'lucide-react';
import { CONTACT, BRAND, SECTIONS } from '../content';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Fallback: open mailto if no endpoint
    if (!CONTACT.formEndpoint) {
      const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
      const body = encodeURIComponent(`From: ${formData.name} <${formData.email}>\n\n${formData.message}`);
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(CONTACT.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-32 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">
              {SECTIONS.contact.title}
            </h2>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-10">
              {SECTIONS.contact.subtitle}
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md">
              {CONTACT.subheadline}
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 text-zinc-300 hover:text-zinc-100 transition-colors group"
              >
                <span className="p-3 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-sm text-zinc-500 font-mono uppercase tracking-wider">Email</p>
                  <p className="font-medium">{CONTACT.email}</p>
                </div>
              </a>

              {BRAND.socials.linkedin && (
                <a
                  href={BRAND.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-zinc-300 hover:text-zinc-100 transition-colors group"
                >
                  <span className="p-3 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                    <ArrowUpRight size={20} />
                  </span>
                  <div>
                    <p className="text-sm text-zinc-500 font-mono uppercase tracking-wider">LinkedIn</p>
                    <p className="font-medium">Connect for recruitment</p>
                  </div>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-zinc-100" />
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-2">Message sent</h3>
                <p className="text-zinc-400">Thanks for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-mono text-zinc-500 hover:text-zinc-100 underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    disabled={status === 'submitting'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    disabled={status === 'submitting'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    disabled={status === 'submitting'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell me about your project, role, or idea..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm font-mono p-3 bg-red-400/10 border border-red-400/20 rounded-lg">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full px-6 py-4 bg-zinc-100 text-zinc-950 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
