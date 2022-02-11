import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchExchange } from "../api";
import Loader from '../component/Loader';

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px 20px;
  border-radius: 10px;
`;

const OverviewItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Item = styled.li`
  
`;

interface ExchangeData {
  "pair": string,
  "base_currency_id": string,
  "base_currency_name": string,
  "quote_currency_id": string,
  "quote_currency_name": string,
  "market_url": string,
  "category": string,
  "fee_type": string,
  "outlier": boolean,
  "reported_volume_24h_share": number,
  "quotes": {
    "USD": {
      "price": number,
      "volume_24h": number
    }
  },
  "last_updated": string
}
interface PriceProps {
  coinSymbol: string,
  coinId:string
}

function Price({coinSymbol,coinId}:PriceProps) {
  const {isLoading: exchangeLoading, data: exchangeData} = useQuery<ExchangeData[]>("symbol",fetchExchange);
  return (
    <Overview>
      {exchangeData?.map(coin =>
        coin.base_currency_id === coinId ? 
        (
        <OverviewItems key={coin.quote_currency_id}>
          <Item>{coin.quote_currency_name}</Item>
          <Item>{coin?.quotes.USD.price.toFixed(3)}</Item>
        </OverviewItems>
        ):
        null
      )}
    </Overview>
  );
}
  
export default Price;