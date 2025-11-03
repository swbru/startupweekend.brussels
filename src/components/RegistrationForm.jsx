import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "participant",
    company: "",
    experience: "",
    motivation: "",
    linkedin: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Formspree endpoint for Startup Weekend Brussels 2026
      const response = await fetch("https://formspree.io/f/xovpovor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Thank you for your interest!
        </h3>
        <p className="text-green-700 mb-4">
          We've received your pre-registration for Startup Weekend Brussels
          2026.
        </p>
        <p className="text-green-600">
          We'll keep you updated as we announce more details about the event.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Pre-Register for SW Brussels 2026
        </h3>
        <p className="text-gray-600">
          Be the first to know when registration opens and secure your spot!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            I'm interested in participating as *
          </label>
          <select
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="participant">Participant</option>
            <option value="organizer">Organizer</option>
            <option value="sponsor">Sponsor</option>
            <option value="volunteer">Volunteer/Benevolent</option>
            <option value="coach">Coach/Mentor</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourprofile"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Relevant Experience
          </label>
          <textarea
            id="experience"
            name="experience"
            rows={3}
            value={formData.experience}
            onChange={handleChange}
            placeholder="Tell us about your background in startups, tech, business, or relevant skills..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="motivation"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Why are you interested in Startup Weekend Brussels 2026?
          </label>
          <textarea
            id="motivation"
            name="motivation"
            rows={3}
            value={formData.motivation}
            onChange={handleChange}
            placeholder="What motivates you to join this event? What do you hope to achieve?"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">
            🤖 Special Focus: AI & Technology
          </h4>
          <p className="text-blue-800 text-sm">
            Startup Weekend Brussels 2026 will have a special focus on AI and
            emerging technologies. We're looking for participants passionate
            about building the future!
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Pre-Register Now"}
        </button>

        <p className="text-xs text-gray-500 text-center">
          * Required fields. We'll only use your information to contact you
          about Startup Weekend Brussels events.
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
