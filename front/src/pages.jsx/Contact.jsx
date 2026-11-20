import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare } from "lucide-react";


const Contact = () => {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("botcheck")) {
      setStatus("sent");
      return;
    }

    setStatus("sending");

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      console.error("Missing VITE_WEB3FORMS_KEY. Configure it in front/.env and restart Vite.");
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          subject: "Porto Folio Contact Forms Requests",
          from_name: formData.get("email"),
        }),
      });

      const responseText = await response.text();
      let result;

      try {
        result = JSON.parse(responseText);
      } catch {
        console.error("Web3Forms returned invalid JSON:", response.status, responseText);
        setStatus("error");
        return;
      }

      if (response.ok && result.success) {
        setStatus("sent");
        form.reset();
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Web3Forms request failed:", error);
      setStatus("error");
    }
  }

  return (
    <section className="page-shell">
      <div className="content-shell">
        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-xl rounded-[2rem] border border-[var(--wash)] bg-[var(--wash)] px-6 py-16 text-center shadow-xl"
          >
            <div
              className="mx-auto grid h-16 w-16 place-items-center rounded-full text-2xl text-[#14213D]"
              style={{ background: "var(--amber)" }}
            >
              ✓
            </div>
            <p className="eyebrow mt-6">Message received</p>
            <h1 className="section-title">Thank you for reaching out.</h1>
            <p className="mt-4 text-[var(--slate)]">
              Your message has been submitted successfully.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="primary-button mt-8"
            >
              Send another message <Send size={16} />
            </button>
          </motion.div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
            <div
              className="rounded-[2rem] p-8 text-[#14213D]"
              style={{ background: "var(--amber)" }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]">
                Get in touch
              </p>
              <h1 className="text-4xl font-bold leading-tight">
                Let&apos;s create something useful.
              </h1>
              <p className="mt-5 text-sm leading-7 text-[#14213D]/75">
                Tell me a little about your idea, project, or challenge.
              </p>
              <div className="mt-10 border-t border-[#14213D]/15 pt-6 text-sm text-[#14213D]/80">
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

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
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
                      name="name"
                      required
                      placeholder="Full name"
                      className="w-full bg-transparent px-3 py-3 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--slate)]"
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
                      required
                      placeholder="Email address"
                      className="w-full bg-transparent px-3 py-3 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--slate)]"
                    />
                  </div>
                </label>

                <label className="block text-sm font-bold text-[var(--ink)]">
                  Message
                  <div className="mt-2 rounded-xl border border-[var(--wash)] bg-[var(--mist)] px-3 focus-within:border-[var(--amber)]">
                    <MessageSquare size={18} className="mt-3 text-[var(--slate)]" />
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project..."
                      className="w-full resize-none bg-transparent px-1 py-3 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--slate)]"
                    />
                  </div>
                </label>

                {status === "error" && (
                  <p role="alert" className="text-sm font-semibold text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}

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

export default Contact;