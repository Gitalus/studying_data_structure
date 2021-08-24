array = [54, 2, 3, 56, 12, 91, 18, 83, 3, 67, 42, 32, 21, 1, 9, 74, 57, 89]


def selectionSort(array):
    for i in range(len(array) - 1):
        lowestValueIndex = i
        for j in range(i + 1, len(array)):
            if array[j] < array[lowestValueIndex]:
                lowestValueIndex = j
        if lowestValueIndex != i:
            array[i], array[lowestValueIndex] = array[lowestValueIndex], array[i]
    return array


print(selectionSort(array))
