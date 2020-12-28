const util = require("./util");
const logger = require("./logger");
class SumoNode {
  constructor(value) {
    this.currentPointerValue = value;
    this.nextPointer = null;
  }
}

class SumoQueue {
  constructor(capacity = 10) {
    this.name = util.generateUniqueId();
    this.head = null;
    this.tail = null;
    this.capacity = capacity;
    this.size = 0;
    this.logger = new logger(this.name);
    this.logger.debug(
      `A new queue ${this.name} is initialized with capacity ${this.capacity}`
    );
  }
  enqueue(value) {
    try {
      if (this.isFull()) {
        this.logger.debug("Queue is full");
        return;
      }
      const sumoNode = new SumoNode(value);
      if (!this.head) {
        this.head = sumoNode;
      } else {
        this.tail.nextPointer = sumoNode;
      }
      this.tail = sumoNode;
      this.size++;
      this.logger.debug(`Node added ${JSON.stringify(sumoNode)}`);
    } catch (error) {
      this.logger.error(error);
    }
  }
  bulkEnqueue(arrOfValue) {
    try {
      arrOfValue.map((value) => this.enqueue(value));
    } catch (error) {
      this.logger.error(error);
    }
  }
  dequeue() {
    try {
      if (this.isEmpty()) {
        return;
      }
      const node = this.head;
      this.head = this.head.nextPointer;
      this.size--;
      return node;
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }
  first() {
    return this.head;
  }
  last() {
    return this.tail;
  }
  isEmpty() {
    return this.size == 0;
  }
  isFull() {
    return this.size == this.capacity;
  }
  iterate() {
    const values = [];
    try {
      let node = this.head;
      while (node != null) {
        values.push(node.currentPointerValue);
        node = node.nextPointer;
      }
      return values;
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }
}

module.exports = SumoQueue;
