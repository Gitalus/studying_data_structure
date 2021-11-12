## Hash Tables

En los hash tables, la 'key' pasa por una 'Hash function', esta function transforma
la key que le pasamos en un número. Siempre que le pasemos la misma key,
se generará el mismo número (hash), por esta razón los hash tables son rápidos
para acceder a los valores.
Pero estos valores se guardan en algo llamado 'Buckets', que es una tabla de valores con un respectivo hash,
estos hash se guardan en el 'Bucket' al pasar una key por una hash function, luego
serán la referencia para acceder rapidamente al valor.

Es decir, pasamos una key, se generará un hash, ese hash permitirá un rápido acceso
al dato que guardamos como si fuera un array recibiendo el index.

Esto es muy rápido.

### Métodos:
- insert
- search
- delete

Con los hash tables se pueden generar problemas como colision the hash tables,
que es cuando elementos distintos generan el mismo hash, por lo que dos elementos
distintos apuntarán al mismo valor, además, se tratará de guardar otro valor dentro
de un hash ya existente en el 'bucket'. Esto no se puede evitar.


