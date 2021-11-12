# Singly Link List

En esta sección solo se verán las singly link list, existen dos tipos.
La singly link list es la típica donde en el primer elemento se apunta al segundo 
y así sucesivamente. Donde se aputan es la dirección de memoria.

```
1 --> 2 --> 3 --> 4 --> 5 --> null
```

El null indicará el final de la linked list y permitirá siempre tener
un espacio extra por si deseamos agregar más valores


### Importante

En una singly link list no te puedes regresar una vez llegues a un nodo, solo
seguir adelante.
Cada vez que quieres buscar un valor, se tendrá que iniciar desde el nodo inicial
(nodo inicial = cabeza).

### Ejemplo

Así es como se vería una singly linked list si fuera un objeto:
```JavaScript
let sinlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
};
```