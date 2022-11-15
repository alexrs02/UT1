const text = `Hola Manz,

Te escribo para contarte que Manz no me parece
un nombre apropiado para una persona.

Deberías ser un gato.

Atentamente,
Manz (el gato)`

const regexp = /M..z/g;

regexp.lastIndex      // 0
regexp.test(text);    // true
regexp.lastIndex      // 9 (primera línea)
console.log(regexp.lastIndex)
regexp.test(text);    // true
regexp.lastIndex      // 45 (tercera línea)
console.log(regexp.lastIndex)
regexp.test(text);    // true
regexp.lastIndex      // 138 (última línea)
console.log(regexp.lastIndex)
regexp.test(text);    // false (no encuentra más, reinicia búsqueda)
console.log(regexp.test(text))
regexp.lastIndex      // 0console.log(regexp.lastIndex)
console.log(regexp.lastIndex)
