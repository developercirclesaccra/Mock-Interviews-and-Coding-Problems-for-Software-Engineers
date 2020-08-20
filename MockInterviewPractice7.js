/**
 * 
Introduction: 
MyCake shop is so popular  because of its customer service. Mostly some customers are served on priority basis. For instance aged customers are giving priority code and those with highest priorities get served earlier.

Recently, customers started complaining that people without such priority who placed orders after them are getting their food first. Yikes—that's not good for business!

To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded orders and how to be served first and next to be served based on highest priority.

We'll represent each customer order as
class Customer {
  constructor(name, code = 0) {
    this.name = name;
    this.code = code;
  }
}

And adding customers to service looks like:
service = new Service()
customer1 = new Customer('John');
service.enqueue(customer1);
customer2 = new Customer('Brown');
service.enqueue(customer2);
customer3 = new Customer('Oliver', 5);
service.enqueue(customer3);
customer4 = new Customer('Peter', 1);
service.enqueue(customer4);

Getting customer to be served: 
firstToBeServed = service.dequeue();
//firstToBeServed: Customer(name:Oliver, code: 5)
Question:
Given a service class, complete the dequeue method that makes sure  MyCake Shop operates on  a perfect priority based system such that a customer with highest priority gets served first and in that order.

 */

class Service {
  constructor() {
    this.dataStore = [];
  }
  enqueue(element) {
    this.dataStore.push(element);
  }
  dequeue() {
    //Your code here
    //Sort base on code given
    if (this.isEmpty()) {
      throw new Error("Can't dequeue from empty list");
    }
    // this.dataStore.sort((a, b) => b.code - a.code); // nlogn
    // return this.dataStore.shift(); //n

    let priorityIndex = 0;
    let priority = 0;
    if (this.dataStore[0].code) priority = this.dataStore[0].code;
    for (let i = 1; i < this.length(); i++) {
      if (this.dataStore[i].code) {
        if (this.dataStore[i].code > priority) {
          priority = this.dataStore[i].code;
          priorityIndex = i;
        }
      }
    }
    return this.dataStore.splice(priorityIndex, 1); // o(n)
  }
  front() {
    return this.dataStore[0];
  }
  rear() {
    return this.dataStore[this.dataStore - 1];
  }

  isEmpty() {
    return this.dataStore.length === 0;
  }
  length() {
    return this.dataStore.length;
  }
  getQueue() {
    return this.dataStore;
  }
  toString() {
    return JSON.stringify(this.dataStore, null, 3);
  }
}

class Customer {
  constructor(name, code = 0) {
    this.name = name;
    this.code = code;
  }
}

let service = new Service();
customer1 = new Customer('John');
service.enqueue(customer1);
customer2 = new Customer('Brown');
service.enqueue(customer2);
customer3 = new Customer('Oliver', 5);
service.enqueue(customer3);
customer4 = new Customer('Peter', 1);
service.enqueue(customer4);

console.log(service.toString());
let firstToBeServed = service.dequeue();
console.log(firstToBeServed); // [ Customer { name: 'Oliver', code: 5 } ]
let nextToBeServed = service.dequeue();
console.log(nextToBeServed); //[ Customer { name: 'Peter', code: 1 } ]

nextToBeServed = service.dequeue();
console.log(nextToBeServed); //[ Customer { name: 'John', code: 0 } ]

nextToBeServed = service.dequeue();
console.log(nextToBeServed); //[ Customer { name: 'John', code: 0 } ]

nextToBeServed = service.dequeue();
console.log(nextToBeServed); //[ Customer { name: 'John', code: 0 } ]

nextToBeServed = service.dequeue();
console.log(nextToBeServed); //[ Customer { name: 'John', code: 0 } ]
