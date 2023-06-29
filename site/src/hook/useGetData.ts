import axios from 'axios';

export const useGetData = () => {
  const getData = async () => {
    try {
      let response = await axios.get('api/getdata').then((Response)=>{
        const data = Response.data
        return data
      });
    } catch (err) {
        console.log(err)
    }
  };
  return{
    getData,
  }
};
