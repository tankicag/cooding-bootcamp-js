/* fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => response.json())
  .then((data) => console.log(data));
 */
function getData() {
  fetch("https://my-burger-api.herokuapp.com/burgers")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const name = data[0].name;
      console.log(name);
    });
}
getData();
