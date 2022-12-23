const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const userRouter = require("./routers/userRoute");
const productRouter = require("./routers/productRoute");
const port = 3636;
const cors = require("cors");
app.use(bodyparser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(port, () => {
  console.log("app is running on port :" + port);
});
