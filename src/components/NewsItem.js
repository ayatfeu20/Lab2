import React from "react";
import styled from "styled-components";

const Card = styled.div`
  .card {
    margin: 1.5rem 0;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    border-radius: 0.25rem;
    overflow: hidden;
  }

  .card-img-top {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }

  .card-body {
    padding: 1.25rem;
  }

  .card-title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  .card-text {
    font-size: 1rem;
    color: #6c757d;
  }

  .source-name {
    font-size: 0.875rem;
    color: #6c757d;
    text-align: right;
  }

  .read-more-link {
    display: inline-block;
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    color: #fff;
    background-color: #007bff;
    border: 1px solid #007bff;
    border-radius: 0.25rem;
    text-decoration: none;
  }
`;

function NewsItem(props) {
	let {
		desc, title, imageURL,
		newsUrl, sourceName
	} = props;
	return (
		<Card>
      <div className="card">
        <img src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="source-name">- {sourceName}</p>
          <p className="card-text">{desc}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more-link"
          >
            Read More...
          </a>
        </div>
      </div>
    </Card>
	);
}

export default NewsItem;
