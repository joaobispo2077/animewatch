import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(video) {
  // eslint-disable-next-line no-console
  console.log(config.URL_BACKEND);
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
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
  create,
};
