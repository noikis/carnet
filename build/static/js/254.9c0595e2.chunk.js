(this.webpackJsonpbooknotes=this.webpackJsonpbooknotes||[]).push([[254],{383:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,o,a,r){if(t.language===o){var c=t.tokenStack=[];t.code=t.code.replace(a,(function(e){if("function"==typeof r&&!r(e))return e;for(var a,i=c.length;-1!==t.code.indexOf(a=n(o,i));)++i;return c[i]=e,a})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,o){if(t.language===o&&t.tokenStack){t.grammar=e.languages[o];var a=0,r=Object.keys(t.tokenStack);!function c(i){for(var s=0;s<i.length&&!(a>=r.length);s++){var u=i[s];if("string"==typeof u||u.content&&"string"==typeof u.content){var p=r[a],g=t.tokenStack[p],l="string"==typeof u?u:u.content,f=n(o,p),k=l.indexOf(f);if(-1<k){++a;var h=l.substring(0,k),m=new e.Token(o,e.tokenize(g,t.grammar),"language-"+o,g),b=l.substring(k+f.length),d=[];h&&d.push.apply(d,c([h])),d.push(m),b&&d.push.apply(d,c([b])),"string"==typeof u?i.splice.apply(i,[s,1].concat(d)):u.content=d}}else u.content&&c(u.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=254.9c0595e2.chunk.js.map