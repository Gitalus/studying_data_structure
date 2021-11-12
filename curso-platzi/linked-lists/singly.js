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

    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode; // tail.next hace referencia a head.next en un inicio, luego al último nodo agregado
        this.tail = newNode; // ahora tail apunta al nuevo nodo
        this.length++;

        return this;
    }

    preprend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getFromIndex(index - 1);
        newNode.next = firstPointer.next;
        firstPointer.next = newNode;
        // const holdingPointer = firstPointer.next;
        // firstPointer.next = newNode;
        // newNode.next = holdingPointer;
        this.length++;

        return this;
    }

    getFromIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}

let myLinkedList = new MySinglyLinkedList(1);