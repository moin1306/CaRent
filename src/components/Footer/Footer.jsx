import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Rent a Car</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Our Blogs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Booking Guide</li>
            <li>Account Settings</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/moin-khan-5b8740229" target="_blank">Linkdin</a></li>
            <li>khanmoin1306@gmail.com</li>
            <li>street 12, Khajrana, Indore</li>
          </ul>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <p>CaRent &copy; 2024</p>
        
      </div>
    </footer>
  );
};
