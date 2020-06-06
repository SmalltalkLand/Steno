import {extend} from '../../common/klasses.js'
import './load.js'
import {wpipe,wrapper} from '../../common/wpipe.js'
import * as R from 'https://cdn.pika.dev/ramda@^0.27.0'
export let breakpointMap = {}
export let MemoryMananagement = extend(GameBoyAdvanceMMU,function(){
this.bmKey = Symbol();
breakpointMap[this.bmKey] = {running: false};
});
export let mma = [[]];
Object.keys(MemoryMananagement.prototype).filter(k => k.startsWith('store') || k.startsWith('load')).forEach(k => {
    let o = MemoryMananagement.prototype[k];
    MemoryMananagement.prototype[k] = function(ofs,v){
        let n = k.replace('load','').replace('store','');
        return R.unapply(wpipe(...[
            wrapper(R.apply(o)),
            f => v => mma[0][0] === f && mma[0][1] === v[0] ? (mma[1] ++) === 10 ? null : f(v) : (mma[0] = [f,v[0]]) && ((mma[1] = 0) ? true : true) && f(v),
            o => k.startsWith('store') ? this.av ? this.av.store(Number(n),o) : o : k.startsWith('load') ? this.av ? this.av.load(Number(n),o) : o : this.av ? (this.av[k] || (v => v))(o) : o,
        ])).call(this,ofs,v);
    }
});
export let GBA = extend(GameBoyAdvance,function(){
    self.queueFrame = (o => (nf => f => o(nf = () => {if(Object.keys(breakpointMap).map(k => breakpointMap[k]).filter(v => !v.running))return o(nf);return f()})))(self.queueFrame);
    Object.setPrototypeOf(this.mmu,MemoryMananagement.prototype)
})