import { requestCalcOne } from '@api/api'

const getExchange = () => {
  const getApi = async () => {
    try {
      const data = await requestCalcOne();
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
  getApi();
}

export default getExchange;