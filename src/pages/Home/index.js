import React from 'react';
import Menu from '../../components/Menu'

import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';




function Home() {
  return (

    <div>
      <div>
        <Menu />
      </div>
            <div style={{ background: "#141414" }}>
            <Menu />
      
            <BannerMain
              videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
              url={dadosIniciais.categorias[0].videos[0].url}
              videoDescription={"Compartilhe com a comunidade seus edits, memes, soundtracks, lo-fi versions, episódios, trailers e muito mais que você gostar sobre animes!"}/>
      
            <Carousel
              ignoreFirstVideo
              category={dadosIniciais.categorias[0]}
            />
      
            <Carousel
              category={dadosIniciais.categorias[1]}
            />
      
            <Carousel
              category={dadosIniciais.categorias[2]}
            />      
      
            <Carousel
              category={dadosIniciais.categorias[3]}
            />      
      
            <Carousel
              category={dadosIniciais.categorias[4]}
            />      
      
            <Carousel
              category={dadosIniciais.categorias[5]}
            />      
            <Carousel
              category={dadosIniciais.categorias[6]}
            />      
            <Carousel
              category={dadosIniciais.categorias[7]}
            />   
      
            <Footer />
          </div>
    </div>
     
  );
}

export default Home;
