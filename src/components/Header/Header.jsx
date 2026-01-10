import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__name">Nathan Oines</h1>
        <nav className="header__nav">
          <a href="#projects" className="header__link">Projects</a>
          <a href="#about" className="header__link">About</a>
          <a href="#contact" className="header__link">Contact</a>
          <span className="header__divider" />
          <a
            href="https://github.com/nathanoines"
            target="_blank"
            rel="noopener noreferrer"
            className="header__link header__link--external"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nathanoines"
            target="_blank"
            rel="noopener noreferrer"
            className="header__link header__link--external"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
