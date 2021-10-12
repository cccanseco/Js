const { async } = require("asyncawait");

function promiseTimeout(time) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve, time)
    });
}

async function longRunningOperation() {
    return 42;
}

async function run()                       {
    console.log('Start!!');
    await promiseTimeout(2000);

    const response = await longRunningOperation();
    console.log(response);
    console.log('Stop!!');
}

 run();
