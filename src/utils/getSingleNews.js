const getSingleNews = async (newsId) => {
  const res = await fetch(
    `https://the-news-portal-server.vercel.app/news/${newsId}`,
    { cache: 'no-store' }
  );
  return res.json();
};

export default getSingleNews;
