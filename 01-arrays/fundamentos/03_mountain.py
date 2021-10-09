# Write a function that takes input an array of distinct integers, and returns
# the length of the highest mountain.

#    - A mountain is defined as a set of integers that are strictly increasing until
#        they reach a peak, at which they start to strictly decreasing.

#    - At least 3 numbers are required to form a mountain.

# Input
# [5, 6, 1, 2, 3, 4, 5, 4, 3, 2, 0, 1, 2, 3, -2, 4]

# Output
# 9

from typing import List


def highest_mountain(array: List) -> int:
    """Encuentra la montaña más larga dado un array."""
    n = len(array)
    largest = 0
    index = 1
    while index < n - 1:
        # Revisa si el número en array[index] es una cima
        if array[index] > array[index - 1] and array[index] > array[index + 1]:
            count = 1
            left_index = index
            # Cuenta hacia atrás
            while left_index >= 1 and array[left_index] > array[left_index - 1]:
                left_index -= 1
                count += 1
            # Cuenta hacia adelante
            while index < (n - 1) and array[index] > array[index + 1]:
                index += 1
                count += 1
            largest = max(largest, count)
        else:
            index += 1
    return largest


array = [5, 6, 1, 2, 3, 4, 5, 4, 3, 2, 0, 1, 2, 3, -2, 4]

print(highest_mountain(array))
