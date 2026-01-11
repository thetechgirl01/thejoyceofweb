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
      
      {/* HERO - KEPT AS REQUESTED */}
      <header className="flex flex-col lg:flex-row justify-between gap-8 mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-xl">
          Let's Build Something Amazing
        </h1>

        <div className="w-24 h-24 rounded-full bg-yellow-500 flex items-center justify-center">
          <FaRegEnvelope className="text-black text-3xl" />
        </div>
      </header>

      {/* MAIN CONTENT WITH FORM AND IMAGE */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* FORM CONTAINER */}
        <div className="lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900/40 border border-gray-700 rounded-3xl p-8"
          >
            {/* STEP INDICATOR WITH LABELS */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-400">Step {step} of 3</div>
                <div className="text-yellow-400 font-medium">
                  {step === 1 && "Basic Info"}
                  {step === 2 && "Contact Details"}
                  {step === 3 && "Project Details"}
                </div>
              </div>
              
              <div className="flex gap-3">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className={`flex-1 h-2 rounded-full ${
                      step >= n ? "bg-yellow-400" : "bg-gray-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">
                    What's your name?
                  </label>
                  <div className="relative">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl text-xl py-5 px-6 focus:outline-none focus:border-yellow-400 transition-colors"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={nextStep}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center hover:bg-yellow-400 transition-colors"
                    >
                      <HiArrowRight className="text-xl" />
                    </button>
                  </div>
                </div>
                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">
                    What's your email address?
                  </label>
                  <div className="relative">
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      type="email"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl text-xl py-5 px-6 focus:outline-none focus:border-yellow-400 transition-colors"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={nextStep}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center hover:bg-yellow-400 transition-colors"
                    >
                      <HiArrowRight className="text-xl" />
                    </button>
                  </div>
                </div>
                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">
                    Project type
                  </label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-4 px-6 focus:outline-none focus:border-yellow-400 transition-colors appearance-none"
                  >
                    <option value="" className="bg-gray-900">Select project type</option>
                    <option value="Website Design" className="bg-gray-900">Website Design</option>
                    <option value="Web Development" className="bg-gray-900">Web Development</option>
                    <option value="E-commerce" className="bg-gray-900">E-commerce</option>
                    <option value="Web App" className="bg-gray-900">Web App</option>
                    <option value="Redesign" className="bg-gray-900">Redesign</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">
                      Budget range
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-4 px-6 focus:outline-none focus:border-yellow-400 transition-colors appearance-none"
                    >
                      <option value="" className="bg-gray-900">Select budget</option>
                      <option value="$500 – $1,000" className="bg-gray-900">$500 – $1,000</option>
                      <option value="$1,000 – $3,000" className="bg-gray-900">$1,000 – $3,000</option>
                      <option value="$3,000 – $5,000" className="bg-gray-900">$3,000 – $5,000</option>
                      <option value="$5,000+" className="bg-gray-900">$5,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-4 px-6 focus:outline-none focus:border-yellow-400 transition-colors appearance-none"
                    >
                      <option value="" className="bg-gray-900">Select timeline</option>
                      <option value="ASAP" className="bg-gray-900">ASAP</option>
                      <option value="1–2 weeks" className="bg-gray-900">1–2 weeks</option>
                      <option value="1 month" className="bg-gray-900">1 month</option>
                      <option value="Flexible" className="bg-gray-900">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 text-sm">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project goals, requirements, and any specific details..."
                    rows={5}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-4 px-6 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <div className="flex justify-between items-center pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <HiArrowRight className="rotate-180" /> Back
                  </button>

                  <button
                    type="submit"
                    className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2"
                  >
                    Send Message <HiArrowRight />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="lg:w-1/2 lg:sticky lg:top-8">
          <div className="bg-gray-900/40 border border-gray-700 rounded-3xl p-8 h-full flex flex-col">
            {/* PLACEHOLDER FOR Crowntech IMAGE */}
            <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center mb-8 overflow-hidden">
              <div className="text-center p-8">
                <div className="text-4xl font-bold text-yellow-400 mb-4">Crowntech</div>
                <div className="text-gray-400 text-lg">Your Technology Partner</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-t border-gray-700 pt-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose Crowntech?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expert team with 10+ years experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>End-to-end project delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transparent communication & pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Post-launch support & maintenance</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-700 pt-8">
                <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-bold">1</div>
                    <div>
                      <div className="font-medium">Initial Consultation</div>
                      <div className="text-sm text-gray-400">We'll schedule a call to discuss your project</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 font-bold">2</div>
                    <div>
                      <div className="font-medium">Proposal & Quote</div>
                      <div className="text-sm text-gray-400">Detailed project proposal with timeline & cost</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 font-bold">3</div>
                    <div>
                      <div className="font-medium">Project Kickoff</div>
                      <div className="text-sm text-gray-400">We start building your amazing project</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;