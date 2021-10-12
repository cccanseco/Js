const Fecha = new Date();
const Win95Launch = new Date(1995, 7, 24);
const demoFecha = new Date();

demoFecha.setMonth(3);

console.log(demoFecha);
console.log(Fecha);
console.log(Win95Launch);

console.log(`dia de la semana ${demoFecha.getDay()}`);
console.log(`dia del mes ${demoFecha.getDate()}`);
