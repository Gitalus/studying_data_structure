# Buscar por la explicación en google, ya que requiere imagenes para comprenderlo:
# Google: Trapping Rain Water

# Buen ejercicio para usar Javascript y dubujar los cuadrados

# Input
#[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

# Output
# 6

from typing import List


def trap(array: List[int]) -> int:
    n = len(array)
    left_arr = [array[0]]
    right_arr = [0] * n
    right_arr[n - 1] = array[n - 1]

    for i in range(1, n):
        left_arr.append(max(left_arr[i - 1], array[i]))
        right_arr[n - i - 1] = max(array[n - i - 1], right_arr[n - i])

    sum_water = 0
    for i in range(n):
        sum_water += min(left_arr[i], right_arr[i]) - array[i]
    return sum_water


array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

print(trap(array))
