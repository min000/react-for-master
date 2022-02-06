import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";

interface IHistorical {
  "time_open": string,
  "time_close": string,
  "open": number,
  "high": number,
  "low": number,
  "close": number,
  "volume": number,
  "market_cap": number
}
interface ChartProps {
  coinId: string;
}
function Chart({coinId}:ChartProps) {
    const {isLoading,data} = useQuery<IHistorical[]>(["ohlcv",coinId],()=> fetchCoinHistory(coinId));
    return <h1>Chart</h1>;
}
  
export default Chart;