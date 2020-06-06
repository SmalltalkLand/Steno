import {identity} from 'https://cdn.pika.dev/ramda@^0.27.0'
export default (...fl) => fl.reduce((f,vf) => vf(f),identity)
export let wrapper = f => f2 => v => f(f2(v));