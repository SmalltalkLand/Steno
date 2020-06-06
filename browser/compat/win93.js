import 'http://www.windows93.net/c/sys42.js?v=2.3.9'
let sys42 = window.system42;
delete window.system42;
let sfs = window.$fs;
delete window.$fs;
let sfile = window.$file;
delete window.$file;
sfile.getUrl = (o => function(p,c,...args){
    if(p[1] === 'd'){return (c || (x => {}))(`/w/fs/${p.slice(3)}`)}
    if(p[1] === 'c'){return 'http://www.windows93.net' + o(p,c,...args)}
    return o(p,c,...args);
})(sfile.getUrl);
export default {sys42,sfs,sfile};