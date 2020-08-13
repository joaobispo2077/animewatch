import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo_animewatch.png';
import Button from '../Button';

import './Menu.css';

const Menu = () => (
  <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={Logo} alt="AnimeWatch Logomarca" />
    </Link>
    <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo vídeo
    </Button>
  </nav>

);

export default Menu;
