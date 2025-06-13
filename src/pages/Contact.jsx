import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">Contact Us</h2>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-4 text-center text-gray-800">
        <h3 className="text-xl font-semibold">Pon Crackers Shop</h3>
        <p>
          No:136, Velachery Rd, MGR Nagar,
          <br /> Pallikaranai, Chennai, Tamil Nadu 600100
        </p>
        <p>
          📞{" "}
          <a
            href="tel:+919884609789"
            className="text-blue-600 hover:underline"
          >
            +91 98846 09789
          </a>
        </p>
      </div>

      {/* Map with exact location and red pin */}
      <div className="mt-8 space-y-4">
        <iframe
          title="Pon Crackers Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.530730618973!2d80.1973293!3d12.9254511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c235e5d0415%3A0xf89b211470a97d26!2sSTANDARD%20FIREWORKS%20CRACKERS%20PON%20STORE!5e0!3m2!1sen!2sin!4v1718269400000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl shadow-lg"
        />

        {/* Get Directions Button */}
        <div className="text-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=STANDARD+FIREWORKS+CRACKERS+PON+STORE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Get Directions on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
