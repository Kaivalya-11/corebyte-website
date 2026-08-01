"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckmarkCircle01Icon, Loading02Icon, MailSend01Icon } from "hugeicons-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.projectType) newErrors.projectType = "Please select a project type.";
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Shared classes for premium glass inputs
  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-body";
  const labelClass = "block text-sm font-heading font-medium text-white/80 mb-2";
  const errorClass = "text-red-400 text-xs font-body mt-1 animate-in fade-in slide-in-from-top-1";

  return (
    <GlassCard className="p-8 md:p-10 border-white/10 relative overflow-hidden h-full shadow-2xl">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className={labelClass}>Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={inputClass}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className={errorClass}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClass}>Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className={inputClass}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>
            </div>

            {/* Company (Optional) */}
            <div>
              <label htmlFor="company" className={labelClass}>Company (Optional)</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className={labelClass}>Project Type *</label>
                <div className="relative">
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer bg-surface/50`}
                    aria-invalid={!!errors.projectType}
                  >
                    <option value="" disabled className="bg-surface text-white/50">Select a type</option>
                    <option value="web-app" className="bg-surface">Web Application</option>
                    <option value="marketing" className="bg-surface">Marketing Website</option>
                    <option value="ai-integration" className="bg-surface">AI Integration</option>
                    <option value="other" className="bg-surface">Other</option>
                  </select>
                </div>
                {errors.projectType && <p className={errorClass}>{errors.projectType}</p>}
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budget" className={labelClass}>Budget Range (Optional)</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer bg-surface/50`}
                >
                  <option value="" disabled className="bg-surface text-white/50">Select budget</option>
                  <option value="<10k" className="bg-surface">Under $10k</option>
                  <option value="10k-25k" className="bg-surface">$10k - $25k</option>
                  <option value="25k-50k" className="bg-surface">$25k - $50k</option>
                  <option value="50k+" className="bg-surface">$50k+</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClass}>Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your vision..."
                rows={5}
                className={`${inputClass} resize-none`}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className={errorClass}>{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full flex justify-center items-center gap-2 group shadow-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loading02Icon className="w-5 h-5 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Send Message
                    <MailSend01Icon className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 20 }}
            className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
              <CheckmarkCircle01Icon className="w-10 h-10 text-green-400" />
            </div>
            <div>
              <h3 className="text-3xl font-heading font-bold text-white mb-3">
                Message Received
              </h3>
              <p className="text-white/70 font-body max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. We&apos;ve received your project details and will be in touch within 24 hours to schedule a discovery call.
              </p>
            </div>
            <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">
              Send Another Message
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}
