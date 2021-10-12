// format from M/D/YYYY to YYYYMMDD

var date = new Date(2018, 2, 1);
var date2 = date.toLocaleDateString("en-GB", { // you can use undefined as first argument
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
});// outputs “01/03/2018”
console.log(date2);
console.log(date2.slice(-4) + date2.substring(0, 2) + date2.substring(3, 5));