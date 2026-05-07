import { getShowById }       from "./services/getShowById.js";
import { getEpisodesBySeason } from "./services/getEpisodesBySeason.js";
import { searchShows }       from "./services/searchShows.js";
import { renderHeader }      from "./render/renderHeader.js";
import { renderEpisodes }    from "./render/renderEpisodes.js";
import { renderSearchResults } from "./render/renderSearchResults.js";

const DEFAULT_ID = "2993";

// ── Carga y renderiza una serie por ID ───────────────────────────────────────

const loadShow = async (id) => {
  const [show, seasons] = await Promise.all([
    getShowById(id),
    getEpisodesBySeason(id)
  ]);

  renderHeader(show);
  renderEpisodes(seasons);
};

// ── Buscador ─────────────────────────────────────────────────────────────────

const $form  = document.querySelector(".search-form");
const $input = document.querySelector(".search-input");

$form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = $input.value.trim();
  if (!query) return;

  const results = await searchShows(query);

  renderSearchResults(results, (id) => {
    $input.value = "";
    loadShow(id);
  });
});

// Cierra el dropdown al hacer click fuera
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-form")) {
    document.querySelector(".search-results")?.remove();
  }
});

// ── Carga inicial ─────────────────────────────────────────────────────────────

loadShow(DEFAULT_ID);