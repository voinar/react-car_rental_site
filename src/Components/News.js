import newsData from "../data/data.json";

// import CardThumbnail1 from "../img/news-cards/card-thumbnail-1.jpg";
// import CardThumbnail2 from "../img/news-cards/card-thumbnail-2.jpg";
// import CardThumbnail3 from "../img/news-cards/card-thumbnail-3.jpg";

const News = () => {
  return (
    <section
      id="section__news"
      className="flex flex-column gap-4 p-16 w-[1200px] h-[800px] bg-[#fafdf9] text-green-900 place-items-center"
    >
      {newsData.news.map((newsItem, index) => {
        return (
          <div className="section__news__card w-1/3 text-green-100">
            <div className="section__news__card--top">
              <img
                className="rounded-tl-md rounded-tr-md"
                src={newsItem.image}
                // src={require("../img/news-cards/card-thumbnail-1.jpg")}
                // src={"../news-cards/card-thumbnail-1.jpg"}
                // src={require(newsItem.image)}
              />
            </div>
            <div className="section__news__card--copy p-4 h-[300px]">
              <h3 className="text-xl font-semibold mt-4">{newsItem.title}</h3>
              <p className="text-md mt-4">{newsItem.paragraph}</p>
              <div className="section__news__card--link pt-4">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <a href="http://">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default News;
