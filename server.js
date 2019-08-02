const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3003;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production")  {
    app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to MongoDB
mongoose.connect(
    process.env.MONGO_URI || "mongodb://user1:password1ds125871.mlab.com:25871/heroku_0xn0jnk7",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

// Start the API server
app.listen(PORT, () =>  
    console.log(`🌎 ==> API server listening on PORT ${PORT}!`)
);
