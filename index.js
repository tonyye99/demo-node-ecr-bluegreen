const app = require("express")();
const port = 3000;

app.get("/", (req, res) => {
  res.send("ECS bluegreen codedeploy with github workflows");
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
