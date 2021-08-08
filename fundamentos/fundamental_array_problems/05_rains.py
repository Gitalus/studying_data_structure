# Buscar por la explicación en google, ya que requiere imagenes para comprenderlo:
# Google: Trapping Rain Water

# Buen ejercicio para usar Javascript y dubujar los cuadrados

# Input
#[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

# Output
# 6

from typing import List


def trap(array):    # add self argument for leetcode
    """Counts how much water is stuck between the bars."""
    n = len(array)
    return sum(
        min((max(array[: i + 1]), max(array[i:]))) - array[i] for i in range(n)
    )


array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

print(trap(array))
