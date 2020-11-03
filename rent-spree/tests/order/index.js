const request = require("supertest");


describe("Orders Suites", () => {


  it('should return 403 from GET request', async (done) => {
    await request(strapi.server) // app server is and instance of Class: http.Server
      .get("/orders")
      .expect("Content-Type", /json/)
      .expect(403)
      .then((data) => {
        expect(data.body).toBeDefined();
      });

    done();
  })

  it('should return 403 from GET count request', async (done) => {
    await request(strapi.server) // app server is and instance of Class: http.Server
      .get("/orders/count")
      .expect("Content-Type", /json/)
      .expect(403)
      .then((data) => {
        expect(data.body).toBeDefined();
      });

    done();
  })

  it('should return 403 from GET id request', async (done) => {
    await request(strapi.server) // app server is and instance of Class: http.Server
      .get("/orders/1")
      .expect("Content-Type", /json/)
      .expect(403)
      .then((data) => {
        expect(data.body).toBeDefined();
      });

    done();
  })

  it('should return order from POST request', async (done) => {
    await request(strapi.server) // app server is and instance of Class: http.Server
      .post("/orders", {
        firstname: "test",
        lastname: 'myLastName',
        email: 'email@email.com',
        address: 'onnut',
        products: '{}',
      })
      .set("accept", "application/json")
      .set("Content-Type", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((data) => {
        expect(data.body).toBeDefined();
      });

    done();
  })

  it('should return 405 from PUT request', async (done) => {
    await request(strapi.server) // app server is and instance of Class: http.Server
      .put("/orders")
      .expect("Content-Type", /text/)
      .expect(405)
      .then((data) => {
        expect(data.body).toBeDefined();
      });

    done();
  })

  it('should return 405 from DELETE request', async (done) => {
    await request(strapi.server) // app server is and instance of Class: http.Server
      .delete("/orders")
      .expect("Content-Type", /text/)
      .expect(405)
      .then((data) => {
        expect(data.body).toBeDefined();
      });

    done();
  })
});
