import axios from 'axios';

export default axios.create({
  baseURL: 'https://0a51-59-168-20-84.jp.ngrok.io',
  headers: {
    // POINT：ngrok
    // https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
    'ngrok-skip-browser-warning': '12345',
  },
});
