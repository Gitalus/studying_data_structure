from typing import List
# Given an array containing N integers, and a number S denoting a target sum.

# Find all distinct integers that can add up to form target sum. The numbers in
# each triplet should be ordered in ascending order, and triplets shoeuld be
# ordered too.

# Return an empty array if no such triplet exists.

# Input
# array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15]
# target = 18

# Output
# [[1, 2, 15],
#  [3, 7, 8],
#  [4, 6, 8],
#  [5, 6, 7]]

""" 0. Fuerza bruta O(N^3) """

""" 1. Por cada N número dado, encontrar un par de integrales tal que su suma
más la suma con N, se obtenga el objetivo. O(N^2) """

""" 2. Si trabajamos con un sorted array, podemos encontrar pares de integrales
sumando cada extrema, si la suma sobrepasa el target, reducimos el index del extremo mayor,
si la suma es inferior al target, se aumenta el index del extremo menor. Por lo tanto,
es posible encontrar trios de números en tiempo O(N^2). """


def extremes_pairs(array: List[int], target: int) -> List:
    left = 0
    right = len(array) - 1
    while left < right:
        suma = array[left] + array[right]
        if suma == target:
            return [array[left], array[right]]
        elif suma > target:
            right -= 1
        elif suma < target:
            left += 1
    return []


def triplets(array: List[int], targetSum: int) -> List[List]:
    n = len(array)
    array.sort()
    resultados = []
    # Tomar cada array[i], pair sum el resto del array
    # El resto del array debe contener al menos dos números
    for i in range(n - 3):
        j = i + 1
        k = n - 1

        # Método de dos extremos
        while j < k:
            current_sum = array[i]
            current_sum += array[j]
            current_sum += array[k]

            if current_sum == targetSum:
                resultados.append([array[i], array[j], array[k]])
                j += 1
                k -= 1
            elif current_sum > targetSum:
                k -= 1
            else:
                j += 1
    return resultados


array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15]
target = 18

print(triplets(array, target))
