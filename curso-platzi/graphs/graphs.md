# Graphs
El grafo puede ser como una combinación de distintas estructuras de datos. Utiliza nodos interconectados.

# Estructura de un Graph
- Node(Vértice)
- Edge(Borde)

Los vértices son lo que conocemos típico como nodos en otras estructuras de datos, y los edges,
son lo que conecta cada nodo, se puede entender como la línea que los une cuando se representan de forma gráfica.

Existen diferentes Graphs:
- Dirigidos
- No dirigidos

En los dirigidos, cada nodo te lleva a otro nodo, por lo que no puedes acceder a un nodo donde no se te dirija.
Lo opuesto sucede con los no dirigidos, donde puedes acceder a todos los nodos adyacentes.

También tenemos a los grafos:
- Ponderados
- No ponderados

En los grafos ponderados, le damos cierto valor o peso a los edges. Esto se puede ver en los aeropuertos, donde cada ruta
tiene un costo distinto en gasolina, por lo tanto, cada edge va a tener un peso distinto.

Por último, están los grafos:
- Cíclicos
- No Cíclicos

En los grafos cíclicos, podemos iniciar desde un nodo, recorrer todo el grafo y regresar al nodo donde iniciamos.