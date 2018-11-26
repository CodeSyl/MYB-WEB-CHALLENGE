import axios from 'axios';
import { unstable_createResource } from 'react-cache';

const api = async source => {
  try {
    const { data } = await axios.get(source);
    return data;
  } catch (error) {
    return error;
  }
};

const FetchApi = unstable_createResource(api);

export default FetchApi;