import NewsCard from "./NewsCard";

export default function News() {
  return (
    <div className="mt-4">
      <h3>News</h3>
      <div className="overflow-scroll sm:scrollbar-hide">
        <div className="flex">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  )
}