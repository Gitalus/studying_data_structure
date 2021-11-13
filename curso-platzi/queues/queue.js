class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
    }
}

class MyQueue {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.prev = this.bottom;
            this.bottom = newNode;
        }
    }

    dequeue() {
        const firstItem = this.bottom;
        this.bottom = this.bottom.prev;

        return firstItem;
    }

    peek() {
        return this.bottom;
    }
}