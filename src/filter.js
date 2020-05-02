const filterByStatus = (personagens, status) =>
  personagens.filter((p) => p.status === status);

const filterByGender = (personagens, gender) =>
  personagens.filter((p) => p.gender === gender);

const filterByEpisode = (personagens, episodio) => {
  episodeCast = personagens.reduce((response, p) => {
    const episodeUrl = `https://rickandmortyapi.com/api/episode/${episodio}`;
    if (p.episode.includes(episodeUrl)) {
      response.push(p);
    }
    return response;
  }, []);
  return episodeCast;
};

// module.exports = {
//   filterByStatus,
//   filterByGender,
//   filterByEpisode,
// };
