def binary_search(array, search_value):
    """Devuelve el índice donde se encuentra el elemento a buscar. 'None' si no lo encuentra."""
    # Primero, debemos establecer la posición menor y mayor donde el valor
    # a buscar puede estar. Para empezar, la posición corresponde al índice 0
    # del array, mientras el mayor es el último valor del array.
    lower_bound = 0
    upper_bound = len(array) - 1

    # Comenzamos una iteración donde mantenemos una inspección el valor más al
    # medio entre la posición menor y mayor donde donde puede estar nuestro
    # item a buscar
    while lower_bound <= upper_bound:
        # Buscamos el punto medio entre la posición menor y mayor
        midpoint = (lower_bound + upper_bound) // 2

        # Inspeccionamos el valor en el punto medio
        value_at_midpoint = array[midpoint]

        # Si el valor en el punto medio es el que estamos buscamos, entonces terminamos.
        # Si no, cambiamos la posición menor o mayor basándonos en la inspección
        # realizada, si es menor o mayor el elemento a encontrar versus el punto medio.
        if search_value == value_at_midpoint:
            return midpoint
        elif search_value < value_at_midpoint:
            upper_bound = midpoint - 1
        elif search_value > value_at_midpoint:
            lower_bound = midpoint + 1
    return None


print(binary_search([3, 17, 75, 80, 202], 22))  # -> None
