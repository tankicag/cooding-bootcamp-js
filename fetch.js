//TO GET - GET REQUEST
/* fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => response.json())
  .then((data) => console.log(data));
 */

//GET
/* function getData() {
  fetch("https://my-first-books-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const title = data[0].title;
      console.log(title);
    });
}
getData(); */

//POST request (post data to an api)
/* const data = {
  id: 3,
  title: "Deep Work",
  author: "Cal Newport",
  web: "www.calnewport.com",
  description: "Rules for Focused Success in a Distracted World",
  details: [
    {
      publisher: "Piatkus",
      language: "English",
      paperback: 304,
      reviews: 4.5,
      ISBN10: "0349411905",
      ISBN13: "978-0349411903",
    },
  ],
};

fetch("https://my-first-books-api.herokuapp.com/books", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  }); */

//PUT request (Allows to edit a object)
/* const data = {
  id: 1,
  title: "Think Like a Programmer",
  author: "V. Anton Spraul",
  web: "www.vantonspraul.com/books",
  description: "An Introduction to Creative Problem Solving",
  details: [
    {
      publisher: "No Starch Press",
      language: "English",
      paperback: 256,
      reviews: 4.7,
      ISBN13: "978-1593274245",
    },
  ],
};
function editData() {
  fetch("https://my-first-books-api.herokuapp.com/books/1", {
    method: "PUT", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

editData(); */

//DELETE request
fetch("https://my-first-books-api.herokuapp.com/books/2", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
