class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
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
            newNode.prev = this.first;
            this.first = newNode;
        }
    }

    dequeue() {

        if (this.length === 0) {
            return;
        }
        const firstItem = this.first;
        this.first = this.first.prev;

        return firstItem;
    }

    peek() {
        return this.first;
    }
}