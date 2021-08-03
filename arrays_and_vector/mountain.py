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
    i = 1
    while i < n - 1:
        # check array[i] is a peak
        if array[i] > array[i - 1] and array[i] > array[i + 1]:
            count = 1
            j = i
            # Cuenta hacia atrás
            while j >= 1 and array[j] > array[j - 1]:
                j -= 1
                count += 1
            # Cuenta hacia adelante
            while i < (n - 1) and array[i] > array[i + 1]:
                i += 1
                count += 1
            largest = max(largest, count)
        else:
            i += 1
    return largest


array = [5, 6, 1, 2, 3, 4, 5, 4, 3, 2, 0, 1, 2, 3, -2, 4]

print(highest_mountain(array))
