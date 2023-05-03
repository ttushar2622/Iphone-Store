const express = require("express");
const { connection } = require("./Config/db");
const { registerRouter } = require("./Routes/register.routes");
const { LoginRouter } = require("./Routes/login.routes");
const cors=require("cors");
const { addproductRouter } = require("./Routes/addProducts.routes");
const { auth } = require("./Middlewares/auth");
const { getProductsRouter } = require("./Routes/getProduct.routes");
const { deleteProductsRouter } = require("./Routes/deleteProduct.routes");

const app = express();
app.use(cors());

app.use(express.json());
require("dotenv").config();


app.use("/apple", registerRouter);
app.use("/apple", LoginRouter);
app.use("/apple", getProductsRouter);

app.use(auth);
app.use("/apple", addproductRouter);
app.use("/apple", deleteProductsRouter);



app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to atlas database");
  } catch (er) {
    console.log(er);
  }

  console.log("server is running on Port", process.env.PORT);
});
