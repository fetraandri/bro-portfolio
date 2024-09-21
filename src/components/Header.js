import React, { useRef, useState, useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import gsap from 'gsap'; 

const items = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Réalisation", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const $root = useRef();
  const $indicator1 = useRef();
  const $indicator2 = useRef();
  const $items = useRef(items.map(createRef));
  const [active, setActive] = useState(0);

  const animate = () => {
    const menuOffset = $root.current.getBoundingClientRect();
    const activeItem = $items.current[active].current;
    const { width, height, top, left } = activeItem.getBoundingClientRect();

    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: '#00aced', 
      ease: 'elastic.out(.7, .7)',
      duration: .8,
    };

    gsap.to($indicator1.current, { ...settings });
    gsap.to($indicator2.current, { ...settings, duration: 1 });
  };

  useEffect(() => {
    animate();
    window.addEventListener('resize', animate);

    return () => {
      window.removeEventListener('resize', animate);
    };
  }, [active]);

  return (
    <div className="main-content">

    <header className="header">
      <h1>Krotana Kely</h1>
      <div ref={$root} className="menu">
        {items.map((item, index) => (
          <Link
            key={item.name}
            ref={$items.current[index]}
            className={`item ${active === index ? 'active' : ''}`}
            onMouseEnter={() => setActive(index)}
            to={item.href}
          >
            {item.name}
          </Link>
        ))}
        <div ref={$indicator1} className="indicator" />
        <div ref={$indicator2} className="indicator" />
      </div>
    </header>
    </div>

  );
};

export default Header;
