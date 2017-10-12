
process.env.NODE_ENV = 'development'


const request = require("request");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const expect = chai.expect;
var server = require("../server.js");

chai.use(chaiHttp);

let base_url = "/";


describe("home" , () => {
/*
	beforeEach((done) => {
		server = require('../server.js');
		done();
	});

	afterEach(function (done) {
		server.close(done);
	});
*/
	after(function (done) {
		server.close(done);
	});	

	describe("/GET home ", () => {

		it("returns status code 200", (done) => {

			chai.request(server).get('/home').end( (error, response) => {

				response.should.have.status(200);

				done();
			});
		});
		

		it("body should return title", (done) => {

			let options = {
				url : 'http://localhost:3000/',
				headers: {
					'Content-Type':'text/plain'
				}
			};
			request.get(options, (err, res, body) => {

				expect(res.statusCode).to.equal(200);
				expect(res).to.be.html;
				body.should.include("Home");

				done();
			});

		})

	});
});