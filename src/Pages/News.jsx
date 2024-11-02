import { useState, useContext } from "react";
import ShowContext from "../context/ShowContext";
import NewsCard from "../Component/NewsCard";
import Header from "../Component/Header"
function News() {
  const { siteData } = useContext(ShowContext);
  const data = siteData?.newsEvents || { news: [], announcement: [] };
  // console.log("data at news:", data);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all"); 

  const filteredAnnouncements = data.announcement.filter((announcement) =>
    announcement.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNews = data.news.filter((news) =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render announcements based on search and category
  const renderAnnouncements = () => (
    <div>
      <h2 className="font-bold text-xl">Announcements</h2>
      <div className="flex flex-wrap justify-center gap-10 p-10">

      {filteredAnnouncements.length ? (
        filteredAnnouncements.map((announcement, index) => (
          <NewsCard key={index} title={announcement.title} image={announcement.url} dates={announcement.date}/>
        ))
      ) : (
        <p>No announcements found.</p>
      )}
      </div>
    </div>
  );

  // Render news based on search and category
  const renderNews = () => (
    <div>
      <h2 className="font-bold text-xl">News</h2>
      <div className="flex flex-wrap justify-center gap-5 p-10">

      {filteredNews.length ? (
        filteredNews.map((news, index) => (
          <NewsCard key={index} title={news.title} image={news.image} dates={news.date}/>

        ))
      ) : (
        <p>No news found.</p>
      )}
      </div>
    </div>
  );

  return (
    <main className="w-full ">
    <Header title="Our News" page="News"/>
    <div className="w-full md:mt-0 mt-10 justify-center flex">

    <div className=" w-full px-5 md:px-0 md:w-3/4">
    {/* for news header */}
    <div className="flex justify-between flex-wrap gap-5 md:gap-0 mb-10">
    <div>
      <h5 className="font-bold text-xl">Search by Keyword</h5>
      <input
        type="text"
        placeholder="Search announcements or news..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="md:w-80 w-full border-gray-700 border px-5 py-3 rounded-xl"
      />
    </div>

      {/* Category selector */}
      <div>
        <h5 className="font-bold text-xl"> By Catogries</h5>
      <div className="flex gap-5 md:gap-10">
        <button onClick={() => setSelectedCategory("all")}>All</button>
        <button onClick={() => setSelectedCategory("announcement")}>Announcements</button>
        <button onClick={() => setSelectedCategory("news")}>News</button>
      </div>
      </div>
      {/* Conditionally render announcements or news based on category */}
    </div>
      {(selectedCategory === "all" || selectedCategory === "announcement") && renderAnnouncements()}
      {(selectedCategory === "all" || selectedCategory === "news") && renderNews()}
    </div>
    </div>


    </main>
  );
}

export default News;
