// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

// opción 1: fuerza bruta
// opción 2: binary search O(N*logN)
// opcion 3: hash set O(N)


// opción 3:
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

function containsCommonItemsHashSet(arr1, arr2) {

    let set1 = new Set(arr1);

    for (let index = 0; index < arr2.length; index++) {
        if (set1.has(arr2[index])) {
            return true;
        }
    }
    return false;
}

function contansComonItemsHashMap(arr1, arr2) {
    // fromEntries solo funciona con array-like par [llave, valor]
    // const hashMap = {}
    // for (let index = 0; index < arr1.length; index++) {
    //     const value = arr1[index]
    //     hashMap[value] = true
    // }
    const hashMap = arr1.reduce((objAccumulator, item) => {
        return {
            ...objAccumulator,
            [item]: true
        }
    }, {})

    for (let index = 0; index < arr2.length; index++) {
        const valor = arr2[index];
        if (hashMap[valor]) {
            return true;
        }
    }

    return false;
}

function containsCommonItemsIncludes(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

console.log(contansComonItemsHashMap(array1, array2));
console.log(containsCommonItemsHashSet(array1, array2));
console.log(containsCommonItemsIncludes(array1, array2));