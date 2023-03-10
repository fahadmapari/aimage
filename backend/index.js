require("dotenv").config();
const express = require("express");
const app = express();
const { generateImage } = require("./config/openAi");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("hi");
// });

app.post("/generate", async (req, res) => {
  const { description, user } = req.body;

  try {
    const response = await generateImage(description, user);
    res.json({ success: true, data: response.data });
  } catch (err) {
    res.status(503).json({
      success: false,
      data: err.message,
    });
  }
});

app.listen(process.env.PORT, () => console.log("server running"));
