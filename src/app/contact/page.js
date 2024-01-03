'use client'
import React,{ useRef,useState }  from 'react';
import emailjs from '@emailjs/browser';

function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const form = useRef();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your EmailJS credentials
    emailjs.sendForm('service_kumeu2p', 'template_cmp05fa', form.current, 'KYwtyPICcqlQ09Jj6')
      .then((result) => {
        console.log(result.text);
        setModalVisible(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error.text);
        // Optionally, you can add logic for failure, e.g., show an error message
      });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto bg-purple-800 p-8 rounded-md shadow-md text-black">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <label className="block mb-4">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </label>

      <label className="block mb-4">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </label>

      <label className="block mb-4">
        Subject:
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </label>

      <label className="block mb-4">
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        ></textarea>
      </label>

      <button type="submit" className="bg-blue-500  hover:bg-purple-500 text-white py-2 px-4 rounded-md">
        Send Message
      </button>

      {isModalVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-md">
            <p className="text-xl font-bold mb-4">Message Sent!</p>
            <button onClick={closeModal} className="bg-blue-500 text-white py-2 px-4 rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
    </form>
  )
}

export default Page