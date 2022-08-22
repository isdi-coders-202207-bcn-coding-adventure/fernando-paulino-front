CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

-Para evitar que se re-renderize la función que lleva el hook evitando nuevas renderizaciones en el componente. El hook solo será llamado si alguna de sus dependencias se cambia y solo se renderizará en este caso.
