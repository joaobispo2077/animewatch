import React, { useEffect, useState } from 'react';

// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        // eslint-disable-next-line no-console
        console.log(categoriesWithVideos);
        setDadosIniciais(categoriesWithVideos);
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
    <>
      {dadosIniciais.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Compartilhe com a comunidade seus edits, memes, soundtracks, lo-fi versions, episódios, trailers e muito mais que você gostar sobre animes!"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={dadosIniciais[index]}
          />
        );
      })}
    </>
      {/* <BannerMain
            videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
            url={dadosIniciais.categorias[0].videos[0].url}
            videoDescription="Compartilhe com a comunidade seus edits, memes, soundtracks, lo-fi versions, episódios, trailers e muito mais que você gostar sobre animes!"
          />

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
          /> */}

    </PageDefault>

  );
}

export default Home;
