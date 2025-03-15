import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for your feedback");

    // Clear the form data after submission
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#E9E9E9] py-16 flex flex-col items-center">
      <h2 className="text-black mb-8 text-3xl md:text-7xl font-bold">
        Send An Email
      </h2>
      <form className="w-full max-w-5xl px-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            required
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            placeholder="Subject"
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            placeholder="Message"
            required
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded"
            rows="6"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-black text-white py-4 px-8 text-lg rounded font-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
