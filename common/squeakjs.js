import "https://squeak.js.org/squeak.min.js"
export function runSqueak(...args){return new Promise(c => {let d = Object.getOwnPropertyDescriptor(SqueakJS,'vm');
Object.defineProperty(SqueakJS,'vm',{get: () => null,set: v => {c(v); Object.defineProperty(SqueakJS,'vm',d);}});
SqueakJS.runSqueak(...args)})}
export function getStack(vm){let p = vm.pop(); if(p){let a = [p,...getStack(vm)]; vm.push(p); return a}; vm.sp++; return []}
export async function vmDebuggingLoop(vm,getTraps){let messager;while(true){
    let {onLoop} = getTraps();
    await new Promise(requestAnimationFrame);
    await onLoop();
    let s = getStack(vm);
    let f0;
    await Promise.all([...s.filter(v => v.st_isRequest).map(x => x.pointers).map(f0 = async p => {
        if(p[0] === 0x20){p[1].jsObject = vm;};
        if(p[0] === 0xF2){await Promise.all([...p[1].pointers.map(f0)])};
        if(p[0] === 0x21){p[4].jsObject = p[1].pointers[p[2] ? 'push' : 'pop'](p[3])}
        if(p[0] === 0xF8){messager = p[1].jsObject}
        if(p[0] === 0x22){let ff;let pp = p[2].pointers.map(p => p.jsObject);p[1].jsObject = await (ff = async () => await Promise.race([runSqueak(...pp),new Promise(c => setTimeout(c,20000)).then(() => ({reload: ff}))]))();}
        p[0] = 0x00;
    })])
}}