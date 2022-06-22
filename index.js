const app = require("express")();
const port = 3000;

app.get("/", (req, res) => {
  res.send("ECS bluegreen codedeploy with github workflows. Latest changes !!!!!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
