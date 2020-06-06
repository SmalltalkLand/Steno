import React, {useEffect} from 'https://cdn.pika.dev/react@^16.13.1';
import ReactDOM from 'https://cdn.pika.dev/react-dom@^16.13.1';
let vra = r => ({
    data: () => ({ReactC: r,rci: null}),
    methods: {
        loaded: function(){
            let r = this.$refs.theRef;
            this.rci = r;
            ReactDOM.render(React.createElement(this.ReactC,{vue: this}),r);
        }
    },
    template: `<span ref = "theRef" v-on:load = "loaded"></span>`
});
let vrac = Object.assign(vra(props => {
    let vrc = props.vue.rc;
    return React.createElement(vrc,props.vue.rprops);
}),{props: ['rc','rprops']});
let dlink = props => {

    return props.children
}
export let vcompat = {
    components: {
        vrac: vrac,
    },
    methods: {
        c(props){
            let tag = Math.random();
            useEffect(() => {
                let o = this.rtag;
                this.rtag = tag;
                return () => {
                    this.rtag = o;
                }
            },[tag])
            return React.createElement(dlink,{desktop: this.desktop},React.createElement(props.component,props.passedProps))
        }
    },
    template: `<vrac :rc = "c" :rprops = "{component,passedProps}"></vrac>`,
    props: ['component','passedProps'],
    data: () => ({rtag: null}),
    computed: {
        desktop(){
            return this.$parent.isDesktop && this.$parent
        }
    }
}
export function useVon(v,name,h){
    useEffect(() => {
        v.$on(name,h);
        return () => {
            v.$off(name,h);
        }
    })
}