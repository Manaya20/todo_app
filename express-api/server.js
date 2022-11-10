const express = require("express");

const movies = [
  {
    Id: "1",
    Title: "Enola Homes",

    Rate: "10",
  },
  {
    Id: "2",
    Title: "skyfall",

    Rate: "9",
  },
];

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    data: movies,
  });
});

app.post("/", (req, res) => {
  const inputId = movies.length + 1;
  const inputTitle = req.body.Title;
  const inputRate = req.body.Rate;

  movies.push({
    Id: inputId,
    Title: inputTitle,
    Rate: inputRate,
  });

  res.json({
    data: movies,
  });
});

app.post("/delete", (req, res) => {
  var requestedId = req.body.Id;
  movies.forEach((item, idx) => {
    if (item.Id === requestedId) {
      movies.splice(idx, 1);
    }
  });
  res.json({
    data: movies,
  });
});

app.post("/update", (req, res) => {
  const requestedId = req.body.Id;
  const inputTitle = req.body.Title;
  const inputRate = req.body.Rate;

  movies.forEach((item) => {
    if (item.Id == requestedId) {
      item.Title = inputTitle;
      item.Rate = inputRate;
    }
  });
  res.json({
    data: movies,
  });
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});