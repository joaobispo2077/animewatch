import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Edit, Trash } from 'react-feather';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categorias';

import './index.css';

function CadastroCategoria() {
  const valoresInicias = {
    titulo: '',
    descricao: '',
    cor: '',
    link_extra: {
      text: '',
      url: '',
    },
  };
  const history = useHistory();
  const { handleChange, values, clearForm } = useForm(valoresInicias);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://anime-watch.herokuapp.com/categorias';

    fetch(URL)
      .then(async (res) => {
        const answer = await res.json();
        // eslint-disable-next-line no-console
        console.log('testing');
        setCategorias([
          ...answer,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <Link to="/">
        Ir para home
      </Link>
      <h1>
        Cadastro de Categoria:
        {' '}
        { values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([...categorias, values]);
        categoriesRepository.create({
          titulo: values.titulo,
          descricao: values.descricao,
          cor: values.color,
          link_extra: {
            text: values.text,
            url: values.url,
          },
        }).then(() => {
          console.log('Cadastrou com sucesso!');
          history.push('/');
        });

        clearForm();
      }}
      >

        <FormField
          label="Título da Categoria"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          name="color"
          type="Color"
          value={values.color}
          onChange={handleChange}
        />

        <FormField
          label="Texto extra"
          name="text"
          type="text"
          value={values.text}
          onChange={handleChange}
        />

        <FormField
          label="URL extra"
          name="url"
          type="text"
          value={values.url}
          onChange={handleChange}
        />
        <div className="buttonContainer">
          <Button as="button" onClick={(e) => {
          e.preventDefault();
          clearForm()}}>
              Limpar
          </Button>
          <Button type="submit">
            Cadastrar
          </Button>
        </div>
      </form>

      {categorias.length === 0 && <div>Loading...</div> }
      <center>
        <table class="styled-table">
          <thead>
              <tr>
                  <th>Categoria</th>
                  <th>Editar</th>
                  <th>Apagar</th>
              </tr>
          </thead>
          <tbody>
          {categorias.map((categoria) => (
            <tr key={`${categoria.titulo}`} class="active-row">
              <td>{categoria.titulo}</td>
              <td><Edit color="#F26724" size={24} /></td>
              <td><Trash color="#F26724" size={24} /></td>
            </tr>
          ))}          
          </tbody>
        </table>
      </center>
  


    </PageDefault>
  );
}

export default CadastroCategoria;
