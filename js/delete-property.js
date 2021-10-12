function removeProperty(obj, prop) {
    if (obj[prop] !== undefined) {
        delete obj[prop];
        return true;
    } else {
        return false;
    }
}
let pruebaClass = {
    id: 1,
    desc: "descripcion"
};
console.log(removeProperty(pruebaClass, "desc"));
console.log(pruebaClass);
