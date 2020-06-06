import * as R from 'https://cdn.pika.dev/ramda@^0.27.0';
export let htable = {};
export let handle = v => {let r = Math.random(); htable[r] = v; return r};
let dom = ({scope}) => ({})
export default ({scope}) => ({get dom(){
    let v = dom({scope});
    //dom = () => v;
    return v;
},h: {
    get: R.unapply(R.pipe(R.apply((o,k) => htable[o][htable[k]]),handle)),
    cons: R.unapply(R.pipe(R.apply((a,b) => [htable[a],...htable[b]]),handle)),
    apply: R.unapply(R.pipe(R.apply((f,va) => htable[f](...htable[va])),handle)),
    identity: R.pipe(() => [],handle),
    addH: R.pipe(handle),
}});