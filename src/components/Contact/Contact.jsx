import './Contact.scss';

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__description">
          I'm always interested in new opportunities and collaborations. Feel free to reach&nbsp;out!
        </p>
        <div className="contact__links">
          <a
            href="mailto:noines31@gmail.com"
            className="contact__link contact__link--primary"
          >
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/nathanoines"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/nathanoines"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
