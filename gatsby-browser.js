import Axios from 'axios';
import url from './src/utils/url';

const onInitialClientRender = () => {
  Axios.defaults.baseURL = url;
};

onInitialClientRender();
