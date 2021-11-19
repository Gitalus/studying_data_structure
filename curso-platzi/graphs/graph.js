/* Graph:
     2 - 0
    / \
   1 - 3
*/

// Edge list
const graph = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3]
];

// Adjacent list
// Se representa la posición del array con sus conexiones
const graph2 = [
    [2],
    [2, 3],
    [0, 1, 3],
    [1, 2]
];

// Hash table
const graph3 = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2]
};

// Adjacent Matrix
// Fijarse que la diagonal siempre será 0 ya que son sus propios indices
const graph4 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];

const graph5 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
};