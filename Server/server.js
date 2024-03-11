const express = require("express");
const mongoose = require("mongoose");

// const { login, signup } = require("./Controller/auth");

const userRouter = require("./Router/users");
const bookingRouter = require("./Router/booking");
const eventRouter = require("./Router/events");
const organizerRouter = require("./Router/organizer");
const commentRouter = require("./Router/postcomment");
const serviceRouter = require("./Router/postservice");

const port = process.env.PORT || 3002;

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/service", serviceRouter);

app.use("/comment", commentRouter);

//for bookings
app.use("/bookings", bookingRouter); //now bookings will be the new collections  in our database

app.use("/events", eventRouter);

app.use("/organizer", organizerRouter);

//password: 9JonUyI7QfXWqyLl

const url =
  "mongodb+srv://135ujjalsonowal:9JonUyI7QfXWqyLl@eventorganising.08cgxvg.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is live on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
