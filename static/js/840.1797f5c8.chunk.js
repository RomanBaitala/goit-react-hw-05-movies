"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[840],{456:function(n,t,e){e.d(t,{AX:function(){return f},DF:function(){return p},KS:function(){return a},MX:function(){return s},dI:function(){return u}});var c=e(263),r="964aa706dab4c3295b22f686e0c720cc",o="movie";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(n){return c.Z.get(n).then((function(n){return n.data}))},a=function(){return i("".concat("movie/popular","?api_key=").concat(r))},u=function(n){var t=n.query,e=void 0===t?"trending":t,c=n.page,o=void 0===c?1:c;return i("".concat("search/movie","?api_key=").concat(r,"&query=").concat(e,"&").concat(o))},s=function(n){return i("".concat(o,"/").concat(n,"?api_key=").concat(r))},f=function(n){return i("".concat(o,"/").concat(n,"/").concat("credits","?api_key=").concat(r)).then((function(n){return n.cast.slice(0,10)}))},p=function(n){return i("".concat(o,"/").concat(n,"/").concat("reviews","?api_key=").concat(r)).then((function(n){return n.results.slice(0,10)}))}},840:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var c,r,o,i,a=e(439),u=e(456),s=e(791),f=e(689),p=e(168),d=e(444),h=d.ZP.ul(c||(c=(0,p.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),l=d.ZP.li(r||(r=(0,p.Z)(["\n  padding: 10px;\n  margin: 10px;\n  font-size: 14px;\n  font-weight: normal;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);\n"]))),v=d.ZP.span(o||(o=(0,p.Z)(["\n  font-weight: bold;\n"]))),g=d.ZP.span(i||(i=(0,p.Z)(["\n  margin: 0 0 0 10px;\n  font-size: 14px;\n  font-weight: normal;\n"]))),x=e(184),m=function(){var n=(0,f.UO)(),t=parseInt(n.movieId),e=(0,s.useState)([]),c=(0,a.Z)(e,2),r=c[0],o=c[1];return(0,s.useEffect)((function(){(0,u.DF)(t).then(o)}),[t]),(0,x.jsx)(h,{children:r&&r.length>0?r.map((function(n){var t=n.id,e=n.author,c=n.content;return(0,x.jsxs)(l,{children:[(0,x.jsx)(v,{children:e}),": ",(0,x.jsx)(g,{children:c})]},t)})):(0,x.jsx)(l,{children:"No reviews yet..."})})}}}]);
//# sourceMappingURL=840.1797f5c8.chunk.js.map