(this.webpackJsonpbooknotes=this.webpackJsonpbooknotes||[]).push([[101],{230:function(e,n){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var n={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(n).forEach((function(s){var i=n[s],a=[];/^\w+$/.test(s)||a.push(/\w+/.exec(s)[0]),"diff"===s&&a.push("bold"),e.languages.diff[s]={pattern:RegExp("^(?:["+i+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:a,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(s)[0]}}}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:n})}(Prism)}}]);
//# sourceMappingURL=101.8ea3ab25.chunk.js.map