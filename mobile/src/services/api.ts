import axios from 'axios';

const api = axios.create({
baseURL:'http://192.168.15.8:3333'//colocar o IP da máquina que aparece no app do expo aqui

});

export default api;