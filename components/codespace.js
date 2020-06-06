import Vue from 'https://cdn.pika.dev/vue@^2.6.11'
import * as R from 'https://cdn.pika.dev/ramda@^0.27.0';
import Iframe from './Iframe.js'
export default {
    components: {
        iframe: Iframe,
    },
    data: () => ({loadedInternalDiv: null}),
    methods: {
        onILoad(evt){
            this.loadedInternalDiv = evt.target;
        }
    },
    computed: {
        codeEvaluator(){
            return R.pipe(c => (s => {s.type = "module"; s.innerText = c; return s})(document.createElement('script')),(p => R.tap(p.appendChild.bind(p)))(this.loadedInternalDiv.parentNode),n => new Promise(c => n.onload = c))
        }
    },
    template: `<iframe v-slot = "{win}"><script type = "module">import $ from 'https://cdn.pika.dev/cash-dom@^6.0.1';
    window.$ = $</script><div @load = "onILoad"></div></iframe>`,
}