const { dp } = require("./dp");

let inF = false;
Function.stackFrames = [];
let doc;
try{doc = document}catch(err){};
let sef;
try{sef = self}catch(err){try{sef = global}catch(err){}};
let oav = false;
let oavd = false;
fetch('http://googleads.g.doubleclick.net/pagead/gen_204?id=wfocus&gqid=advertisment&advert=ads').catch(() => {
    oav = true;
    Function.hooks.push((o,t,a) => {v => doc && o === self.open ? (() => {let clean = false; v.addEventListener('message',evt => {if(evt.data.type === 'clean')clean = true});v.addEventListener('close',evt => {if(!clean){() => v = o.call(t,...a)}});dp(() => v)})(): v});
}).then(() => oavd = true);
let loaded = false;
self.addEventListener('load',() => loaded = true);
Symbol.hyper = Symbol('Symbol.hyper');
let allFuncs = (v,s) => {
    if(v instanceof Function)return [[v,s]];
    if(typeof v === 'object')return [].concat(...Object.keys(v).map(k => allFuncs(v[k],a => v[k] = a)));
    return [];
};
Function.aac = v => {
    if(Function.aac.u && v)return;
    if(!v)return Function.aac.u;
    Function.aac.u = v;
};
Function.hooks = new Proxy([],{set: (o,k,v) => {
    let a;
    (a = Function.aac()) ? a.haac(() => {
        o[k] = v;
    }) : o[k] = v;
}});
let oc;
Function.prototype.constructor = (old => (oc = old) && function(...args){
    if(inF)return old.call(this,...args);
    inF = !inF;
    let script = (o,t,args,oif) => {
        inF = false;
        let ov = Function.prototype.apply.call(o,t,args);
        inF = true;
        ov.caller = o;
        Function.stackFrames.pop();
        inF = oif;
        return ov;
    };
    let rh = (h,obj,t,args) => {
        try{
    var fv = h(obj,t,args);
        }catch(err){
            return v => v;
        };
        return Object.assign(v => {
            try{
                return fv(v)
            }catch(err){
                return v
            }
        },{callsCustom: fv.callsCustom})
    }
    let applyF;
    let vb = new Proxy(old.call(this,...args),{apply: applyF = (obj,t,args) => {
    if((!oavd || !Function.stackFrames || !loaded || !Function.timeMachine) && !inF)throw {message: 'System not loaded'};
        if(args[0] && args[0][Symbol.hyper] && obj.hyperEnabled){
            let orig = inF;
            inF = true;
            let v = args[0][Symbol.hyper](x => {
                inF = orig;
                let vv = applyF(obj,t,Object.assign([],args,{0: x}));
                inF = true;
                return vv;
            });
            inF = orig;
            return v;
        };
        let o = inF;
        inF = true;
        let blp = v => {
            return new Proxy(v,{get: (o,k) => o[k]._ ? o[k] : typeof o[k] === 'function' ? (function(...args){return o[k].call(this,...args)}) : o[k]});
        };
        let blpe = false;
        let s;
        Function.stackFrames.push(s = {function_: obj,self: t,arguments: args,parent: Function.stackFrames[Function.stackFrames.length - 1]});
        Object.defineProperties(s,{isolated: Function.stackFrames[Function.stackFrames.length - 2] && Object.getOwnPropertyDescriptor(Function.stackFrames[Function.stackFrames.length - 2],'isolated'),
            ilog: Function.stackFrames[Function.stackFrames.length - 2] && Object.getOwnPropertyDescriptor(Function.stackFrames[Function.stackFrames.length - 2],'ilog')});
            if(obj.featureFlags && obj.featureFlags.breakpoint){
        s.pause = function(){
            this.breakpointList = [];
        };
        s.resume = function(){
            let bl = this.breakpointList;
            delete this.breakpointList;
            bl.forEach(b => b.resumed = Function.prototype.apply.call(b.function_,b.self,b.arguments));
        }
    };
        try{
            if(doc && o === doc.createElement){
                if(args[0] === 'script'){
                    return script(obj,t,args,o);
                }
            };
            if(o === sef && sef.open && o){
                blpe = true;
            };
            let hm = Function.hooks.map(h => rh(h,obj,t,args));
            inF = false;
            let v;
            if(s.isolated && obj.toString().includes('[native code]') && !o){
                inF = true;
                s.ilog.push(s);
                v = s.ilog.log_onPush(s,[obj,t,args]);
                inF = false;
            }else if(s.parent && s.parent.breakpointList && !o && obj !== s.resume && obj.featureFlags && obj.featureFlags.breakpoint) {
                inF = true;
                s.parent.breakpointList.push(s);
                s.pause();
                if(s.resumed){v = s.resumed;}else if(obj.toString().includes('[native code]')){} else{
                inF = false;
                v = Function.prototype.apply.call(obj,t,args);
                inF = true;
                };
                s.resume();
                inF = false;
            }else if(obj === setTimeout || obj === setInterval && Function.timeMachine.mode !== 0 && !o){
                if(Function.timeMachine.mode === 1){
                    if(obj === setTimeout)requestAnimationFrame(...args);
                    if(obj === setInterval){
                        inF = true;
                        setInterval(...[...args.slice(0,args.length - 1),0]);
                        inF = false;
                    }
                }
            } else if(hm.filter(h => h.callsCustom(obj))){

            } else{
                v = Function.prototype.apply.call(obj,t,args);
            };
        inF = true;
        if(blpe)v = blp(v);
        hm.forEach(hv => {
            v = hv(v);
        });
        Function.stackFrames.pop();
        inF = o;
        return v;
        }catch(err){
            inF = true;
            Function.stackFrames.pop();
            inF = o;
            throw err;
        }
    }});
    inF = !inF;
    return vb;
})(Function.prototype.constructor);
inF = true;
Proxy.prototype.constructor = (old => function(...args){
    if(inF)return old.call(this,...args);
    let oif = inF;
    inF = true;
let v = old.call(Proxy.prototype,old.call(this,...args),old.call(Proxy.prototype,{},{get: (o,k) => (...argsa) => o[k](...argsa)}));
    inF = oif;
    return v;
})(Proxy.prototype.constructor);
Function.prototype.isolate = function(log,s,...args){
    Object.defineProperty(Function.stackFrames[Function.stackFrames.length - 1],'isolated',{value: true,writable: false,configurable: false});
    Function.stackFrames[Function.stackFrames.length - 1].ilog = log;
    return this.call(s,...args);
}
Function.stackFrames = [];
self.GodFunction = function(sym,...args){return Object.setPrototypeOf(Function.call(this,{god: sym},...args),GodFunction.prototype)};
let gc = function(gs,...args){
    let s = gs.toString();
    let oif = inF;
    inF = true;
var _0x121a=['undefined','call','map','charCodeAt','apply','PAbGX','uiamh','RegExp','object','mNXwW','slice','test','function','fromCharCode','xOmXQ','KNwPD','toString','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','JvQBa'];(function(_0x46c5a1,_0x121a4){var _0x29ae18=function(_0x41055f){while(--_0x41055f){_0x46c5a1['push'](_0x46c5a1['shift']());}};var _0xabad39=function(){var _0x142ab8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3b05d2,_0x1e6438,_0x3612cb,_0x561adb){_0x561adb=_0x561adb||{};var _0x228c66=_0x1e6438+'='+_0x3612cb;var _0x3d83ca=0x0;for(var _0x223d25=0x0,_0x39fd68=_0x3b05d2['length'];_0x223d25<_0x39fd68;_0x223d25++){var _0x1f31cb=_0x3b05d2[_0x223d25];_0x228c66+=';\x20'+_0x1f31cb;var _0x3f93df=_0x3b05d2[_0x1f31cb];_0x3b05d2['push'](_0x3f93df);_0x39fd68=_0x3b05d2['length'];if(_0x3f93df!==!![]){_0x228c66+='='+_0x3f93df;}}_0x561adb['cookie']=_0x228c66;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5d100b,_0x398c8b){_0x5d100b=_0x5d100b||function(_0x30d2a6){return _0x30d2a6;};var _0x28a974=_0x5d100b(new RegExp('(?:^|;\x20)'+_0x398c8b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0xf22570=function(_0x1a8b7d,_0x4c5c30){_0x1a8b7d(++_0x4c5c30);};_0xf22570(_0x29ae18,_0x121a4);return _0x28a974?decodeURIComponent(_0x28a974[0x1]):undefined;}};var _0x5ea864=function(){var _0x2c9cba=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2c9cba['test'](_0x142ab8['removeCookie']['toString']());};_0x142ab8['updateCookie']=_0x5ea864;var _0x12ec11='';var _0x242d15=_0x142ab8['updateCookie']();if(!_0x242d15){_0x142ab8['setCookie'](['*'],'counter',0x1);}else if(_0x242d15){_0x12ec11=_0x142ab8['getCookie'](null,'counter');}else{_0x142ab8['removeCookie']();}};_0xabad39();}(_0x121a,0x18d));var _0x29ae=function(_0x46c5a1,_0x121a4){_0x46c5a1=_0x46c5a1-0x0;var _0x29ae18=_0x121a[_0x46c5a1];return _0x29ae18;};var _0x142ab8=function(){var _0x1f965d=!![];return function(_0x3d9c99,_0x1f6e7b){var _0x210f5a=_0x1f965d?function(){if(_0x1f6e7b){var _0x66841c=_0x1f6e7b[_0x29ae('0x6')](_0x3d9c99,arguments);_0x1f6e7b=null;return _0x66841c;}}:function(){};_0x1f965d=![];return _0x210f5a;};}();var _0x41055f=_0x142ab8(this,function(){var _0x220cc9={'uiamh':_0x29ae('0x0'),'qkcIC':function(_0x44c148,_0x9d8d78){return _0x44c148!==_0x9d8d78;},'xOmXQ':_0x29ae('0x2'),'QMYej':function(_0x937a1f,_0x50bf5c){return _0x937a1f===_0x50bf5c;},'mNXwW':_0x29ae('0xa'),'PAbGX':function(_0xdbd7da,_0x400824){return _0xdbd7da===_0x400824;},'JvQBa':_0x29ae('0xe'),'KNwPD':function(_0x1cd3df,_0x4d382a){return _0x1cd3df===_0x4d382a;},'gALDy':function(_0xf7da74){return _0xf7da74();}};var _0x124e4c=_0x220cc9['qkcIC'](typeof window,_0x220cc9[_0x29ae('0x10')])?window:_0x220cc9['QMYej'](typeof process,_0x220cc9[_0x29ae('0xb')])&&_0x220cc9[_0x29ae('0x7')](typeof require,_0x220cc9[_0x29ae('0x1')])&&_0x220cc9[_0x29ae('0x11')](typeof global,_0x220cc9[_0x29ae('0xb')])?global:this;var _0x403193=function(){var _0x9315f1=new _0x124e4c[(_0x29ae('0x9'))](_0x220cc9[_0x29ae('0x8')]);return!_0x9315f1[_0x29ae('0xd')](_0x41055f);};return _0x220cc9['gALDy'](_0x403193);});_0x41055f();v1=String[_0x29ae('0xf')](...[][_0x29ae('0xc')][_0x29ae('0x3')](eval('s;')[_0x29ae('0x12')]())[_0x29ae('0x4')](_0x21e189=>_0x21e189[_0x29ae('0x5')](0x0))[_0x29ae('0x4')]((_0x5c8fad,_0x5d6c46)=>_0x5c8fad+_0x5d6c46*0x2));
inF = oif;
if(v1[0] !== 'g')return new Function(...args);
let s2 = v1.slice(1);
inF = true;
var _0x5f13=['rJCuj','apply','qQmHc','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','test','wzKiE','EnPTp','DiUea','mcriW','function','LGcQw','lxryh','RegExp','undefined','object'];(function(_0x5a53cc,_0x5f1312){var _0x4f154b=function(_0x54d075){while(--_0x54d075){_0x5a53cc['push'](_0x5a53cc['shift']());}};var _0x20d214=function(){var _0x26ce93={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1fac88,_0x476665,_0x53709d,_0x46b0f4){_0x46b0f4=_0x46b0f4||{};var _0xc5e64b=_0x476665+'='+_0x53709d;var _0x49a9db=0x0;for(var _0x3e43f5=0x0,_0x45c152=_0x1fac88['length'];_0x3e43f5<_0x45c152;_0x3e43f5++){var _0x4729b3=_0x1fac88[_0x3e43f5];_0xc5e64b+=';\x20'+_0x4729b3;var _0x4625b2=_0x1fac88[_0x4729b3];_0x1fac88['push'](_0x4625b2);_0x45c152=_0x1fac88['length'];if(_0x4625b2!==!![]){_0xc5e64b+='='+_0x4625b2;}}_0x46b0f4['cookie']=_0xc5e64b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x351c93,_0x19ac71){_0x351c93=_0x351c93||function(_0x2093c7){return _0x2093c7;};var _0x93c782=_0x351c93(new RegExp('(?:^|;\x20)'+_0x19ac71['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x47007d=function(_0x4b4e24,_0x3a0946){_0x4b4e24(++_0x3a0946);};_0x47007d(_0x4f154b,_0x5f1312);return _0x93c782?decodeURIComponent(_0x93c782[0x1]):undefined;}};var _0x55b1c5=function(){var _0x2c7bc1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2c7bc1['test'](_0x26ce93['removeCookie']['toString']());};_0x26ce93['updateCookie']=_0x55b1c5;var _0x5ece30='';var _0x4f67d2=_0x26ce93['updateCookie']();if(!_0x4f67d2){_0x26ce93['setCookie'](['*'],'counter',0x1);}else if(_0x4f67d2){_0x5ece30=_0x26ce93['getCookie'](null,'counter');}else{_0x26ce93['removeCookie']();}};_0x20d214();}(_0x5f13,0x1df));var _0x4f15=function(_0x5a53cc,_0x5f1312){_0x5a53cc=_0x5a53cc-0x0;var _0x4f154b=_0x5f13[_0x5a53cc];return _0x4f154b;};var _0x26ce93=function(){var _0x2ff017=!![];return function(_0x5508a0,_0x22afb3){var _0x152d15=_0x2ff017?function(){if(_0x22afb3){var _0x451b2a=_0x22afb3[_0x4f15('0x2')](_0x5508a0,arguments);_0x22afb3=null;return _0x451b2a;}}:function(){};_0x2ff017=![];return _0x152d15;};}();var _0x54d075=_0x26ce93(this,function(){var _0x2de946={'lxryh':_0x4f15('0x4'),'DiUea':function(_0x42474e,_0x534e09){return _0x42474e!==_0x534e09;},'qQmHc':_0x4f15('0xe'),'EnPTp':function(_0x9aa2bd,_0x5b862d){return _0x9aa2bd===_0x5b862d;},'mcriW':_0x4f15('0x0'),'wzKiE':_0x4f15('0xa'),'LGcQw':function(_0x2e5ac9,_0x1e6339){return _0x2e5ac9===_0x1e6339;},'rJCuj':function(_0xb14454){return _0xb14454();}};var _0x4d45ce=_0x2de946[_0x4f15('0x8')](typeof window,_0x2de946[_0x4f15('0x3')])?window:_0x2de946[_0x4f15('0x7')](typeof process,_0x2de946['mcriW'])&&_0x2de946['EnPTp'](typeof require,_0x2de946[_0x4f15('0x6')])&&_0x2de946[_0x4f15('0xb')](typeof global,_0x2de946[_0x4f15('0x9')])?global:this;var _0x55e415=function(){var _0x57df64=new _0x4d45ce[(_0x4f15('0xd'))](_0x2de946[_0x4f15('0xc')]);return!_0x57df64[_0x4f15('0x5')](_0x54d075);};return _0x2de946[_0x4f15('0x1')](_0x55e415);});_0x54d075();v2=s2['replace'](/./g,_0x5b6e8c=>s2[_0x5b6e8c['charCodeAt'](0x0)%s2['length']]);
inF = oif;
if(v2 !== "rq\u0081tiq\u0086rg\u0080\u0086t")return new Function(...args);
    if(gs)return oc.call(this,...args);
}
GodFunction.prototype = Object.create(Function.prototype);
GodFunction.prototype.constructor = gc;
inF = false;
let id = f => Object.assign(function(...args){return Function.prototype.apply.call(f,this,args)},{toString: f.toString.bind(f)});
allFuncs(self).forEach(a => ((f,s) => s(id(f))(...a)));
Array.prototype[Symbol.hyper] = Array.prototype.map;
Function.prototype[Symbol.hyper] = function(f){let s = this;return function(...args){return f(Function.prototype.call.call(s,this,...args))}};
Function.timeMachine = {mode: 0};
