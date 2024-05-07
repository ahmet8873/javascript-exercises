const users = [
  {
    id: 1,
    name: "john",
  },
  {
    id: 2,
    name: "jason",
  },
  {
    id: 3,
    name: "kane",
  },
];

const articles = [
  {
    userId: 1,
    articles: ["one", "two", "three"],
  },
  {
    userId: 2,
    articles: ["four", "five", "six"],
  },
  {
    userId: 3,
    articles: ["seven", "eight", "nine"],
  },
];

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);
    if (user) {
      resolve(user);
    } else {
      reject("user not found");
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const article = articles.find((article) => article.userId === userId);
    if (article) {
      resolve(article);
    } else {
      reject("article not found");
    }
  });
}

// getUser("jason")
//   .then((data) => getArticles(data.id))
//   .then((data) => console.log(data.articles))
//   .catch((err) => console.log(err));

const getUserArticles = async (name) => {
  try {
    const user = await getUser(name);
    const article = await getArticles(user.id);
    console.log(article.articles);
  } catch (error) {
    console.log(error);
  }
};
getUserArticles("jason");
