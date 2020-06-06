import './njx.js'
export function Messager(o){
    return Object.assign({},o,{messages: function(){
        let s = this;
        let p = oo => new Proxy(oo,{get: (o,k) => o.then(vv => vv[k])});
        return p(s.messages_);
    }})
}
export function Object(o){
    return Object.assign({},Messager(o),{
        get messages_(){return new Proxy(() => this.klass,{get: (o,k) => o().data[0].data.filter(v => v.data[0] === k)[0]()})},
    })
}
export function Klass(o,c){
    return Object.assign({},Object(o),{
        compile(code){return c.compile(code,this)}
    })
}
export function Compiler(o){
    return Object.assign({},o,{
        compile(code,int){
            let statements = code.split('.');
            let blocks = statements.map(s => s.match(/(\/[[^/]])|(.*)+/g).map(function (e) {if(e.startsWith('['))return [this.compile(e.slice(1),int),e.index + 1,s];return e}));
            let messages = blocks.map(s => s[0] && s[0][0] && s[0][0] instanceof Function ? s.reduce((v,s2) => [...s2.slice(o,v[1] - 1),v,...s2.slice(v[1])],s[0][2]) : [s]).map(a => a.split(' '));
            return async (self,arguments_) => {
                let vars = {arguments: arguments_};
                for(let m of messages){
                    await m.reduce((m,v) => m instanceof Function ? v._pb(m.bind(null,self),vars) : v[m](vars),self);
                }
            }
        }
    })
}