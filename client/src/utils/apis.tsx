export const api = process.env.NODE_ENV === 'production'
  ? 'https://howdoising.herokuapp.com/api/v1'
  : 'http://localhost:8000/api/v1';

export const socketApi = process.env.NODE_ENV === 'production'
  ? 'https://howdoising-socket.herokuapp.com'
  : 'http://localhost:8080';