const jwt = require("jsonwebtoken");
const { CartModel } = require("../../Models/cart.model");
const { postModel } = require("../../Models/post.model");
const { MyOrdersModel } = require("../../Models/myOrders.model");

// add to cart
const addtocart = async (req, res) => {
  const token = req.headers.authentication;
  const decoded = jwt.verify(token, "masai");
  try {
    const cart = await CartModel.findOne({ userID: decoded.userID });
    const cartID = cart._id;
    const newUserID = cart.userID;
    const newItems = cart.items;
    let myOrders = await MyOrdersModel.findOne({ userID: decoded.userID });
    // if myOrder exists for the user.
    if (myOrders) {
      newItems.forEach((elem) => {
        myOrders.items.push(elem);
      });
      await myOrders.save();
    } else {
      // if myOrder does not exists for the user
      await MyOrdersModel.create({ userID: newUserID, items: newItems });
    }
    // delete the cart after copying the data from the cart.
    await CartModel.findByIdAndDelete({ _id: cartID });
    myOrders = await MyOrdersModel.findOne({ userID: decoded.userID });
    if (!myOrders) {
      throw new Error("No orders found for this user.");
    }
    res.status(200).send(myOrders);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

// Get cart data
const getCartData = async (req, res) => {
  const token = req.headers.authentication;
  const decoded = jwt.verify(token, "masai");

  try {
    // Find the cart for the user
    const cart = await CartModel.findOne({ userID: decoded.userID });

    if (!cart) {
      return res.status(404).send({ msg: "Cart not found" });
    }

    // Get the productIDs from the cart items
    const productIDs = cart.items.map((item) => item.productID);

    // Find the matching products
    const products = await postModel.find({ _id: { $in: productIDs } });

    // Map the product data to include the quantity from the cart items
    // const cartItems = cart.items.map((item) => {
    //   const product = products.find((p) => p._id.toString() === item.productID.toString());
    //   return { ...product.toObject(), quantity: item.quantity };
    // });

    const cartItems = cart.items.map((item) => {
      const product = products.find(
        (p) => p._id.toString() === item.productID.toString()
      );

      if (product) {
        return { ...product.toObject(), addedQuantity: item.quantity };
      } else {
        return { productID: item.productID, addedQuantity: item.quantity };
      }
    });

    res.status(200).send(cartItems);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

// Delete from cart
const deleteFromCart = async (req, res) => {
  const prodID = req.params.prodID;
  const token = req.headers.authentication;
  const decoded = jwt.verify(token, "my_signature");
  try {
    const cart = await CartModel.findOne({ userID: decoded.userID });
    cart.items = cart.items.filter((elem) => elem.productID != prodID);
    await cart.save();
    const product = await ProductModel.findOne({ _id: prodID });
    product.addedQuantity = 0;
    res.status(200).send(cart);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

module.exports = { getCartData, deleteFromCart, addtocart };


// {
//     "userID": "6452862e6a8036d3fbd7a393",
//     "items": [
//       {
//         "productID": "64535ac5d980b1c232396702",
//         "quantity": 1
//       }
//     ]
//   }