const axios = require('axios');

axios.post('login' , {
    firstName: 'Spencer' ,
    lastName: 'LeBard'
})
.then((responce) => {
  console.log(responce);
} , (error) => {
  console.log(error);
}
)


// axios.get('http://www.google.com')
// .then((responce) => {
//   console.log(responce);
// })
// .catch((error) => {
//   console.error(error);
// });