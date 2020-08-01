import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  
  const [categorias, setCategorias] = useState(['Teste']);

  const valoresInicias = {
    nome: 'Edits',
    descricao: 'desc init',
    cor: '#f4f4'
  }

  const [values, setValues] = useState(valoresInicias);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value
    })
  }

  function handleChange(event){
    setValue(event.target.getAttribute('name'), 
    event.target.value
    );
  }

    return(
        <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
  
        <form style={{background: values.cor}} onSubmit={function handleSubmit(event){
          event.preventDefault();
          setCategorias([...categorias, values])
        }}>
          <div>
              <label>
                Nome da Categoria:
                <input
                  type="text"
                  value={values.nome}
                  name="nome"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div>
              <label>
                Descrição:
                <textarea
                  type="textarea"
                  value={values.descricao}
                  name="descricao"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div>
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