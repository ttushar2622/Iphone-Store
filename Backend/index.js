const express = require("express");
const { connection } = require("./Config/db");
const { registerRouter } = require("./Routes/adminRoutes/register.routes");
const { LoginRouter } = require("./Routes/adminRoutes/login.routes");
const cors=require("cors");
const { addproductRouter } = require("./Routes/adminRoutes/addProducts.routes");
const { auth } = require("./Middlewares/auth");
const { getProductsRouter } = require("./Routes/adminRoutes/getProduct.routes");
const { deleteProductsRouter } = require("./Routes/adminRoutes/deleteProduct.routes");
const { updateProductsRouter } = require("./Routes/adminRoutes/updateProduct.routes");
const { getProducts, searchProduct } = require("./Routes/UserRoutes/userProducts.routes");
const { addtocart } = require("./Routes/UserRoutes/cartProducts.routes");

const app = express();
app.use(cors());

app.use(express.json());
require("dotenv").config();


// user routes
app.use("/apple/user/search", searchProduct);
app.use("/apple/user", getProducts);
app.use("/apple/user/addtocart", addtocart);


// admin routes

app.use("/apple/admin", registerRouter);
app.use("/apple/admin", LoginRouter);
app.use(auth);
app.use("/apple/admin", getProductsRouter);
app.use("/apple/admin", addproductRouter);
app.use("/apple/admin", deleteProductsRouter);
app.use("/apple/admin", updateProductsRouter);




app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to atlas database");
  } catch (er) {
    console.log(er);
  }

  console.log("server is running on Port", process.env.PORT);
});
