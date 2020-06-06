import * as Rx from 'https://cdn.pika.dev/rxjs@^6.5.5';
export default (evtn,t) => new Rx.Observable(n => {let f;t.addEventListener(evtn,f = n.next.bind(n))})