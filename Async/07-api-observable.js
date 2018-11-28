const { Observable } = require('rxjs');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(delayMs);
    }, delayMs);
  });
}

interval(1000)
  .subscribe((delay) => {
    console.log(delay + 'ms');
  });
