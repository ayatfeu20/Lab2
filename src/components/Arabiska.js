import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

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

function Arabiska(props) {
  const { category } = props;
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const fetchNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=b36fa50bbc524b4696ccb303c1d4772a`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&page=${page + 1}&apiKey=b36fa50bbc524b4696ccb303c1d4772a`;
    setPage(page + 1);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
  };

  return (
    <Container>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length < totalResults}
        loader={<h4 className="loader-text">Loading...</h4>}
        endMessage={<p className="loader-text"><b>Yay! You have seen it all</b></p>}
      >
        <div className="container my-3">
          <Row>
            {articles.map((element, index) => (
              <Column key={index}>
                <NewsItem
                  sourceName={element.source.name}
                  title={element.title}
                  desc={element.description}
                  imageURL={element.urlToImage ? element.urlToImage : ""}
                  newsUrl={element.url}
                />
              </Column>
            ))}
          </Row>
        </div>
      </InfiniteScroll>
    </Container>
  );
}

export default Arabiska;
