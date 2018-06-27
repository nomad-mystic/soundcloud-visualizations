// libs
const path = require('path');
const chai = require('chai');
const chaiHttp = require('chai-http');

// app
let server = require(process.cwd() + '/index');

const expect = chai.expect;

chai.use(chaiHttp);


describe('Server basic functionality', function() {

    after(function(done) {
        // server.close(done);
    });

    it('This will return 200 status code', function(done) {
        chai.request(server)
            .get('/')
            .end(function(error, res) {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Should have no errors', function(done) {
        chai.request(server)
            .get('/')
            .end(function(err, res) {
                expect(err).to.be.null;
                done();
            });

    });

    it('Should have headers', function(done) {
        chai.request(server)
            .get('/')
            .end(function(err, res) {
                expect(res).to.have.headers;
                done();
            });
    });
});
