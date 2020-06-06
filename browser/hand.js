export let hand;
let allElems = (elem = document.body) => {
return [elem,...[].concat(...[].slice.call(elem.childNodes).filter(n => n.nodeName.toLowerCase() !== 'slot').map(allElems)),...allElems(elem.shadowRoot)]
}
let includesP = function (x, y) {
    return this.x <= x && x <= this.x + this.width &&
           this.y <= y && y <= this.y + this.height;
};
var indexOfMaxValue = a => a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
let rootIndex = (elem,start = 0) => elem.parentNode ? rootIndex(elem.parentNode,start + 1) : elem.host ? rootIndex(elem,host,start + 1) : start;
let inited;
export async function initHand(){
    try{document}catch(err){return;};
    if(inited)return;
    inited = true;
    hand = document.createElement('div');
    document.body.appendChild(hand);
    hand.classList.add('st-hand');
    hand.isHand = true;
    hand.rpl = function(elem){

    };
    Object.defineProperty(hand,'xy',{
        get: () => [Number(hand.style.left.toString().replace('px','')),Number(hand.style.top.toString().replace('px',''))],
        set: v => {hand.style.left = v[0].toString() + 'px'; hand.style.top = v[1].toString() + 'px';}
    });
    let done;
    let rpl;
    (rpl = Object.assign(Object.create(document.body.requestPointerLock),{st_in_hand: true})).call(document.body);
    document.addEventListener('pointerlockchange', lockChangeAlert, false);
    function lockChangeAlert() {
        if(document.pointerLockElement === document.body) {
          console.log('The pointer lock status is now locked');
          // Do something useful in response
        } else {
          console.log('The pointer lock status is now unlocked');
          // Do something useful in response
          if(done)return;
          rpl.call(document.body);
        }
      }
    document.body.addEventListener('mousemove',evt => {
        hand.xy = (o => [o[0] + evt.movementX,o[1] + evt.movementY])(hand.xy);
    })
    let e = evt => {
        let [x,y] = hand.xy;
        let elems = allElems();
        let activeElems;
        let activeElemsI = indexOfMaxValue((activeElems = elems.filter(e => includesP.call(e.getBoundingClientRect(),x,y))).map(rootIndex));
        let activeElem = activeElems[activeElemsI];
        activeElem.dispatchEvent(evt);
    }
    document.body.addEventListener('click',e);
    document.body.addEventListener('contextmenu',e);
    HTMLElement.prototype.requestPointerLock = (old => function(...args){
        let callee = arguments.callee;
        if(callee.st_in_hand)return old.call(this,...args);
        return hand.rpl(this,...args);
    })(HTMLElement.prototype.requestPointerLock);
    self.nhand = hand;
    return hand
}