# Requirements Document

## Introduction

Ejercicio de JavaScript para la asignatura DWEC (Desarrollo Web en Entorno Cliente). El programa debe solicitar fechas al usuario mediante ventanas `prompt` en formato `dd/mm/aaaa`, continuar pidiendo fechas hasta que se introduzca una cadena vacía, y mostrar en una nueva ventana la fecha más antigua de todas las introducidas junto con un número aleatorio entero entre 1 y 10.

## Glossary

- **Programa**: La página HTML con su script JavaScript que implementa la funcionalidad descrita.
- **Fecha_Introducida**: Una cadena de texto en formato `dd/mm/aaaa` proporcionada por el usuario a través de un `prompt`.
- **Fecha_Más_Antigua**: La fecha con el valor cronológico más temprano de entre todas las fechas válidas introducidas por el usuario.
- **Ventana_Resultado**: La nueva ventana del navegador abierta mediante `window.open()` donde se muestra el resultado final.
- **Número_Aleatorio**: Un número entero generado aleatoriamente en el rango cerrado [1, 10].
- **Parser_Fechas**: El componente lógico encargado de interpretar y validar cadenas de texto en formato `dd/mm/aaaa` convirtiéndolas en objetos `Date`.

---

## Requirements

### Requirement 1: Solicitud de fechas por teclado

**User Story:** Como estudiante que evalúa el programa, quiero introducir fechas una a una mediante ventanas `prompt`, para que el programa pueda recopilarlas y procesarlas.

#### Acceptance Criteria

1. WHEN el Programa se inicia, THE Programa SHALL mostrar una ventana `prompt` solicitando al usuario que introduzca una fecha en formato `dd/mm/aaaa`.
2. WHEN el usuario introduce una cadena no vacía en el `prompt`, THE Programa SHALL volver a mostrar una nueva ventana `prompt` solicitando otra fecha.
3. WHEN el usuario introduce una cadena vacía o cancela el `prompt`, THE Programa SHALL detener la solicitud de fechas y proceder al cálculo del resultado.
4. WHILE el Programa está solicitando fechas, THE Programa SHALL aceptar la fecha en una única introducción de datos con el formato `dd/mm/aaaa` sin pedir el día, el mes y el año por separado.
5. IF el usuario introduce una cadena no vacía con formato inválido, THEN THE Programa SHALL mostrar un mensaje de error indicando el formato esperado y volver a solicitar una fecha.

---

### Requirement 2: Validación y parseo de fechas

**User Story:** Como estudiante que evalúa el programa, quiero que el programa valide el formato de las fechas introducidas, para que solo se procesen fechas con el formato correcto `dd/mm/aaaa`.

#### Acceptance Criteria

1. WHEN el usuario introduce una cadena con formato `dd/mm/aaaa` válido, THE Parser_Fechas SHALL convertirla en un objeto `Date` comparable cronológicamente mediante los operadores estándar `<`, `>` y `===`.
2. IF el usuario introduce una cadena que no cumple el patrón `dd/mm/aaaa` (exactamente dos dígitos, barra, dos dígitos, barra, cuatro dígitos), THEN THE Programa SHALL mostrar un mensaje de error indicando el formato incorrecto y solicitar una nueva fecha al usuario.
3. IF el usuario introduce una fecha con valores fuera de rango (mes fuera de [01–12], día fuera del rango válido para ese mes y año, incluyendo años bisiestos para febrero, o año fuera del rango [1900–2100]), THEN THE Programa SHALL mostrar un mensaje de error indicando el valor inválido y solicitar una nueva fecha al usuario.
4. THE Parser_Fechas SHALL producir un objeto `Date` a partir de una cadena `dd/mm/aaaa` válida tal que al formatearlo de nuevo en `dd/mm/aaaa` se obtenga la cadena original.

---

### Requirement 3: Cálculo de la fecha más antigua

**User Story:** Como estudiante que evalúa el programa, quiero que el programa identifique la fecha más antigua de todas las introducidas, para verificar que la lógica de comparación de fechas es correcta.

#### Acceptance Criteria

1. WHEN el usuario ha introducido al menos una fecha válida y ha finalizado la entrada, THE Programa SHALL determinar la Fecha_Más_Antigua comparando cronológicamente todos los objetos `Date` obtenidos mediante el operador `<`.
2. IF el usuario no ha introducido ninguna fecha válida antes de finalizar la entrada, THEN THE Programa SHALL mostrar en la Ventana_Resultado un mensaje indicando que no se han introducido fechas válidas, y no mostrará ninguna Fecha_Más_Antigua.
3. WHEN el Programa ha determinado la Fecha_Más_Antigua y existe al menos una fecha válida, THE Programa SHALL mostrar la Fecha_Más_Antigua en formato `dd/mm/aaaa` en la Ventana_Resultado.
4. IF varias fechas comparten el mismo valor cronológico más antiguo, THEN THE Programa SHALL mostrar cualquiera de ellas como Fecha_Más_Antigua.

---

### Requirement 4: Generación de número aleatorio

**User Story:** Como estudiante que evalúa el programa, quiero que el programa genere y muestre un número aleatorio entero entre 1 y 10, para practicar el uso de `Math.random()` en JavaScript.

#### Acceptance Criteria

1. WHEN el Programa ha finalizado la recogida de fechas, THE Programa SHALL generar un Número_Aleatorio entero en el rango cerrado [1, 10] usando `Math.floor(Math.random() * 10) + 1`.
2. WHEN el Programa muestra los resultados en la Ventana_Resultado, THE Programa SHALL mostrar el Número_Aleatorio tanto si existen fechas válidas como si no.

---

### Requirement 5: Presentación del resultado en nueva ventana

**User Story:** Como estudiante que evalúa el programa, quiero que los resultados se muestren en una nueva ventana del navegador, para verificar el uso correcto de `window.open()`.

#### Acceptance Criteria

1. WHEN el Programa ha calculado la Fecha_Más_Antigua y el Número_Aleatorio, THE Programa SHALL abrir una Ventana_Resultado mediante `window.open()` que muestre simultáneamente la Fecha_Más_Antigua (o el mensaje de ausencia de fechas válidas) y el Número_Aleatorio.
2. IF el navegador bloquea la apertura de la Ventana_Resultado mediante `window.open()`, THEN THE Programa SHALL mostrar los resultados mediante `alert()` como alternativa.
