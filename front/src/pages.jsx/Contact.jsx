import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Send, User } from "lucide-react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.username.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please complete every field.");
      return;
    }
    toast.success("Message sent successfully. Thank you!");
    setIsSubmitted(true);
  };

  return (
    <section className="page-shell">
      <div className="content-shell">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-xl rounded-[2rem] border border-[var(--wash)] bg-white px-6 py-16 text-center shadow-xl"
          >
            <div
              className="mx-auto grid h-16 w-16 place-items-center rounded-full text-2xl text-white"
              style={{ background: "var(--teal)" }}
            >
              ✓
            </div>
            <p className="eyebrow mt-6">Message received</p>
            <h1 className="section-title">Thank you for reaching out.</h1>
            <p className="mt-4 text-[var(--slate)]">
              Your message has been submitted successfully.
            </p>
            <Link to="/" className="primary-button mt-8">
              <ArrowLeft size={16} /> Back to home
            </Link>
          </motion.div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
            <div
              className="rounded-[2rem] p-8 text-white"
              style={{ background: "var(--ink)" }}
            >
              <p
                className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--periwinkle)" }}
              >
                Get in touch
              </p>
              <h1 className="text-4xl font-bold leading-tight">
                Let&apos;s create something useful.
              </h1>
              <p className="mt-5 text-sm leading-7 text-white/70">
                Tell me a little about your idea, project, or challenge.
              </p>
              <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/80">
                <p className="flex items-center gap-3">
                  <Mail size={16} /> Available for new projects
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[2rem] border border-[var(--wash)] bg-white p-6 shadow-xl sm:p-8"
            >
              <h2 className="text-2xl font-bold text-[var(--ink)]">
                Send a message
              </h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <label className="block text-sm font-bold text-[var(--ink)]">
                  Name
                  <div className="mt-2 flex items-center rounded-xl border border-[var(--wash)] bg-[var(--mist)] px-3 focus-within:border-[var(--periwinkle)]">
                    <User size={18} className="text-[var(--slate)]" />
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(event) =>
                        setFormData({ ...formData, username: event.target.value })
                      }
                      placeholder="Full name"
                      className="w-full bg-transparent px-3 py-3 text-sm outline-none"
                    />
                  </div>
                </label>

                <label className="block text-sm font-bold text-[var(--ink)]">
                  Email
                  <div className="mt-2 flex items-center rounded-xl border border-[var(--wash)] bg-[var(--mist)] px-3 focus-within:border-[var(--periwinkle)]">
                    <Mail size={18} className="text-[var(--slate)]" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) =>
                        setFormData({ ...formData, email: event.target.value })
                      }
                      placeholder="Email address"
                      className="w-full bg-transparent px-3 py-3 text-sm outline-none"
                    />
                  </div>
                </label>

                <label className="block text-sm font-bold text-[var(--ink)]">
                  Message
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(event) =>
                      setFormData({ ...formData, message: event.target.value })
                    }
                    placeholder="Tell me about your project..."
                    className="mt-2 w-full resize-none rounded-xl border border-[var(--wash)] bg-[var(--mist)] px-4 py-3 text-sm outline-none focus:border-[var(--periwinkle)]"
                  />
                </label>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="primary-button w-full"
                >
                  Send message <Send size={16} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
