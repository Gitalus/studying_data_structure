# Given an array of size N, fin the minimum number of swaps needed to make the arrays
# as sorted.

# Input
# [5, 4, 3, 2, 1]

# Output
# 2

""" 0. Primero necesitamos saber en qué posición deben estar los números del array.
Para eso necesitamos hacer un sort del array. """


from typing import List


def countMinSwaps(arr: List[int]) -> int:
    n = len(arr)
    ans = 0
    # Saber la posición correcta de los elementos
    # Guardar los indices actuales
    pares = list(zip(arr, range(n)))
    pares.sort()

    visited = [False] * n

    for new_position in range(n):
        old_position = pares[new_position][1]
        if visited[new_position] is True or old_position == new_position:
            continue
        node = new_position
        cycle = 0

        while not visited[node]:
            visited[node] = True
            next_node = pares[node][1]
            node = next_node
            cycle += 1
        ans += cycle - 1
    return ans


print(countMinSwaps([5, 4, 3, 2, 1]))
