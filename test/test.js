const should = require("chai").should();
const Queue = require("../src/index");

describe("Queue Implementation", () => {
  const queue = new Queue(10);
  queue.enqueue(1);
  describe("Queue Data Element", () => {
    it("first element should be an integer", function () {
      queue.first().currentPointerValue.should.be.an("number");
    });
    it("queue size should be one", () => {
      queue.size.should.equal(1);
    });
    it("queue is not full", () => {
      queue.isFull().should.be.equal(false);
    });
    it("queue iteration array", () => {
      queue.iterate().should.be.an("array");
    });
    it("queue iteration elements", () => {
      queue.iterate().should.include(1);
    });
  });
});
