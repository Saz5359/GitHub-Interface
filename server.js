const express = require("express");
require("isomorphic-fetch");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use Helmet!
app.use(helmet());

app.use(express.static("build"));

//Search user gitHub details
//The account and repo details are searched separately because they are 2 different APi's
app.get("/api/:user", async (req, res) => {
  const userName = req.params.user;

  try {
    //search account details
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    //search repo details
    const secondResponse = await fetch(
      `https://api.github.com/users/${userName}/repos`
    );
    const repo = await secondResponse.json();

    //return info to the frontend of the app
    res.send({ account: data, repo: repo });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Something went wrong!" });
  }
});

//get a repo's commit information
app.post("/commits/", async (req, res) => {
  const userName = req.body.userName;
  const repoName = req.body.repoName;

  try {
    //get all the commits for a single repo
    const response = await fetch(
      `https://api.github.com/repos/${userName}/${repoName}/commits`
    );
    const data = await response.json();

    //send data to the frontend
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Something went wrong!" });
  }
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
