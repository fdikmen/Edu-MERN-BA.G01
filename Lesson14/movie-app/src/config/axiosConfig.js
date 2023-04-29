import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://644cec01cfdddac97098eafb.mockapi.io/',
});

export default instance;

/*
axios.get('https://644cec01cfdddac97098eafb.mockapi.io/movies')
axios.post('https://644cec01cfdddac97098eafb.mockapi.io/movies')
axios.put('https://644cec01cfdddac97098eafb.mockapi.io/movies')
axios.delete('https://644cec01cfdddac97098eafb.mockapi.io/movies/12')
*/

/*
axios.get('/movies')
axios.post('/movies')
axios.put('/movies')
axios.delete('/movies/12')
*/