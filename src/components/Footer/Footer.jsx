import './Footer.scss';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          &copy; {currentYear} Nathan Oines. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
