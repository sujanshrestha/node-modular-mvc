

chai.use(chaiHttp)
var expect = chai.expect;

var server = 'http://localhost:3000';

    describe("/GET ", () => {
        it("returns status code 200", (done) => {
            
            chai.request(server).get('/').end( (error, response) => {

                expect(response.status).to.equal(200);
                done();
            });
        });
    })

    describe("/GET home ", () => {

        it("returns status code 200", (done) => {

            chai.request(server).get('/home').end( (error, response) => {

                expect(response.status).to.equal(200);
                done();
            });
        });
    
    
});		