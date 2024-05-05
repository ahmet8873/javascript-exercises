const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((acc, curr) => {
    acc[curr.language] = acc[curr.language] ? acc[curr.language] + 1 : 1;
    return acc;
  }, {});
  console.log(newData);
};

fetchRepos(); // Output:{ JavaScript: 35, CSS: 46, HTML: 14, null: 3, SCSS: 2 }
