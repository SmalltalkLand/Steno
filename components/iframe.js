import Vue from 'https://cdn.pika.dev/vue@^2.6.11'
export default {
    template: `<iframe ref = "theRef" src = "about:blank" v-on:load = "onload"></iframe>`,
    computed: {
        iframe(){
            return this.$refs.theRef
        }
    },
    methods: {
        onload(){
            let i = this.iframe;
            let c = this.$slots.default;
            if(this.$v)this.$v.$destroy(true);
            this.$v = new Vue({render: h => c({win: i.contentWindow}),el: i.contentWindow.document.body});
        }
    }
}