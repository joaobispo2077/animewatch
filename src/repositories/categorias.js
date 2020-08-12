import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias?_embed=videos`;

function getAllWithVideos() {
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

export default {
  getAllWithVideos,
};
