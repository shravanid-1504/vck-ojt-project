import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div className="content">
      <div className="page-container">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.
        </p>

        <h2>General Enquiries</h2>
        <p>
          <strong>Vivekanand College Main Campus</strong><br />
          Tarabai Park E Ward, Bavda Road, Kolhapur, Maharashtra 416003<br />
          India
        </p>
        <p>
          Phone: <strong>+91 12345 67890</strong><br />
          Email: <strong>info@vivekanandcollege.edu</strong><br />
          Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
        </p>

        <h2>Admissions Office</h2>
        <p>
          For all admission-related queries regarding undergraduate or postgraduate programs:<br />
          Phone: +91 98765 43210<br />
          Email: admissions@vivekanandcollege.edu
        </p>

        <h2>Student Support Services</h2>
        <p>
          For current student support, academic advising, or general assistance:<br />
          Phone: +91 87654 32109<br />
          Email: studentsupport@vivekanandcollege.edu
        </p>

        <h2>Find Us on the Map</h2>
        <p>
          {/* You can embed an iframe map here later if needed */}
          <a
            href="https://maps.google.com/?q=Vivekanand+College"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </p>

        <h2>Send Us a Message</h2>
        <p>[Hr Dpt : 8600634850]</p>
        <p>[Addmision Cell Office : 7776064850]</p>
      </div>
    </div>
  );
};

export default Contact;

