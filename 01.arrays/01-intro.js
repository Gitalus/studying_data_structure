const strings = ['a', 'b', 'c', 'd']
// (32bits): 4 bytes * 4 letras =  16 bytes


// push O(1)
strings.push('e')

// pop O(1)
strings.pop()

// unshift O(n)
strings.unshift('z')

// shift O(n)
// Se llama shift porque tiene que correr todos los valores para insertar el primero
strings.shift()