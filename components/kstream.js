import Vue from 'https://cdn.pika.dev/vue@^2.6.11'
import * as Rx from 'https://cdn.pika.dev/rxjs@^6.5.5';
import * as Operators from 'https://cdn.pika.dev/rxjs@^6.5.5/operators'
import * as R from 'https://cdn.pika.dev/ramda@^0.27.0';
import { Subject } from 'rx';
export default {
    props: ['debug'],
    data: () => ({dInput: ''}),
    subscriptions(){
        this.k$ = new Rx.Subject();
        return {
            k$: this.k$
        }
    },
    methods: {
        dEvalC: function(){
            this.k$.next(this.eval(this.dInput));
            this.dInput = '';
        },
        push: function(v){
            this.k$.next(v);
        }
    },
    computed: {
        observables: function(){return this.$observables;},
        eval: function(){return s => eval(s)},
    },
    template: `<span>
    <span v-if = "debug">
    <input v-model = "dInput" type = "text"></input>
    <button @click = "dEvalC"></button>
    </span>
    <slot v-bind:observables = "observables" :push = "push"></slot>
</span>`,
}