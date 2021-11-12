class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    // Debería empezar con un valor
    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;

        this.length = 1;
    }
}

let myLinkedList = new MySinglyLinkedList(1);