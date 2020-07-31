import React from 'react';
import Logo from '../../assets/img/logo_animewatch.png'
import ButtonLink from '../Menu/components/ButtonLink'
import Button from '../Button'

import './Menu.css'


const Menu = () => {
return(
    <nav className="Menu">
        <a href="/">
         <img className="Logo" src={Logo} alt="AnimeWatch Logomarca"/>
        </a>
        <Button as="a" className="ButtonLink" href="">
            Novo vídeo
        </Button>
    </nav>

    



)};

export default Menu;