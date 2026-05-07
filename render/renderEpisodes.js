const getRatingClass = (rating) => {
  if (!rating) return "rating-none";
  if (rating >= 8) return "rating-high";
  if (rating >= 6) return "rating-mid";
  return "rating-low";
};

const createEpisodeHTML = (episode) =>
  `<div
    class="episode episode-${episode.number} ${getRatingClass(episode.rating)}"
    title="E${episode.number} · ${episode.rating ?? "N/A"}"
  >${episode.number}</div>`;

const createSeasonHTML = (data, number) =>
  `<article class="season">
    <header class="season-header">T${String(number).padStart(2, "0")}</header>
    ${data.map(createEpisodeHTML).join("")}
  </article>`;

export const renderEpisodes = (seasons) => {
  const $episodes = document.querySelector(".episodes");
  const list = Object.values(seasons).map((season, index) =>
    createSeasonHTML(season, index + 1)
  );
  $episodes.setHTMLUnsafe(list.join(""));
};