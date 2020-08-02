export default async function getNews(pageNumber) {
  return await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe&page=${pageNumber}`
  );
}