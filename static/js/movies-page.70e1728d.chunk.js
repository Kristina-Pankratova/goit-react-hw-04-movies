(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{39:function(e,t,r){"use strict";var n=r(9),a=r(2),c=r(7),o=r(1);t.a=Object(a.f)((function(e){var t=e.movies,r=e.location;return Object(o.jsx)("ul",{children:t.map((function(e){return e.title&&Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:{pathname:"".concat(c.a.movies,"/").concat(e.id),state:{from:r}},children:e.title})},e.id)}))})}))},67:function(e,t,r){e.exports={Searchbar:"SearchBar_Searchbar__1VveP",SearchForm:"SearchBar_SearchForm__2oE3y",SearchForm_button:"SearchBar_SearchForm_button__1Jumd",SearchForm_button_label:"SearchBar_SearchForm_button_label__2H__A",SearchForm_input:"SearchBar_SearchForm_input__wUz6t"}},68:function(e,t,r){"use strict";var n=r(69),a=r(11);function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function o(e){return Array.isArray(e)?e.sort():"object"===typeof e?o(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=a({arrayFormat:"none"},t)),n=Object.create(null);return"string"!==typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),c=t.length>0?t.join("="):void 0;c=void 0===c?null:decodeURIComponent(c),r(decodeURIComponent(a),c,n)})),Object.keys(n).sort().reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=o(r):e[t]=r,e}),Object.create(null))):n},t.stringify=function(e,t){var r=function(e){switch(e.arrayFormat){case"index":return function(t,r,n){return null===r?[c(t,e),"[",n,"]"].join(""):[c(t,e),"[",c(n,e),"]=",c(r,e)].join("")};case"bracket":return function(t,r){return null===r?c(t,e):[c(t,e),"[]=",c(r,e)].join("")};default:return function(t,r){return null===r?c(t,e):[c(t,e),"=",c(r,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var a=e[n];if(void 0===a)return"";if(null===a)return c(n,t);if(Array.isArray(a)){var o=[];return a.slice().forEach((function(e){void 0!==e&&o.push(r(n,e,o.length))})),o.join("&")}return c(n,t)+"="+c(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},69:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},75:function(e,t,r){"use strict";r.r(t);var n=r(36),a=r.n(n),c=r(37),o=r(32),i=r(33),u=r(35),s=r(34),h=r(0),l=r(38),p=r.n(l),f=r(67),m=r.n(f),b=r(2),d=r(1),v=function(e){Object(u.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query)},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(d.jsx)("header",{className:m.a.Searchbar,onSubmit:this.handleSubmit,children:Object(d.jsxs)("form",{className:m.a.SearchForm,children:[Object(d.jsx)("button",{type:"submit",className:m.a.SearchForm_button,children:Object(d.jsx)("span",{className:m.a.SearchForm_button_label,children:"Search"})}),Object(d.jsx)("input",{className:m.a.SearchForm_input,type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search movies",onChange:this.handleChange})]})})}}]),r}(h.Component),y=Object(b.f)(v),j=r(68),S=r.n(j),_=r(39),g=function(e){Object(u.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={movies:[],searchQuery:""},e.getQueryFromProps=function(e){return S.a.parse(e.location.search).query},e.onChangeQuery=function(t){e.setState({searchQuery:t,movies:[]}),e.props.history.push({pathname:e.props.location.pathname,search:"query=".concat(t)})},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=this.getQueryFromProps(this.props))){e.next=6;break}return e.next=4,p.a.get("https://api.themoviedb.org/3/search/movie?api_key=4c4ccfa5cd696090db809b7747038046&language=en-US&query=".concat(n,"&include_adult=false"));case 4:c=e.sent,this.setState({movies:c.data.results});case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.getQueryFromProps(t),c=this.getQueryFromProps(this.props),n===c){e.next=7;break}return e.next=5,p.a.get("https://api.themoviedb.org/3/search/movie?api_key=38ffd95028f6c80ed5a5389eea0285a5&language=en-US&query=".concat(this.state.searchQuery,"&include_adult=false"));case 5:o=e.sent,this.setState({movies:o.data.results});case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(y,{onSubmit:this.onChangeQuery}),Object(d.jsx)(_.a,{movies:e})]})}}]),r}(h.Component);t.default=g}}]);
//# sourceMappingURL=movies-page.70e1728d.chunk.js.map