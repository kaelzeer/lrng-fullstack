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
      const d = new Date()
      const timestamp = `${d.getUTCDate()}.${d.getUTCMonth() + 1}.${d.getUTCFullYear()} ` +
        `${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}.${d.getUTCMilliseconds()} UTC`
      console.error(`${timestamp}: Error fetching posts: ${error}`);
      res.status(500).send("Internal Server Error");
    }
  });

  app.get("/api/image/:imageName", async (req, res) => {
    const d = new Date()
    const timestamp = `${d.getUTCDate()}.${d.getUTCMonth() + 1}.${d.getUTCFullYear()} ` +
      `${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}.${d.getUTCMilliseconds()} UTC`
    try {
      const imageName = req.params.imageName;
      console.log(`${timestamp}: ${imageName}`);
      const imagePath = path.join(
        PROJECT_DIR,
        "static",
        "assets",
        "posts_v2",
        `${imageName}.jpg`,
      );

      res.sendFile(imagePath);
    } catch (error) {
      console.error(`${timestamp}: Error getting image: ${error}`);
      res.status(500).send("Internal Server Error");
    }
  });
}

module.exports = { route: addRoutes };
