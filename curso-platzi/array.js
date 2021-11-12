class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        ++this.length;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
}

const myArray = new MyArray();


console.log(myArray.push("Italo"));
console.log(myArray.push("Nati"));
console.log(myArray.get(0));
console.log(myArray);
