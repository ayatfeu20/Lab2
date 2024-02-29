import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img from '../Images/currency.jpg';
import { FaDollarSign, FaEuroSign } from 'react-icons/fa';

const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 140px;
  padding-left: 140px;
  background-image: url(${img});
`;

const Heading = styled.h2`
  margin-top: 0;
  font-size: 1 rem;
  color: #f1c232;
`;

const RateContainer = styled.div`
  margin-bottom: 0px;
  color: #f1c232;
`;

const CurrencyText = styled.span`
  font-weight: bold;
  color: #f1c232;
  margin-left:10px;
`;


const CurrencyRate = () => {
  const [currencyRates, setCurrencyRates] = useState(null);
  const [error, setError] = useState(null);

  const fetchCurrencyRates = async () => {
    try {
      console.log('Fetching currency rates...');
      const response = await fetch(
        'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_MvnYfYSu8kfVhI1ix31U6BHKXPS6H5ARCjP9TVlE&currencies=EUR%2CUSD%2CCAD&base_currency=SEK',
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`,
        );
      }
      const data = await response.json();
      console.log('API Response:', data);
      setCurrencyRates(data.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching currency rates:', error);
      setError('Error fetching currency rates. Please try again later.');
    }
  };

  useEffect(() => {
    fetchCurrencyRates();
  }, []);

  return (
    <Card>
      <Heading>Currency Rates</Heading>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {currencyRates ? (
            <ul>
              <RateContainer>
                <FaDollarSign />
                <CurrencyText>USD:</CurrencyText> {currencyRates.USD}
              </RateContainer>
              <RateContainer>
                <FaEuroSign />
                <CurrencyText>EUR:</CurrencyText> {currencyRates.EUR}
              </RateContainer>
              <RateContainer>
                <FaDollarSign />
                <CurrencyText>CAD:</CurrencyText> {currencyRates.CAD}
              </RateContainer>
              
            </ul>
          ) : (
            <p>Loading currency rates...</p>
          )}
        </>
      )}
    </Card>
  );
};

export default CurrencyRate;
