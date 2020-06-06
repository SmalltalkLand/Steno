import * as Rx from 'https://cdn.pika.dev/rxjs@^6.5.5';
import { serve } from "https://deno.land/std@v0.42.0/http/server.ts";
export default opts => new Rx.Observable(async n => {
let s = serve(opts);
for await (const req of s) {
    n.next(req);
}
})