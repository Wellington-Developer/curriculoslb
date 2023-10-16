// React Hooks
import { useState, useEffect } from 'react';

// React Icons
import { HiMenuAlt3 } from 'react-icons/hi';

// Styles
import './styles.css';

export const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [ modalActive, setModalActive ] = useState(false)

  const handleModalActive = () => {
    setModalActive(!modalActive)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header-container ${scrolling ? 'scrolled' : ''}`}>
      <div className="section-logo__header">
        <h1>Curriculos</h1>
      </div>

      <nav className="section-menu__header">
        <ul className={ modalActive ? 'active' : '' }>
          <li><a href="#">O que fazemos</a></li>
          <li><a href="#">Depoimentos</a></li>
          <li><a href="#">Perguntas Frequentes</a></li>
        </ul>

        <div className="section-icon__header" onClick={ handleModalActive }>
          <HiMenuAlt3 />        
        </div>
      </nav>
    </header>
  )
}