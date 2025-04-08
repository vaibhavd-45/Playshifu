import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaLock,
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";

const Footer = () => {
  const companyStats = [
    { value: "2M+", label: "Parents & Educators" },
    { value: "35+", label: "Countries & Counting" },
    { value: "20+", label: "Educational Toys" },
    { value: "4.8", label: "App Rating" },
  ];

  const footerLinks = {
    shop: [
      "Problem Solving Toys",
      "STEM Toys",
      "Social & Emotional Development Toys",
      "Birthday Gift Toys",
      "Best Seller Toys",
    ],
    more: [
      "Device Compatibility",
      "Free E-Books",
      "Parent Hub",
      "Blogs",
      "About Us",
    ],
    support: [
      "Contact Us",
      "Return Policy",
      "Privacy Policy",
      "Terms & Conditions",
      "FAQs",
    ],
  };

  const socialMediaLinks = [
    { platform: "facebook", url: "https://www.facebook.com/playshifu/" },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/company/playshifu/?originalSubdomain=in",
    },
    { platform: "instagram", url: "https://www.instagram.com/playshifu/" },
    { platform: "youtube", url: "https://www.youtube.com/playshifu" },
  ];

  const paymentMethods = [
    {
      name: "Apple Pay",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fapplepay.webp&w=3840&q=75",
    },
    {
      name: "Visa",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fmastercard.webp&w=3840&q=75",
    },
    {
      name: "Mastercard",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fvisa.webp&w=3840&q=75",
    },
    {
      name: "Google Pay",
      image:
        "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fgpay.webp&w=3840&q=75",
    },
  ];

  const benefitItems = [
    { icon: <FaTruck />, text: "Free Shipping" },
    { icon: <FaUndo />, text: "30 Days Return" },
    { icon: <FaShieldAlt />, text: "6 Months Warranty" },
    { icon: <FaLock />, text: "Secure Checkout" },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-stats">
            {companyStats.map((stat, index) => (
              <div key={index} className="footer-stat">
                <div className="footer-stat-number">{stat.value}</div>
                <div className="footer-stat-text">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="footer-divider"></div>

          <div className="footer-benefits">
            {benefitItems.map((item, index) => (
              <div key={index} className="footer-benefit">
                <div className="footer-benefit-icon">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="footer-divider"></div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Shop</h4>
              <ul>
                {footerLinks.shop.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>More</h4>
              <ul>
                {footerLinks.more.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <div className="footer-subscribe">
                <h4>Join our community</h4>
                <p>
                  Get notified of new launches, product updates, contests, and
                  more exciting news!
                </p>
                <div className="footer-subscribe-form">
                  <input
                    type="email"
                    className="footer-subscribe-input"
                    placeholder="Enter your email address"
                  />
                  <button className="footer-subscribe-button">Subscribe</button>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-social">
              {socialMediaLinks.map((social, index) => (
                <a key={index} href={social.url} className="footer-social-icon">
                  {social.platform === "facebook" ? (
                    <FaFacebook />
                  ) : social.platform === "linkedin" ? (
                    <FaLinkedin />
                  ) : social.platform === "instagram" ? (
                    <FaInstagram />
                  ) : social.platform === "youtube" ? (
                    <FaYoutube />
                  ) : null}
                </a>
              ))}
            </div>

            <div className="footer-payment">
              {paymentMethods.map((method, index) => (
                <img
                  key={index}
                  src={method.image || "/placeholder.svg"}
                  alt={method.name}
                  className="footer-payment-icon"
                />
              ))}
            </div>

            <div className="footer-copyright">
              © {new Date().getFullYear()} PlayShifu. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <div className="whatsapp-float">
        <FaWhatsapp />
      </div>
    </>
  );
};

export default Footer;
