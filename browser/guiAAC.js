import '../common/njx.js'
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
let aach;
Function.aac(aach = () => ({haac: c => {
    let win = open('about:blank','_blank','left=0,top=0,width=300,height=700,memubar,location');
    let d = win.document;
    let s;
    d.body.appendChild(s = document.createElement('script'));
    s.type = 'module';
    s.src = location.origin + '/common/njx.js';
    s.onload = () => {
        win.Function.aac(aach);
        let v;
        d.appendChild(v = document.createElement('div'));
        let ue = new Vue({
            el: v,
            data: {f: c},
            methods: {
                yes(){
                    ue.$destroy(true);
                    win.close();
                    c();
                },
                no(){
                    ue.$destroy(true);
                    win.close();
                }
            },
            template: `<form @submit.prevent = "">AAC to run {{f}}<button @click = "yes()">Yes</button><button @click = "no()">No</button></form>`
        })
    }
}}))