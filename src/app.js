const express = require("express");
const db = require("./utils/database");
const morgan = require("morgan");
const cors = require('cors');
const initModels = require('./models/initModels');
const handleError = require('./middlewares/error');


const userRoutes = require('./Routes/user.routes');
const authRoutes = require('./Routes/auth.routes');
const productRoutes = require('./Routes/product.route');
const cartRoutes = require('./Routes/cart.routes');
const orderRoutes = require('./Routes/order.routes');



const app = express();


app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));




app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", cartRoutes);
app.use("/api/v1", orderRoutes);



app.get("/", (req, res) => {
  res.status(200).json("Todo bien");
});

app.use(handleError);


module.exports = app;