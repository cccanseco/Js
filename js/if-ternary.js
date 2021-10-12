const status = 200;

/*
 * let message = '';
 *  if (status === 200) {
 *      message == 'Ok!';
 *  } else  {
 *      message == 'Error!';
 *  }
 */

const message = (status === 200) ? 'OK!' : 'Error!';
console.log(message);