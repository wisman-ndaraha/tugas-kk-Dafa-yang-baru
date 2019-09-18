//pemanggilan library axios
const axios = require('axios');

const url = 'https://rickandomrtyapi.com/api/character';

//Action get method
axios.get(url).then(res => {
    // jika success akan terampil disini
    console.log (res);
    
}).catch(err => {
    //jika erorr akan terampil disini
    console.log(err);
})