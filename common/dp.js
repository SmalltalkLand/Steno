export function dp(f){return new Proxy(f,{
    get: (o,k) => o()[k],set: (o,k,v) => o()[k] = v,delete: (o,k) => {delete o()[k]},apply: (o,t,a) => Reflect.apply(o(),t,a),construct: (o,a,t) = Reflect.construct(o(),a,t),
    defineProperty: (o,k,p) => Object.defineProperty(o(),k,p),deleteProperty: (o,p) => Reflect.deleteProperty(o(),p),getOwnPropertyDescriptor: (o,p) => Object.getOwnPropertyDescriptor(o(),p),
    has: (o,k) => k in o(),isExtensible: o => Reflect.isExtensible(o()),ownKeys: o => Reflect.ownKeys(o()),preventExtensions: (o) => Reflect.preventExtensions(o),setPrototypeOf: (o,p) => Object.setPrototypeOf(o(),p)
})}