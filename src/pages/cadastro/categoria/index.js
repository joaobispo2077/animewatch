import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: ''
  }
  
  
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresInicias);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleChange(event){
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

    return(
        <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
  
        <form onSubmit={function handleSubmit(event){
          event.preventDefault();
          setCategorias([...categorias, values]);


          setValues(valoresInicias);
        }}>

          <FormField
            label="Nome da Categoria"
            name="nome"
            type="text"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            name="descricao"
            type="text"
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



            {/* <div>
            <label>
                Cor:
                <input
                  type="color"
                  value={values.cor}
                  name="cor"
                  onChange={handleChange}
                />
              </label>
            </div>
             */}
          
  
          <button>
            Cadastrar
          </button>
        </form>
        <ul>
          {categorias.map((categoria, index) => {
            return(
              <li key={`${categoria}${index}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>
  
  
        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;