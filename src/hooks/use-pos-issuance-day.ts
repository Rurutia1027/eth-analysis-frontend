import type { EthNumber } from "../constants/eth-units";
import { DAYS_PER_YEAR } from "../constants/time"; 
import { useGaugeRates, fetchGaugeRates } from "../api/gauge-rate";

export const usePosIssuancePerDay = (): EthNumber =>
  useGaugeRates()?.d7.issuance_rate_yearly.eth / DAYS_PER_YEAR;

export const fetchPosIssuancePerDay = async (): Promise<EthNumber> => {
  try {
    const res = await fetchGaugeRates(); // Await the async function
    if ("data" in res && "d7" in res.data) {
      if (!res || !res.data || !res.data.d7) {
        console.warn("Unexpected response structure:", res);
        return 0 as EthNumber;
      }

      const issuanceRate = res.data.d7.issuance_rate_yearly?.eth;
      return issuanceRate !== undefined ? issuanceRate / DAYS_PER_YEAR : 0 as EthNumber;
    } else { 
      return 0 as EthNumber; 
    }
  } catch (error) {
    console.error("Error fetching PoS issuance per day:", error);
    return 0 as EthNumber; 
  }
};