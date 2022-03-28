const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

const SERVER_URL = process.env.APP_URL || "http://localhost:8000";

chai.use(chaiHttp);

const TEST_USER = {
    emailid: "john@doe.com",
    password: "John",
    name:"John"
};

let createdUserId;

describe("Users", () => {
  it("should create a new user", done => {
    chai
      .request(SERVER_URL)
      .post("/api/users")
      .send(TEST_USER)
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body.should.have.property("id");
        done();
      });
  });

  it("should get the created user", done => {
    chai
      .request(SERVER_URL)
      .get("/api/users")
      .end((err, res) => {
        if (err) done(err)
        res.should.have.status(200);
        res.body.should.be.a("array");

        const user = res.body.pop();
        user.id.should.equal(createdUserId);
        user.email.should.equal(TEST_USER.email);
        user.firstname.should.equal(TEST_USER.firstname);
        done();
      });
  });
});
