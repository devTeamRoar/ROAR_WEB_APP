"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const serviceTypes = [
    "Full Growth Partner Framework",
    "DEVINT - Technology & Development",
    "IRIS STUDIO - Film Production & Creative",
    "BIONIC MEDIA - Brand Management & Marketing",
    "General Inquiry",
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim())
      newErrors.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (formData.phone && !/^\+?[0-9\s-]{7,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number.";

    if (!formData.serviceType)
      newErrors.serviceType = "Please select a service.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://roar-api-staging-d6cbeegkg4dcd4h0.centralindia-01.azurewebsites.net/api/Contact/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            serviceInterest: formData.serviceType,
            message: formData.message,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-stone-200 pt-20 md:pt-36 mt-24 md:mt-36 pb-48 relative mx-4 sm:mx-4 md:mx-20 lg:mx-48 rounded-3xl z-30">
      <div className="max-w-full px-4 md:px-8">
        <div className="mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-4 uppercase flex justify-center items-center">
            Get In Touch
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-3"
        >
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 p-6 bg-stone-800 border border-stone-700 rounded-lg flex items-center space-x-4"
            >
              <CheckCircle className="h-6 w-6 text-stone-300" />
              <div>
                <h3 className="text-stone-200 font-semibold">
                  Message Sent Successfully!
                </h3>
                <p className="text-stone-400 text-sm">
                  Our team will reach out to you within 24 hours.
                </p>
              </div>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 p-6 bg-stone-800 border border-stone-700 rounded-lg flex items-center space-x-4"
            >
              <AlertCircle className="h-6 w-6 text-stone-300" />
              <div>
                <h3 className="text-stone-200 font-semibold">
                  Error Sending Message
                </h3>
                <p className="text-stone-400 text-sm">
                  Please try again or contact us directly.
                </p>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-stone-800 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-500 focus:border-stone-600 focus:ring-1 focus:ring-stone-600 transition-colors"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-800 mb-3">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-500 focus:border-stone-600 focus:ring-1 focus:ring-stone-600 transition-colors"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-stone-800 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-500 focus:border-stone-600 focus:ring-1 focus:ring-stone-600 transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-800 mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-500 focus:border-stone-600 focus:ring-1 focus:ring-stone-600 transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-2">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-800 mb-3">
                Service Interest *
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-white border border-stone-300 rounded-lg text-stone-900 focus:border-stone-600 focus:ring-1 focus:ring-stone-600 transition-colors"
              >
                <option value="">Select a service</option>
                {serviceTypes.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.serviceType && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.serviceType}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-800 mb-3">
                Message *
              </label>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-500 focus:border-stone-600 focus:ring-1 focus:ring-stone-600 transition-colors resize-none"
                placeholder="Tell us about your project, goals, and how we can help..."
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-2">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-stone-800 hover:bg-stone-900 text-white px-8 py-4 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transition-colors"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
