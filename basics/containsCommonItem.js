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
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']

function containsCommonitems(arr1, arr2) {

    let set1 = new Set(arr1)

    for (const num of arr2) {
        if (set1.has(num)) {
            return true
        }
    }
    return false
}

console.log(containsCommonitems(array1, array2))
