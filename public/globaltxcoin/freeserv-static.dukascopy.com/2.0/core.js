(function(i){this.init=function(c){c.hasOwnProperty("params")||(c.params={});if(void 0==c.type)throw"Widget type is undefined";var a=this.parseURL(d),a=a.protocol.toString()+"://"+a.host.toString().replace("-static","")+a.path.toString().replace(a.file,"")+"?path="+c.type+"/index&"+this.http_build_query(c.params);this.createIframe(a,c.params)};this.createIframe=function(c,a){var b=[];b.push("<iframe");b.push('src="'+c+'"');b.push('border="0" ');b.push('marginWidth="0"');b.push('marginHeight="0"');
b.push('frameBorder="0"');b.push('scrolling="no"');b.push('width="'+("width"in a?a.width:"100%")+'"');"height"in a&&b.push('height="'+a.height+'"');b.push("></iframe>");document.writeln(b.join(" "))};this.http_build_query=function(c){var a=0,b=[],f;for(f in c)if(null!=c[f]){var d=escape(c[f].toString()),g=f.replace(/[^0-9a-zA-Z_]/,"");0!=g.length&&(b[a++]=g+"="+d)}return b.join("&")};this.parseURL=function(c){var a=document.createElement("a");a.href=c;for(var b=a.protocol.replace(":",""),d=a.hostname,
e=a.port,g=a.search,l={},j=a.search.replace(/^\?/,"").split("&"),i=j.length,h=0,k;h<i;h++)j[h]&&(k=j[h].split("="),l[k[0]]=k[1]);return{source:c,protocol:b,host:d,port:e,query:g,params:l,file:(a.pathname.match(/\/([^\/?#]+)$/i)||[,""])[1],hash:a.hash.replace("#",""),path:a.pathname.replace(/^([^\/])/,"/$1"),relative:(a.href.match(/tps?:\/\/[^\/]+(.+)/)||[,""])[1],segments:a.pathname.replace(/^\//,"").split("/")}};this.extend=function(c,a){if(2<arguments.length)for(var b=1;b<arguments.length;b++)extend(c,
arguments[b]);else for(b in a)c[b]=a[b];return c};var e,d;document.currentScript?d=document.currentScript.src:(e=document.getElementsByTagName("script"),d=e[e.length-1].src);d||(d="//freeserv.dukascopy.com/2.0/");this.init(i)})(DukascopyApplet);