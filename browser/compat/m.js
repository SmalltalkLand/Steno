import * as m from 'https://unpkg.com/mithril/mithril.js'
export default {props: ['m'],template: `<span ref = "theRef" @load = "onload"></span>`,methods: {onLoad(){
    m.mount(this.$refs.theRef,{view: () => this.m})
}}}