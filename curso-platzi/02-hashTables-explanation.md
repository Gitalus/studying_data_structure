## Hash Tables

En los hash tables, la 'key' pasa por una 'Hash function', esta function transforma
la key que le pasamos en hash, similar a un index de array. Siempre que le pasemos la misma key,
se generará el hash, por esta razón los hash tables son rápidos para acceder a los valores,
ya que se le pasa una key, se genera un hash, y ese hash apunta a una dirección de un 'Bucket',
que se accede rapidamente a él, tal como en los arrays.

Es decir, pasamos una key, se generará un hash, ese hash permitirá un rápido acceso
al dato que guardamos.

Esto es muy rápido.

### Métodos:
- insert
- search
- delete

Con los hash tables se pueden generar problemas como colision the hash tables,
que es cuando elementos distintos generan el mismo hash, por lo que dos elementos
distintos apuntarán al mismo valor, además, se tratará de guardar otro valor dentro
de un hash ya existente en el 'bucket'. Esto no se puede evitar.


