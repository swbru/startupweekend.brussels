import React, { useState } from "react";

const PreviousEditionsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "participant",
    event_year: "",
    event_details: "",
    startup_name: "",
    startup_status: "",
    photos_available: "no",
    contact_permission: "yes",
    additional_info: "",
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
      // Formspree endpoint for previous editions contributions
      const response = await fetch("https://formspree.io/f/mwpwdved", {
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
          Thank you for contributing!
        </h3>
        <p className="text-green-700 mb-4">
          We've received your information about previous Startup Weekend
          Brussels events.
        </p>
        <p className="text-green-600">
          Our team will review your submission and may reach out for additional
          details.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Share Your SW Brussels Story
        </h3>
        <p className="text-gray-600">
          Help us build a complete archive of Startup Weekend Brussels history
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name *
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

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Role in Previous SW Brussels Events *
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
              <option value="volunteer">Volunteer</option>
              <option value="mentor">Mentor/Coach</option>
              <option value="judge">Judge</option>
              <option value="sponsor">Sponsor Representative</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="event_year"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Event Year(s) or Approximate Time
            </label>
            <input
              type="text"
              id="event_year"
              name="event_year"
              value={formData.event_year}
              onChange={handleChange}
              placeholder="e.g., 2019, 2020-2022, or 'around 2018'"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="event_details"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Event Details & Memories
          </label>
          <textarea
            id="event_details"
            name="event_details"
            rows={4}
            value={formData.event_details}
            onChange={handleChange}
            placeholder="Tell us about the event(s) you attended/organized. Include venue, dates, themes, memorable moments, number of participants, etc."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="startup_name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Startup/Team Name (if applicable)
            </label>
            <input
              type="text"
              id="startup_name"
              name="startup_name"
              value={formData.startup_name}
              onChange={handleChange}
              placeholder="Name of your team or startup"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="startup_status"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Current Status (if applicable)
            </label>
            <select
              id="startup_status"
              name="startup_status"
              value={formData.startup_status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select status</option>
              <option value="still_active">Still Active</option>
              <option value="evolved">Evolved/Pivoted</option>
              <option value="acquired">Acquired</option>
              <option value="closed">Closed</option>
              <option value="joined_other">Joined Another Company</option>
              <option value="unknown">Don't Know</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="photos_available"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Do you have photos, videos, or other media to share?
          </label>
          <select
            id="photos_available"
            name="photos_available"
            value={formData.photos_available}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="no">No</option>
            <option value="yes_few">Yes, a few items</option>
            <option value="yes_many">Yes, many items</option>
            <option value="yes_professional">
              Yes, professional photos/videos
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="additional_info"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Additional Information
          </label>
          <textarea
            id="additional_info"
            name="additional_info"
            rows={3}
            value={formData.additional_info}
            onChange={handleChange}
            placeholder="Any other details, contact info for other participants, suggestions for who else we should reach out to, etc."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="contact_permission"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Can we contact you for follow-up questions?
          </label>
          <select
            id="contact_permission"
            name="contact_permission"
            value={formData.contact_permission}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="yes">Yes, feel free to contact me</option>
            <option value="email_only">Email only, no calls</option>
            <option value="no">No, please don't contact me</option>
          </select>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">
            📚 Help Us Build the Archive
          </h4>
          <p className="text-blue-800 text-sm">
            Your contribution will help create a comprehensive history of
            entrepreneurship in Brussels. All information will be used
            respectfully to celebrate our community's achievements.
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Share Your Story"}
        </button>

        <p className="text-xs text-gray-500 text-center">
          * Required fields. We respect your privacy and will only use this
          information to build our community archive.
        </p>
      </form>
    </div>
  );
};

export default PreviousEditionsForm;
