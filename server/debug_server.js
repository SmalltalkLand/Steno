import * as Rx from 'https://cdn.pika.dev/rxjs@^6.5.5';
import * as Operators from 'https://cdn.pika.dev/rxjs@^6.5.5/operators'
export default (sn,sd) => Rx.merge(sn.pipe(Operators.map(x => {x.debug = false; return x})),sd.pipe(Operators.map(x => {x.debug = true; return x})))