(this.webpackJsonpbooknotes=this.webpackJsonpbooknotes||[]).push([[177],{306:function(t,e){!function(t){t.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var e,a,n,s=t.languages,p={"application/javascript":s.javascript,"application/json":s.json||s.javascript,"application/xml":s.xml,"text/xml":s.xml,"text/html":s.html,"text/css":s.css},i={"application/json":!0,"application/xml":!0};for(var o in p)if(p[o]){e=e||{};var r=i[o]?(n=(a=o).replace(/^[a-z]+\//,""),"(?:"+a+"|\\w+/(?:[\\w.-]+\\+)+"+n+"(?![+\\w.-]))"):o;e[o.replace(/\//g,"-")]={pattern:RegExp("(content-type:\\s*"+r+".*)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:p[o]}}e&&t.languages.insertBefore("http","header-name",e)}(Prism)}}]);
//# sourceMappingURL=177.abe7815f.chunk.js.map