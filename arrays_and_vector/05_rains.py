# Buscar por la explicación en google, ya que requiere imagenes para comprenderlo:
# Google: Trapping Rain Water2b343b

# Buen ejercicio para usar Javascript y dubujar los cuadrados

# Input
#[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

# Output
# 6

from typing import List


def count_stuck_water(array: List[int]) -> int:
    """Counts how much water is stuck between the bars."""
    n = len(array)
    left_right = [(max(array[:i+1]), max(array[i:])) for i in range(n)]
    water = (min(left_right[i]) - array[i] for i in range(n))
    return sum(water)


array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

print(count_stuck_water(array))
