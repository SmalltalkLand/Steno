import './imp.js'
import {extend} from '../klasses.js'
export default (Sim = Sim) => {
    let v = extend(Sim,function(){

    });
    v.prototype.addEntity = (o => function(...args){
        return o(...args.map(o => new Proxy(o)));
    })(v.prototype.addEntity);
    v.prototype.isSecure = true;
    return v
}