(this.webpackJsonpcarnetjs=this.webpackJsonpcarnetjs||[]).push([[210],{339:function(e,t){!function(e){var t=e.languages.javascript["template-string"],n=t.pattern.source,r=t.inside.interpolation,a=r.inside["interpolation-punctuation"],i=r.pattern.source;function s(t,r){if(e.languages[t])return{pattern:RegExp("((?:"+r+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:t}}}}function o(e,t){return"___"+t.toUpperCase()+"_"+e+"___"}function p(t,n,r){var a={code:t,grammar:n,language:r};return e.hooks.run("before-tokenize",a),a.tokens=e.tokenize(a.code,a.grammar),e.hooks.run("after-tokenize",a),a.tokens}function l(t){var n={};n["interpolation-punctuation"]=a;var i=e.tokenize(t,n);if(3===i.length){var s=[1,1];s.push.apply(s,p(i[1],e.languages.javascript,"javascript")),i.splice.apply(i,s)}return new e.Token("interpolation",i,r.alias,t)}function u(t,n,r){var a=e.tokenize(t,{interpolation:{pattern:RegExp(i),lookbehind:!0}}),s=0,u={},c=p(a.map((function(e){if("string"===typeof e)return e;for(var n,a=e.content;-1!==t.indexOf(n=o(s++,r)););return u[n]=a,n})).join(""),n,r),g=Object.keys(u);return s=0,function e(t){for(var n=0;n<t.length;n++){if(s>=g.length)return;var r=t[n];if("string"===typeof r||"string"===typeof r.content){var a=g[s],i="string"===typeof r?r:r.content,o=i.indexOf(a);if(-1!==o){++s;var p=i.substring(0,o),c=l(u[a]),f=i.substring(o+a.length),y=[];if(p&&y.push(p),y.push(c),f){var v=[f];e(v),y.push.apply(y,v)}"string"===typeof r?(t.splice.apply(t,[n,1].concat(y)),n+=y.length-1):r.content=y}}else{var d=r.content;Array.isArray(d)?e(d):e([d])}}}(c),new e.Token(r,c,"language-"+r,t)}e.languages.javascript["template-string"]=[s("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),s("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),s("svg",/\bsvg/.source),s("markdown",/\b(?:md|markdown)/.source),s("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),t].filter(Boolean);var c={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function g(e){return"string"===typeof e?e:Array.isArray(e)?e.map(g).join(""):g(e.content)}e.hooks.add("after-tokenize",(function(t){t.language in c&&function t(n){for(var r=0,a=n.length;r<a;r++){var i=n[r];if("string"!==typeof i){var s=i.content;if(Array.isArray(s))if("template-string"===i.type){var o=s[1];if(3===s.length&&"string"!==typeof o&&"embedded-code"===o.type){var p=g(o),l=o.alias,c=Array.isArray(l)?l[0]:l,f=e.languages[c];if(!f)continue;s[1]=u(p,f,c)}}else t(s);else"string"!==typeof s&&t([s])}}}(t.tokens)}))}(Prism)}}]);
//# sourceMappingURL=210.53e477e9.chunk.js.map