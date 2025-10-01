
import './Header.css';
import logo from '../assets/logo.png';

export function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        <img src={logo} alt="Logo CardList" className="logo" />
        <h1>CardList</h1>
      </div>
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}
