const { mongoDBTestUri } = require("../utils/Constants");

const MongoDBHandler = require('../utils/mongodb/MongoDBHandler')
const mongoDBHandler = new MongoDBHandler(mongoDBTestUri);

describe("MongoDB Handler", () => {
  it("Return 0 connection status", async () => {
    const result = await mongoDBHandler.init();
    expect(result).toBe(0);
  });

  it("Return non empty array", async () => {
    const result = await mongoDBHandler.getAllPostsV2();
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
  })
})

