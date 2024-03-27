const path = require("path");

function addRoutes(app, PROJECT_DIR, mongoDBHandler) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // will be deprecated in [1.1.0]
  app.get("/posts", async (req, res) => {
    try {
      const data = await mongoDBHandler.getAllPosts();
      res.json(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.get("/api/posts", async (req, res) => {
    try {
      const data = await mongoDBHandler.getAllPostsV2();
      res.json(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.get("/api/image/:imageName", async (req, res) => {
    try {
      const imageName = req.params.imageName;
      console.log(imageName);
      const imagePath = path.join(
        PROJECT_DIR,
        "static",
        "assets",
        "posts_v2",
        `${imageName}.jpg`,
      );

      res.sendFile(imagePath);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).send("Internal Server Error");
    }
  });
}

module.exports = { route: addRoutes };
