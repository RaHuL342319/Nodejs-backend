const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

// get number of all kidneys and halthy and unhealty
app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOFKidneys = johnKidneys.length;

  let numberofHealthyKidneys = 0;
  for (let i = 0; i < numberOFKidneys; i++) {
    if (johnKidneys[i].healthy) numberofHealthyKidneys += 1;
  }
  let numberofUnHealthyKidneys = numberOFKidneys - numberofHealthyKidneys;
  res.send({
    numberOFKidneys,
    numberofHealthyKidneys,
    numberofUnHealthyKidneys,
  });
});

// post: add number of healthy or unhealthy kidney into kidney by body
app.post("/", (req, res) => {
  let isHealthy = req.body.healthy;
  users[0].kidneys.push({ healthy: isHealthy });
  res.send("done");
});

// put: change all the unhealthy to healthy
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.send({});
});

// delete: delete all healthy
app.listen(port, () => {
  console.log("App is listening at port on", port);
});
