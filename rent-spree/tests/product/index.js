const request = require("supertest");
const factory = require('./factory');


describe("Products Suites", () => {
  let products;

  beforeAll(async (done) => {
    products = await factory.createProduct(strapi);
    done();
  });

  it("should return products", async () => {
    expect(products).toBeDefined();
  });

  it('should return products from GET request', async (done) => {
    await request(strapi.server) // app server is and instance of Class: http.Server
      .get("/products")
      .set("accept", "application/json")
      .set("Content-Type", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBeDefined();
      });

    done();
  })

  it('should return 403 from GET count request', async (done) => {
    await request(strapi.server) // app server is and instance of Class: http.Server
      .get("/products/count")
      .set("accept", "application/json")
      .set("Content-Type", "application/json")
      .expect("Content-Type", /json/)
      .expect(403)
      .then((data) => {
        expect(data.body).toBeDefined();
      });

    done();
  })

  it('should return 403 from GET id request', async (done) => {
    await request(strapi.server) // app server is and instance of Class: http.Server
      .get("/products/1")
      .set("accept", "application/json")
      .set("Content-Type", "application/json")
      .expect("Content-Type", /json/)
      .expect(403)
      .then((data) => {
        expect(data.body).toBeDefined();
      });

    done();
  })

  it('should return 403 products from POST request', async (done) => {
    await request(strapi.server) // app server is and instance of Class: http.Server
      .post("/products")
      .set("accept", "application/json")
      .set("Content-Type", "application/json")
      .expect("Content-Type", /json/)
      .expect(403)
      .then((data) => {
        expect(data.body).toBeDefined();
      });

    done();
  })

  it('should return 405 products from PUT request', async (done) => {
    await request(strapi.server) // app server is and instance of Class: http.Server
      .put("/products")
      .expect("Content-Type", /text/)
      .expect(405)
      .then((data) => {
        expect(data.body).toBeDefined();
      });

    done();
  })

  it('should return 405 products from DELETE request', async (done) => {
    await request(strapi.server) // app server is and instance of Class: http.Server
      .delete("/products")
      .expect("Content-Type", /text/)
      .expect(405)
      .then((data) => {
        expect(data.body).toBeDefined();
      });

    done();
  })
});
