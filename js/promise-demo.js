function promiseTimeout(ms) {
    return new Promise ((resolve, reject) => {
        let aleatorio = Math.round(Math.random() * 2);
        console.log (aleatorio);
        // eslint-disable-next-line no-unused-expressions
        aleatorio === 0 ? setTimeout(resolve, ms) : setTimeout(reject, ms); 
        
    });
}

promiseTimeout(2000).
    then(() => {
        console.log('Done!!');
        return promiseTimeout(5000);
    }).
    then(() => {
        console.log('Also done!!');
        return Promise.resolve(42);
    }).
    then((result) => {
        console.log(result);
    }).
    catch(() => {
        console.log('Error!');
    })