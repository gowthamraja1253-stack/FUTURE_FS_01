import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.get('user_name')?.trim()) newErrors.user_name = true;
    if (!formData.get('user_email')?.trim()) newErrors.user_email = true;
    if (!formData.get('message')?.trim()) newErrors.message = true;
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.get('user_email') && !emailRegex.test(formData.get('user_email').trim())) {
      newErrors.user_email = true;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    
    if (!validateForm(formData)) {
      toast.error('Please fill out all required fields correctly.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/gowthamraja1253@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get('user_name'),
            email: formData.get('user_email'),
            message: formData.get('message'),
            _subject: "New Portfolio Message!"
        })
      });

      if (response.ok) {
        toast.success('Message sent! (Check your inbox to activate if first time)');
        e.target.reset();
        setErrors({});
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const shakeAnimation = {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.4 }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#1a1a1a',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)',
        }
      }} />
      
      {/* Background elements */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent1/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full mx-auto mb-6"></div>
          <p className="text-secondary text-lg">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="mt-8 flex justify-center">
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl border-white/10 space-y-8 shadow-2xl relative">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div animate={errors.user_name ? shakeAnimation : {}} className="space-y-2 relative">
                <label className="text-sm font-semibold text-white/90 ml-1">Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  className={`w-full bg-white/5 border ${errors.user_name ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent1/50 focus:border-accent1 transition-all`}
                  placeholder="John Doe"
                />
              </motion.div>
              <motion.div animate={errors.user_email ? shakeAnimation : {}} className="space-y-2 relative">
                <label className="text-sm font-semibold text-white/90 ml-1">Email</label>
                <input 
                  type="text" 
                  name="user_email" 
                  className={`w-full bg-white/5 border ${errors.user_email ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent1/50 focus:border-accent1 transition-all`}
                  placeholder="john@example.com"
                />
              </motion.div>
            </div>
            
            <motion.div animate={errors.message ? shakeAnimation : {}} className="space-y-2 relative">
              <label className="text-sm font-semibold text-white/90 ml-1">Message</label>
              <textarea 
                name="message" 
                rows="6"
                className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent1/50 focus:border-accent1 transition-all resize-none`}
                placeholder="Hello Gowtham, I would like to talk about..."
              ></textarea>
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-accent1 to-accent2 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-[3px] border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
