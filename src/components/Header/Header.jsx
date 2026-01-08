import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__name">Nathan Oines</h1>
        <nav className="header__nav">
          <a
            href="https://github.com/nathanoines"
            target="_blank"
            rel="noopener noreferrer"
            className="header__link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nathanoines"
            target="_blank"
            rel="noopener noreferrer"
            className="header__link"
          >
            LinkedIn
          </a>
          <a
            href="mailto:noines31@gmail.com"
            className="header__link"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
