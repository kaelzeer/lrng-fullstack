import axios from "axios";
import handler from "../api/posts/route";

describe("GET: /api/posts", () => {
  it("Return 200 OK status", async () => {
    const response = await axios.get("http://185.250.46.244:7293/api/posts");
    expect(response.status).toBe(200);
  });

  it("Return data in the correct format", async () => {
    const response = await axios.get("http://185.250.46.244:7293/api/posts");
    const responseData = response.data;
    expect(responseData).toBeTruthy();
    expect(Array.isArray(responseData)).toBe(true);
  });
});
