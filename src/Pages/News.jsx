import  { useState, useEffect } from 'react';
import { newsdetails } from '../Data/NewsData';
function News() {
  const [newsData, setNewsData] = useState(newsdetails); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredNews, setFilteredNews] = useState(newsdetails); 
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1); 
  const newsPerPage = 5; 
 

  useEffect(() => {
    const filter = newsData.filter(news => 
      (news.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (category === 'All' || news.category === category)
    );
    setFilteredNews(filter);
    setCurrentPage(1); 
  }, [searchTerm, category, newsData]);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredNews.length / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='w-full mt-10'>
      <input 
        type="text" 
        placeholder="Search news..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Sports">Sports</option>
        <option value="Technology">Technology</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      {/* <div>
        {currentNews.map(news => (
          <div key={news.id} className="news-card">
            <h2>{news.title}</h2>
            <p>{news.summary}</p>
            <span>{news.category}</span>
          </div>
        ))}
      </div> */}

      {/* Pagination */}
      <div className="pagination">
        {pageNumbers.map(number => (
          <button 
            key={number} 
            onClick={() => paginate(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default News;
