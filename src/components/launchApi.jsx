import axios from 'axios';

const getLaunches = () =>
  axios.get('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=50');

export default getLaunches;
