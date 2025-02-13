import axios from 'axios'; 

describe('fetchBaseFeeOverTime', () => { 
 it('logs data when the API call is successful', async () => { 
  try {
   const response = await axios.get('https://ultrasound.money/api/v2/fees/base-fee-over-time');
   console.log('Data: ', response.data);
  } catch (error) { 
   console.log('Error fetching the data: ', error); 
  }
 })
})