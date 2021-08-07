from typing import List
# Given an array of size at-least two, find the smallest subarray that needs to
# be sorted in place so that entire input array becomes sorted.

# If the input array is already sorted, the function should return [1, -1], otherwise
# return the start & end index of smallest subarray.

# Input
# [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11]

# Output
# [5, 7]

""" 0. El primer acercamiento puede ser sortear el array de antemano, luego,
comparar cada extremo para ver las diferencias, hasta llegar a un y cada vez
acercandose al centro del array. Esto toma una complejidad de tiempo O(NlogN). """

""" 1. La intuición también nos dice que podría resolverse en una orden de O(N).
Una posible solución lineal es encontrar el menor número en desorden y el mayor.
Luego iterar una segunda vez para determinar en que posición debería ser insertado
el menor número y el mayor. Es posible que obtengamos una solucións O(2N) o O(3N).
Pero la esencia de O() nos dice que sigue siendo una solución lineal. """


def out_of_order(array: List[int], index: int) -> bool:
    """Retorna True si está fuera de orden el número en el índice indicado."""
    x = array[index]
    if index == 0:
        return x > array[1]
    elif index == len(array) - 1:
        return x < array[index - 1]
    return x < array[index - 1] or x > array[index + 1]


def subarray_sort(array: List[int]) -> List:
    """Obtiene el subarray necesario a ordenar, para ordenar por completo el array."""
    MAX = max(array)
    MIN = min(array)
    n_min, n_max = MAX, MIN
    n = len(array)
    for index in range(n):
        if out_of_order(array, index):
            n_min = min(n_min, array[index])
            n_max = max(n_max, array[index])

    if n_min == MAX:
        return [-1, -1]

    left = 0
    while n_min >= array[left]:
        left += 1
    right = len(array) - 1
    while n_max <= array[right]:
        right -= 1
    return [left, right]


print(subarray_sort([1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11]))
