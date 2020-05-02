const selectEpisode = document.querySelector("#episode");

selectEpisode.addEventListener("change", (event) =>
  renderByEpisode(event.target.value)
);

function renderByEpisode(value) {
  const cast = filterByEpisode(data, value);
  renderCards(cast);
}
