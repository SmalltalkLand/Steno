
import * as Operators from 'https://cdn.pika.dev/rxjs@^6.5.5/operators'
import { readFileStr } from 'https://deno.land/std/fs/mod.ts';
import rxserver from './rxserver.js'
import debug from './debug_server.js'
import {body,h1,p,div} from "https://deno.land/x/ssr/index.ts";
import color from "https://deno.land/x/colors/index.ts";
let default_ = debug(rxserver({port: '3001'}),rxserver({port: '63001'}));
let fs = default_.pipe(Operators.filter(r => r.url.startsWith('/fs/')),Operators.map(r => ({url: (v => r.debug ? v : v.replace('..','.'))(r.url.slice(4)),respond: r.respond.bind(r)})));
fs.subscribe(async ({url,respond}) => {
let s = await readFileStr('../' + url);
respond({body: s})
});
let template = default_.pipe(Operators.filter(r => r.url === '/template'))
template.subscribe(async ({respond}) => {
    respond({body: body({},div({'data-colors': JSON.stringify({...color})}))})
})