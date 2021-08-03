# Pairs
# Find the pairs of distinct integer that sum a S result

# Input:
# array = [10, 5, 2, 3, -6, 9, 11]
# S = 4

# Output:
# [10, -6]

""" 0. Fuerza bruta. O(N^2) """

""" 1. Si tuvieramos un sorted array, podríamos identificar cual es el número
que nos falta desde el primer elemento y hacer una búsqueda binaria.
Reduciendo el Big O(N^2) a O(N LogN), ya que en cada valor N se realizará
una búsqueda binaria. """

""" 2. Si tuvieramos un hash map que contenga todos los valores, podríamos
hacer la búsqueda en O(1), a diferencia de O(logN). De esta forma podríamos
resolver el problema en O(N). """

array = [10, 5, 2, 3, -6, 9, 11]
sum = 4
unordered_set = set()  # Es como un hash map sin llaves
resultado = []
for num in array:
    x = sum - num
    if x in unordered_set:
        resultado.append((num, x))
    unordered_set.add(num)

print(resultado)
