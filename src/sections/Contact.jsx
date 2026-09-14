import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const AnimatedInput = ({ label, type, name, placeholder, error }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative group">
      <motion.label 
        animate={{ 
          y: isFocused || value ? -5 : 0, 
          color: isFocused ? "#FF4D00" : "#FF4D00" 
        }}
        className="absolute -top-4 left-0 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
      >
        {label}
      </motion.label>
      
      {type === "textarea" ? (
        <textarea
          name={name}
          rows="4"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full bg-transparent py-4 text-primary text-xl font-light placeholder:text-primary/30 focus:outline-none resize-none transition-all ${error ? 'border-b border-red-500' : 'border-b border-primary/20'}`}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full bg-transparent py-4 text-primary text-xl font-light placeholder:text-primary/30 focus:outline-none transition-all ${error ? 'border-b border-red-500' : 'border-b border-primary/20'}`}
          placeholder={placeholder}
        />
      )}
      
      {/* Animated underline */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "circOut" }}
        style={{ originX: 0 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary pointer-events-none"
      />

      {/* Typing Pulse Indicator */}
      <AnimatePresence>
        {isFocused && value.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent1 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.get('user_name')?.trim()) newErrors.user_name = true;
    if (!formData.get('user_email')?.trim()) newErrors.user_email = true;
    if (!formData.get('message')?.trim()) newErrors.message = true;
    
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
      toast.error('Please complete all required fields correctly.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            access_key: "7da31564-808f-4436-9a63-e6927344e413",
            name: formData.get('user_name'),
            email: formData.get('user_email'),
            message: formData.get('message'),
            subject: "New Portfolio Message from " + formData.get('user_name')
        })
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
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

  return (
    <section id="contact" className="py-32 relative bg-surface">
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#111',
          color: '#fff',
          borderRadius: '0px',
        }
      }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Side: Massive Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <h2 className="text-[12vw] lg:text-[8vw] font-serif font-black tracking-tighter leading-[0.85] text-primary mb-12">
            LET'S<br/>TALK.
          </h2>
          
          <p className="text-xl text-primary/70 font-light mb-12 max-w-sm leading-relaxed">
            I'm always open to discussing product design work or partnership opportunities.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-primary group">
              <Mail size={20} className="text-secondary group-hover:text-accent1 transition-colors" />
              <span className="font-semibold uppercase tracking-widest text-sm">gowthamraja1253@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-primary group">
              <MapPin size={20} className="text-secondary group-hover:text-accent1 transition-colors" />
              <span className="font-semibold uppercase tracking-widest text-sm">Chennai, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Ultra Minimal Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 lg:pt-12"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-12">
            
            <AnimatedInput 
              label="01. What's your name?" 
              type="text" 
              name="user_name" 
              placeholder="John Doe *" 
              error={errors.user_name} 
            />

            <AnimatedInput 
              label="02. What's your email?" 
              type="email" 
              name="user_email" 
              placeholder="john@example.com *" 
              error={errors.user_email} 
            />
            
            <AnimatedInput 
              label="03. Your message" 
              type="textarea" 
              name="message" 
              placeholder="Hello, I'd like to talk about... *" 
              error={errors.message} 
            />

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="self-start mt-4 flex items-center gap-4 text-xl font-serif font-bold text-primary group disabled:opacity-80"
            >
              <span className="group-hover:-translate-x-2 transition-transform">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              
              <div className={`relative w-12 h-12 rounded-full border flex items-center justify-center overflow-hidden transition-all duration-300 ${isSubmitting ? 'bg-primary border-primary' : 'border-primary/20 group-hover:bg-primary group-hover:border-primary'}`}>
                <AnimatePresence mode="wait">
                  {!isSubmitting ? (
                    <motion.div
                      key="arrow"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-primary group-hover:text-surface"
                    >
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="plane"
                      initial={{ x: -20, y: 20, opacity: 0 }}
                      animate={{ x: [ -20, 0, 20 ], y: [ 20, 0, -20 ], opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="text-surface"
                    >
                      <Send size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
