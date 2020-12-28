# sumo-queue

<p align="center">
  <a href="https://nodei.co/npm/sumo-queue/" target="_blank"><img src="https://nodei.co/npm/sumo-queue.png"></a>
</p>

<br />
<p align="center">

  <h3 align="center">SUMO QUEUE</h3>

  <p align="center">
    Queue Data Structure Implementation. Use it for large arrays.
    <br />
    <a href="https://github.com/sanmak/sumo-queue"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/sanmak/sumo-queue/issues">Report Bug</a>
    ·
    <a href="https://github.com/sanmak/sumo-queue/issues">Request Feature</a>
  </p>
</p>

## Dead Simple to Use

```javascript
# Import Package
const Queue = require("sumo-queue");

const queue = new Queue(2);
// OUTPUT: 1609158613385wbQvkB5djUXB debug log: A new queue 1609158613385wbQvkB5djUXB is initialized with capacity 2

queue.enqueue(1);
// OUTPUT: 1609158613385wbQvkB5djUXB debug log: Node added {"currentPointerValue":1,"nextPointer":null}

console.log(queue.iterate());
// OUTPUT: [ 1 ]

console.log(queue.size);
// OUTPUT: 1

queue.bulkEnqueue([2, 3]);
/* OUTPUT: 
1609158613385wbQvkB5djUXB debug log: Node added {"currentPointerValue":2,"nextPointer":null}

1609158613385wbQvkB5djUXB debug log: Queue is full
*/
console.log(queue.iterate());
// OUTPUT: [ 1, 2 ]

console.log(queue.size);
// OUTPUT: 2

console.log(queue.first());
/* OUTPUT: 
SumoNode {
  currentPointerValue: 1,
  nextPointer: SumoNode { currentPointerValue: 2, nextPointer: null }
}
*/

console.log(queue.first().currentPointerValue);
// OUTPUT: 1

console.log(queue.last());
/* OUTPUT: 
SumoNode { currentPointerValue: 2, nextPointer: null }
*/

console.log(queue.isEmpty());
// OUTPUT: false

console.log(queue.isFull());
// OUTPUT: true

```

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#contact">Sponsor</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Package

In computer science, a queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. (Wikipedia).

When you are dealing with larger arrays, it's always suggested to use Queue, because of constant time complexity O(1).

Sumo Queue has all the queue operations implemented. Use it especially for the larger array to attain O(1) complexity.

### Built With

This package is built with raw javascript and Mocha / Chai is used for testing.

* [Javascript](https://www.javascript.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)



<!-- GETTING STARTED -->
## Getting Started

Install this package and follow examples given below. We have `examples` folder which has implementation code as well.
### Installation

1. Install NPM packages
   ```sh
   npm i --save sumo-queue
   ```

<!-- USAGE EXAMPLES -->
## Usage

Once this package is added in your project as mentioned in the `installation`, you need to import this package and create a `QUEUE` class to start using it.

## Eg: 

```javascript
# Import Package
const Queue = require("sumo-queue");

const queue = new Queue(2);
// OUTPUT: 1609158613385wbQvkB5djUXB debug log: A new queue 1609158613385wbQvkB5djUXB is initialized with capacity 2

queue.enqueue(1);
// OUTPUT: 1609158613385wbQvkB5djUXB debug log: Node added {"currentPointerValue":1,"nextPointer":null}

console.log(queue.iterate());
// OUTPUT: [ 1 ]

console.log(queue.size);
// OUTPUT: 1

queue.bulkEnqueue([2, 3]);
/* OUTPUT: 
1609158613385wbQvkB5djUXB debug log: Node added {"currentPointerValue":2,"nextPointer":null}

1609158613385wbQvkB5djUXB debug log: Queue is full
*/
console.log(queue.iterate());
// OUTPUT: [ 1, 2 ]

console.log(queue.size);
// OUTPUT: 2

console.log(queue.first());
/* OUTPUT: 
SumoNode {
  currentPointerValue: 1,
  nextPointer: SumoNode { currentPointerValue: 2, nextPointer: null }
}
*/

console.log(queue.first().currentPointerValue);
// OUTPUT: 1

console.log(queue.last());
/* OUTPUT: 
SumoNode { currentPointerValue: 2, nextPointer: null }
*/

console.log(queue.isEmpty());
// OUTPUT: false

console.log(queue.isFull());
// OUTPUT: true

```

## Test

Test cases is written in `test/test.js`. To test this package, run `npm run test`. 

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/sanmak/sumo-queue/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

SANKET MAKHIJA - [@sanket_dude](https://twitter.com/sanket_dude) - sanket[dot]mahija[at]gmail[dot]com

## Sponsor ❤️

Consider sponsoring this package and help open source community and contributions.

 <a href="https://ko-fi.com/E1E72C2MM" target="_blank"> <img style={kofiStyle} src="https://cdn.ko-fi.com/cdn/kofi1.png?v=2"></img> </a>
