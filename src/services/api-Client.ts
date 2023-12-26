import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1de4f2cf2b244a15aee4f85180f465ae',
  },
});
