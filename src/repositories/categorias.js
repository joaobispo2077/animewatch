import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  // eslint-disable-next-line no-console
  console.log(config.URL_BACKEND);
  return fetch(URL_CATEGORIES)
    .then(async (res) => {
      if (res.ok) {
        const answer = await res.json();
        return answer;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

function getAllWithVideos() {
  // eslint-disable-next-line no-console
  console.log(config.URL_BACKEND);
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (res) => {
      if (res.ok) {
        const answer = await res.json();
        return answer;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

function create(category) {
  // eslint-disable-next-line no-console
  console.log(config.URL_BACKEND);
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(category),
  })
    .then(async (res) => {
      if (res.ok) {
        const answer = await res.json();
        return answer;
      }
      throw new Error('Não foi possível salvar os dados');
    });
}

export default {
  getAll,
  getAllWithVideos,
  create,
};
