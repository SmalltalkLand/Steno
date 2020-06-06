import Vue from 'https://cdn.pika.dev/vue@^2.6.11'
export function voo(c){new (Vue.extend(c))({el: this.get(0)})}
export function vooShadow(c){let sf;return this.constructor(this.get().map(sf = e => e.shadowRoot ? sf(e.shadowRoot) : e.attachShadow({mode: 'open'}))).voo(c({
    render: function (h) {return h('div',{ref: 'theRef',nativeOn: {load: this.onLoad}})},
    methods: {
        onLoad(){
            this.$refs.theRef.appendChild(document.createElement('slot'));
        }
    }
}))}