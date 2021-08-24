array = [54, 2, 3, 56, 12, 91, 18, 83, 3, 67, 42, 32, 21, 1, 9, 74, 57, 89]
j = len(array)
while j > 0:
    i = 1
    while i < j:
        if array[i - 1] > array[i]:
            array[i - 1], array[i] = array[i], array[i - 1]
        i += 1
    j -= 1
print(array)
