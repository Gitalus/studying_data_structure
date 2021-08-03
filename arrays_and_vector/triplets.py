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
