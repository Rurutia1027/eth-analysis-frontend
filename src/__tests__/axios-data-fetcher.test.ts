import axios from 'axios'; 
import { fetchApiJson, ApiResult } from '../utils/axios-fetchers';
import { BaseFeeOverTime } from '../api/base-fee-over-time';
import { assert } from 'console';

describe('fetchBaseFeeOverTime', () => { 
  it("fetch data via axios implemented axios-fetchers::fetchApiJson", async () => {
    try {
      const apiDomain = "https://ultrasound.money";
      const url = "/api/v2/fees/base-fee-over-time";
      const data_records: ApiResult<BaseFeeOverTime> = await fetchApiJson(
        apiDomain,
        url,
      );

      if ("data" in data_records) {
        const { d1, d30, d7, h1, m5, since_burn, since_merge } =
          data_records.data;
        assert(d1.length > 0);
        assert(d30.length > 0);
      } else {
        console.error("API Error: ", data_records.error);
      }
    } catch (error) {
      console.log("Error fetching the data: ", error);
    }
  }, 12000); 
})