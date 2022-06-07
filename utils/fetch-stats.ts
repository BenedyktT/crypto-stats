import { StatsResponseDto } from '../types/StatsResponse.dto';

export type StatsResponse = {
  totalPln: string;
  last30Days: string;
  hashrate: string;
};

const getCurrentExchangeRate = async (): Promise<number> => {
  const response = await fetch(
    'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=ETH,PLN'
  );
  const json = await response.json();
  return json.PLN;
};

export default async function fetchStats(): Promise<StatsResponse> {
  const response = await fetch(
    'https://eth.2miners.com/api/accounts/bc1qzgzh8h9wy8ry39qkly8fhfs28dsu0vh6rcd75c'
  );
  const { payments, stats, sumrewards, currentHashrate } =
    (await response.json()) as StatsResponseDto;
  const { balance } = stats;
  const totalPayment = payments.reduce((acc, curr) => {
    return (acc += curr.amount);
  }, 0);

  const exchangeRate = await getCurrentExchangeRate();
  const last30Days = Math.ceil(
    sumrewards[4]?.reward * 0.000000001 * exchangeRate
  ).toFixed(2);
  const totalEth = (balance + totalPayment) * 0.000000001;
  const totalPln = Math.ceil(totalEth * exchangeRate).toFixed(2);

  return {
    totalPln,
    last30Days,
    hashrate: `${Math.ceil(currentHashrate * 0.000001)} MH/s`,
  };
}
