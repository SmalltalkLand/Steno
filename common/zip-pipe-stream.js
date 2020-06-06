import * as Rx from 'https://cdn.pika.dev/rxjs@^6.5.5';
import * as Operators from 'https://cdn.pika.dev/rxjs@^6.5.5/operators'
import * as R from 'https://cdn.pika.dev/ramda@^0.27.0';
export default R.unapply(R.pipe(R.apply(Rx.zip),(v => x => x.pipe(v))(Operators.map(R.apply(R.pipe)))))