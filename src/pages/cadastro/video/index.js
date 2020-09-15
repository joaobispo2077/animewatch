import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categorias';

import './index.css';

function CadastroVideo() {
  const history = useHistory();

  const [categorias, setCategorias] = useState([]);

  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { handleChange, values, clearForm } = useForm({
    titulo: '',
    url: '',
    categoria: '',

  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);
  // eslint-disable-next-line no-console
  return (
    <PageDefault>
      <div className="intro">
        <Button  as={Link} to="/cadastro/categoria">
              Cadastrar Categoria
          </Button>
      </div>
        <h1>Cadastro de Vídeo</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        // eslint-disable-next-line max-len
        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            alert('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do vídeo"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          type="text"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          type="text"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <div className="buttonContainer">
         <Button as="button" onClick={(e) => {
           e.preventDefault();
           clearForm();
         }}>
            Limpar
          </Button>
          <Button as="button" type="submit">
            Cadastrar Vídeo
          </Button>
        </div>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;
