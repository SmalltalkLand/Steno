import Vue from 'https://cdn.pika.dev/vue@^2.6.11'
import React, {useEffect, useState, useMemo} from 'https://cdn.pika.dev/react@^16.13.1';
import * as R from 'https://cdn.pika.dev/ramda@^0.27.0';
import ReactDOM from 'https://cdn.pika.dev/react-dom@^16.13.1';
import {vEmbed, vEmbedI} from './embed.js'
import kstream from './kstream.js'
import {vcompat, useVon} from '../browser/compat/nodact.js'
import {wpipe,wrapper} from '../common/wpipe.js'
import mc from '../browser/compat/m.js'
import objs from '../common/objs.js'
import * as m from 'https://unpkg.com/mithril/mithril.js'
import gbav from '../common/gbav.js'
import simDesk from '../common/sim/sdesktop.js'
import sav from '../common/sim/sav.js'
let ds = 'st-desk'
let duiw = {
    template: `<slot></slot>`
}
let dui = {
    data: () => ({duiw}),
    computed: {
        reactC(){
            return props => {
                return null
            }
        }
    },
    template: `<slot :wrap = "duiw" :reactC = "reactC"></slot>`
}
export default {
    data: () => ({appInstances: [],ui: dui,isDesktop: true,$el: null,tta: [],$sim: null,gbavObjs: {},ms: []}),
    methods: {
        async initSim(s){
            let d;
            if(this.$sim)this.$sim.desktop = null;
            while(this.$sim)await new Promise(requestAnimationFrame);
            s.addEntity(d = Object.create(simDesk));
            if(!s.isSecure)Object.setPrototypeOf(s,sav(s.consructor).prototype);
            d.desktop = this;
            d.simulation = s;
        }
    },
    computed: {
        Vue: () => Vue,
        GBav(){
            return new Proxy(gbav ({desktop: this}),{get: (o,k) => R.unapply(R.pipe(R.apply(o[k]),v => (this.gbavObjs[k] || []).reduce((f,v) => f(v),R.identity)(v)))})
        },
        rstore(){
            return props => {
                let tracka = useState();
                tracka[0] = (o => () => o)(tracka[0]);
                tracka = objs(tracka,[() => this.tta,v => this.tta = v],ds + '-track');
                useVon(this,ds + '-set-od',od => {

                });
                let uiS = useMemo(() => props.uiS,[tracka[0]()]);
                let uiR = useMemo(() => R.pipe(uiS.reactC,v => v.pos ? v : null),[uiS]);
                return React.createElement(React.Fragment,{},[React.createElement(uiR,{self: this})]);
            }
        },
        mco(){
            return wpipe(...[wrapper(n => {
                self.gb && self.gb.setAVProvider(this.GBav);
            }),...this.ms])
        }
    },
    components: {
        embedI: vEmbedI,
        embed: vEmbed,
        kstreams: kstream,
        vcompat,
        mc,
    },
    mounted(){
        this.od = self.__desktop;
        self.__desktop = this;
        this.$emit(ds + '-set-od',this.od);
    },
    beforeDestroy(){
        self.__desktop = this.od;
    },
    template: `<div>
<kstream v-slot = "ks" ref = "ks">
<component :is = "ui" v-slot = "uiS" ref = "ui">
<vcompat :component = "rstore" :passedProps = "{uiS: uiS}"></vcompat>
    <template v-for = "instance in appInstances">
<component :is = "uiS.wrap" :instance = "instance">
    <component v-if = "instance.desktop === this && instance.$ !== undefined" :is = "instance.$"></component>
    <embed v-else-if = "instance.Vue !== undefined && instance.$ !== undefined" :component = "instance.$"></embed>
    <embedI v-else-if = "instance.$ !== undefined" :component = "instance.$"></embedI>
    <vcompat v-else-if = "instance.ReactC !== undefined" :component = "instance.ReactC" :passedProps = "{}"></vcompat>
    <mc v-else-if = "instance.m !== undefined" :m = "instance.m"></mc>
    <div v-else></div>
</component>
    </template>
    </component>
    </kstream>
    </div>`
}