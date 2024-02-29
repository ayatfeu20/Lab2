import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLanguage } from '../contexts/LanguageContext';
import SearchArticle from './SearchArticle'; 
import Image from "../Images/news1.jpg";

const Container = styled.div`
  .loader-text {
    text-align: center;
  }
  
  padding-left: 20px;
  padding-right: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch; 
`;

const Column = styled.div`
  flex: 0 0 calc(33.3333% - 1rem);
  margin-bottom: 1rem;

  @media (max-width: 992px) {
    flex: 0 0 calc(50% - 1rem);
  }

  @media (max-width: 576px) {
    flex: 0 0 100%;
  }
`;

function News(props) {
  const { category } = props;
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetchNews();
  }, [language]); 

  const fetchNews = async (searchQuery = '') => {
    setLoading(true);
    setError(null);
    try {
      const url = searchQuery ?
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&language=${language}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616` :
        `https://newsapi.org/v2/top-headlines?country=${language}&category=${category}&page=${page}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
        
      const data = await fetch(url);
      const parsedData = await data.json();
      console.log(parsedData);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching news:", error); 
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${language}&category=${category}&page=${page + 1}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
      setPage(page + 1);
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleSearch = (query) => {
    fetchNews(query);
  };

  return (
    <Container>
      <SearchArticle onSearch={handleSearch} />
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length < totalResults}
        loader={<h4 className="loader-text">Loading...</h4>}
        endMessage={<p className="loader-text"><b>Thanks for your visit to our website. Hope to see you again...</b></p>}
      >
        <div className="container my-3">
          <Row>
            {articles.map((element, index) => (
              <Column key={index}>
                <NewsItem
                  sourceName={element.source.name}
                  title={element.title}
                  desc={element.description}
                  imageURL=
                  {element.urlToImage ?
                      element.urlToImage :
                      Image}
                  newsUrl={element.url}
                />
              </Column>
            ))}
          </Row>
        </div>
      </InfiniteScroll>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </Container>
  );
}

export default News;
