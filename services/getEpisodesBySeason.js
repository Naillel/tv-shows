export const getEpisodesBySeason = async (id) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  const episodes = await res.json();

  const episodeList = episodes.map(episode => ({
    number: episode.number,
    season: episode.season,
    rating: episode.rating?.average ?? null
  }));

  return Object.groupBy(episodeList, (episode) => episode.season);
};