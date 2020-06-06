import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import './njx.js'
/*import $ from 'https://cdn.pika.dev/cash-dom@^6.0.1';
import * as R from 'https://cdn.pika.dev/ramda@^0.27.0'
import pipeStream from '../common/pipe-stream.js';
import '../$s/index.js'
import '../common/init-db.js'
import 'https://brython.info/src/brython.js'
import 'https://brython.info/src/brython_stdlib.js'
import hinit from './hand.js'
let Vue;
hinit();
let impd = () => Promise.all([import('../components/desktop.js'),import('https://cdn.pika.dev/vue@^2.6.11')]).then(a => [(self.Vue = Vue = a[1]).extend(a[0])]);
self.onload = () => {
  brython();
let c = $(document.body).children().clone();
c.clone().remove();
let s;
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', {scope: './'})
    .then((reg) => {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch((error) => {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  }
$(document.body).addChild(s = $(`<div class = "boot">
<div data-action = "boot">Boot</div>
</div>`));
let iv;
impd().then(v => iv = v);
let a = async action => {
if(action === 'boot'){
    c.appendTo($(document.body));
    //impd().then(v => {
      while(!iv){await new Promise(requestAnimationFrame)}
        let e = $(`<div></div>`).appendTo($(document.body));
        let vv = new iv[0]({el: e});
        vv.$el = e;
    //});
}

};
s.addEventListener('click',evt => {
    a(evt.target.getAttribute('data-action'));
});
};*/
window.onload = () => {
let d;
d = document.createElement('div');
document.body.appendChild(d);
new Vue({
  el: (d),
  template: `<div><span></span></div>`,
});
};