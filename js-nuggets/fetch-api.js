// Browser Api for HTTP requests
//returns promise

const url = "https://course-api.com/react-tours-project";

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//async and await

const getTours = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.log(error);
  }
};

getTours();
