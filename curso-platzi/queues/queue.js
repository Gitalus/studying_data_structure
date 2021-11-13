class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.last = null;
        this.first = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {

            this.last = newNode;
            this.first = newNode;

        } else {

            this.last.next = newNode;
            this.last = newNode;

        }
        this.length++;

        return this;
    }

    dequeue() {

        if (this.length === 0) {
            return null;
        }
        const firstItem = this.first;
        this.first = this.first.next;
        this.length--;

        return firstItem;
    }

    peek() {
        return this.first;
    }
}