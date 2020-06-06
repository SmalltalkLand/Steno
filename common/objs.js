export default (a,oa,s = null) => {
let obss = s || Math.random();
return [a[0],(a1 => v => {a1(v); oa[1](oa[0].concat([[obss,v]]))})(a[1]),obss]
}