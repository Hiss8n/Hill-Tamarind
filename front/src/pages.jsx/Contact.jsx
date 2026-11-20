import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Send, User } from "lucide-react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!formData.username.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please complete every field.");
      return;
    }

    if (!formRef.current) return;

    const honeypot = formRef.current.elements.namedItem("website")?.value;
    if (honeypot) {
      setIsSubmitted(true);
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      setStatus("sent");
      setIsSubmitted(true);
      setFormData({ username: "", email: "", message: "" });
      formRef.current.reset();
      toast.success("Message sent successfully. Thank you!");
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus("error");
      toast.error("Message could not be sent. Please try again.");
    }
  }

  return (
    <section className="page-shell">
      <div className="content-shell">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-xl rounded-[2rem] border border-[var(--wash)] bg-[var(--wash)] px-6 py-16 text-center shadow-xl"
          >
            <div
              className="mx-auto grid h-16 w-16 place-items-center rounded-full text-2xl text-white"
              style={{ background: "var(--amber)" }}
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
              className="rounded-[2rem] p-8 text-[var(--ink)]"
              style={{ background: "var(--amber)" }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink)]">
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
              className="rounded-[2rem] border border-[var(--wash)] bg-[var(--wash)] p-6 shadow-xl sm:p-8"
            >
              <h2 className="text-2xl font-bold text-[var(--ink)]">
                Send a message
              </h2>
              <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5">
                <input
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <label className="block text-sm font-bold text-[var(--ink)]">
                  Name
                  <div className="mt-2 flex items-center rounded-xl border border-[var(--wash)] bg-[var(--mist)] px-3 focus-within:border-[var(--amber)]">
                    <User size={18} className="text-[var(--slate)]" />
                    <input
                      type="text"
                      name="username"
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
                  <div className="mt-2 flex items-center rounded-xl border border-[var(--wash)] bg-[var(--mist)] px-3 focus-within:border-[var(--amber)]">
                    <Mail size={18} className="text-[var(--slate)]" />
                    <input
                      type="email"
                      name="email"
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
                    name="message"
                    value={formData.message}
                    onChange={(event) =>
                      setFormData({ ...formData, message: event.target.value })
                    }
                    placeholder="Tell me about your project..."
                    className="mt-2 w-full resize-none rounded-xl border border-[var(--wash)] bg-[var(--mist)] px-4 py-3 text-sm outline-none focus:border-[var(--amber)]"
                  />
                </label>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "sending"}
                  className="primary-button w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Sending..." : <>Send message <Send size={16} /></>}
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
