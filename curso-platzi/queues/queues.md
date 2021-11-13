# Queue

## Descripción

Queues o colas, son una estructura de datos de tipo FIFO, es decir, first in, first out.
En este sentido es muy similar al stack, pero sale primero el primero que entró.
Se asemeja a una fila de espera en un banco o similar.
Poseen los siguientes métodos:
- Crear
- Encolar
- Desencolar (Eliminar)
- Frente (Consultar)

# Circular queues

Buscan eliminar el problema de memoria que se genera cuando se hace un dequeue
en los primero elementos, ya que en ciertos lenguajes, no se ejecuta el gargabe collector y ese
espacio de memoria que se dejó de usar queda ocupado.

Para solucionar esto, el circular queue hace que cuando la cola (REAR) llegue al final + 1,
se le asigne el primer indice, para reocupar el indice que estaba liberado, en el primer caso
sería indice 0.
Para esto, ya no se le asigna un indice directamente de 0 a n, sino que se usa el operador módulo
para saber cuando sobrepasa el final: REAR = PREV_REAR + 1 % N. Es así, que se le asignará
el indice normal como siempre se ha hecho, pero al llegar al final pasará a 0.

Inicialmente, el FRONT y REAR tienen un valor de -1. Es decir, que cada vez que se haga un checkeo si la queue está vacía,
se reiniciarán los valores a -1 de los dos si lo está.

Para checkear si la queue está llena, se verifica que el FRONT esté en el indice 0, y el REAR tenga un indice de: N - 1.
El otro caso de que esté lleno es FRONT = REAR + 1. Esto quiere decir que el REAR se reinició y comenzó desde 0, por lo que en algún
momento puede llegar al indice anterior del FRONT.