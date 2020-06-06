export function createObserver(f_,opts){return this.each(n => {let o, f;(n.st_obss || (n.st_obss = [])).push(o = new MutationObserver(f = R.pipe(v => v.map(m => ({
    target: $(m.target),
    addedNodes: this.constructor([].slice.call(m.addedNodes)),
    removedNodes: this.constructor([].slice.call(m.removedNodes)),
})),f_)));o.f = f;f.base = f_;o.opts = opts ;o.observe(n,{...opts})})}
export function destroyObserver(f,opts){return this.each(n => {let it = n.st_obss.filter(o => o.f.base === f && o.opts === opts)[0]; if(!it)return;it.disconnect(); n.st_obss = n.st_obss.filter(i => i !== it);})}
export function isolate(opts){let w, ifr;let v = (i => opts.returnSelf ? this.constructor(i) : w.$(i))
    (this.constructor(this.constructor((w = this.constructor(ifr = document.createElement('iframe'))).attr('src','about:blank').get(0).contentWindow).document.body)
    .append(this.children()).parent().get(0).head).append($((s => {s.type = 'module'; s.innerHTML = `import $ from 'https://cdn.pika.dev/cash-dom@^6.0.1';
    window.$ = $`})(document.createElement('script'))).get(0));this.append(this.constructor(ifr));return v}
export function Q(pf){return this.each(n =>{let o = (n.anim || (n.anim = Promise.resolve())); n.anim = (o.then(pf))})};