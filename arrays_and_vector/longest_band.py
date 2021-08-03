# Given an array containing N integers, find length of longest band.

# A band is defined as a subsequence which can be reordered in such a manner
# that all elements appear to be consecutive(ie with absolute difference of 1
# between neighbouring elements)

# A longest band is the band (subsequence) which contains maximum integers.

# Input
# [1, 9, 3, 0, 18, 5, 2, 4, 10, 7, 12, 6]

# Output
# 8

# Explanation
# Largest subset containing consecutive numbers is {0, 1, 2, 3, 4, 5, 6, 7}


""" 0. Una posible solución es ordenar el array para determinar, en orden, si
cada siguiente elemento continúa la banda. Lo podemos hacer con O(logN) + O(N). """

""" 1. Lo anterior se puede mejorar sin necesidad de hacer un sort. Si transformamos
el array a un unordered set, tendremos la capacidad de hacer lookahead en tiempo
O(1). Luego, solo tenemos que encontrar cada elemento que no tenga predecesor y
buscar el siguiente elemento en el set. Esto nos da un O(N) + O(X) + O(Y)... que
se traduce simplemente a O(N). """
