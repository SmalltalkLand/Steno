import Polyfill from './deno-polyfill.js'
let d;
try{d = Deno}catch(err){};
export default d || Polyfill