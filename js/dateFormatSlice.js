// format from M/D/YYYY to YYYYMMDD


function formatDate(userDate) {
    const fecha = new Date(userDate);
    return fecha.getFullYear().toString() + ('0' + (fecha.getMonth() + 1).toString()).slice(-2) + ('0' + fecha.getDate().toString()).slice(-2);
}

console.log(formatDate("01/01/2014"));
