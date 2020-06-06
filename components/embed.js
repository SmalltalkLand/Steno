import Vue from 'https://cdn.pika.dev/vue@^2.6.11'
export let vEmbed = {
    props: ['Vue','component'],
    render: function(ce){
        return ce('span',[],{ref: 'content',nativeOn: {load: () => {if(this.v)this.v.$destroy(true);this.v = new this.Vue({...this.component,el: this.$refs.content})}}})
}
};
export let vEmbedI = {
    props: ['component'],
    components: {
        embed: vEmbed,
    },
    computed: {
        vue: function(){
            return this.$refs.iframe && this.$refs.iframe.contentWindow.Vue
        }
    },
    methods: {
        onLoad: function(){
            let i = this.$refs.iframe;
            if(!i)return;
            let s;
            i.document.head.appendChild(s = document.createElement('script'));
            s.src = "https://cdn.jsdelivr.net/npm/vue/dist/vue.js";
        }
    },
    template: `
    <embed :Vue = "vue" :component = {component}></embed>
    <iframe ref = "iframe" src = "about:blank" @load = "onLoad"></iframe>
    `
}