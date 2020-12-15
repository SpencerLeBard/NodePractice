const axios = require('axios');

axios.get('http://www.google.com')
.then((responce) => {
  console.log(responce);
})
.catch((error) => {
  console.error(error);
});