import './imp.js'
import * as m from 'https://unpkg.com/mithril/mithril.js'
export default {
    desktop: null,
    simulation: null,
    uiChildren: [],
    async start(){
        while(!this.desktop)await new Promise(requestAnimationFrame);
        this.desktop.$sim = this;
        this.desktop.ms.push(this.ms = f => v => m('span',f(v),m(this.mRender)));
        this.tryStop();
    },
    async tryStop(){
        let d = this.desktop;
        while(this.desktop)await new Promise(requestAnimationFrame);
        d.$sim = null;
        d.ms = d.ms.filter(m => m !== this.ms);
        delete this.ms;
    },
    get mRender(){return n => {
        return m('span',...this.uiChildren.map(c => m(c.mRender)))
    }}
}