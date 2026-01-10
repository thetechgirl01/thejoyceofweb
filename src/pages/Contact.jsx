// src/pages/Contact.jsx
import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step === 1 && !form.name.trim()) return setError("Enter your name");
    if (
      step === 2 &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    )
      return setError("Enter a valid email");

    setError("");
    setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.projectType ||
      !form.budget ||
      !form.timeline ||
      !form.message.trim()
    ) {
      setError("Please complete all fields");
      return;
    }

    setError("");

    /** 🔹 UNIVERSAL MESSAGE FORMAT 🔹 */
    const formattedMessage = `
NEW CONTACT FORM SUBMISSION

Name: ${form.name}
Email: ${form.email}

Project Type: ${form.projectType}
Budget: ${form.budget}
Timeline: ${form.timeline}

Message:
${form.message}
    `;

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", formattedMessage);

    /**
     * 🔴 CHANGE THIS ENDPOINT ONLY
     * Works with:
     * - Formspree
     * - Mailchimp webhook
     * - EmailJS backend
     * - Your own API
     */
    await fetch("https://example.com/your-endpoint", {
      method: "POST",
      body: formData,
    });

    alert("Message sent successfully!");
    setStep(1);
    setForm({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen py-16 px-4 max-w-7xl mx-auto text-white">
      
      {/* HERO */}
      <header className="flex flex-col lg:flex-row justify-between gap-8 mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-xl">
          Let’s Build Something Amazing
        </h1>

        <div className="w-24 h-24 rounded-full bg-yellow-500 flex items-center justify-center">
          <FaRegEnvelope className="text-black text-3xl" />
        </div>
      </header>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900/40 border border-gray-700 rounded-3xl p-8 max-w-3xl"
      >
        {/* STEP INDICATOR */}
        <div className="flex justify-center mb-8 gap-4">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`w-10 h-10 flex items-center justify-center rounded-md border-2 ${
                step >= n
                  ? "border-yellow-400 text-yellow-400"
                  : "border-gray-600 text-gray-500"
              }`}
            >
              {n}
            </div>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="relative">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-transparent border-b-2 border-gray-600 text-3xl py-4 focus:outline-none"
            />
            <button
              type="button"
              onClick={nextStep}
              className="absolute right-0 top-4 w-12 h-12 rounded-full border flex items-center justify-center"
            >
              <HiArrowRight />
            </button>
            {error && <p className="text-red-400 mt-2">{error}</p>}
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="relative">
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full bg-transparent border-b-2 border-gray-600 text-3xl py-4 focus:outline-none"
            />
            <button
              type="button"
              onClick={nextStep}
              className="absolute right-0 top-4 w-12 h-12 rounded-full border flex items-center justify-center"
            >
              <HiArrowRight />
            </button>
            {error && <p className="text-red-400 mt-2">{error}</p>}
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-6">
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-gray-600 py-3"
            >
              <option value="">Project type</option>
              <option>Website Design</option>
              <option>Web Development</option>
              <option>E-commerce</option>
              <option>Web App</option>
              <option>Redesign</option>
            </select>

            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-gray-600 py-3"
            >
              <option value="">Budget range</option>
              <option>$500 – $1,000</option>
              <option>$1,000 – $3,000</option>
              <option>$3,000 – $5,000</option>
              <option>$5,000+</option>
            </select>

            <select
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-gray-600 py-3"
            >
              <option value="">Timeline</option>
              <option>ASAP</option>
              <option>1–2 weeks</option>
              <option>1 month</option>
              <option>Flexible</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              rows={4}
              className="w-full bg-transparent border-b-2 border-gray-600 py-3 resize-none"
            />

            {error && <p className="text-red-400">{error}</p>}

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-gray-400"
              >
                ← Back
              </button>

              <button
                type="submit"
                className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold"
              >
                Send Message
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
