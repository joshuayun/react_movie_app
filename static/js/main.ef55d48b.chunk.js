(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(26)},18:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),s=(n(18),n(2)),c=n.n(s),l=n(5),u=n(6),m=n(7),p=n(10),v=n(8),d=n(11),g=(n(20),n(1)),f=n.n(g),_=(n(23),n(9)),h=n.n(_);function y(e){var t=e.title,n=e.poster,r=e.genres,o=e.synopsis;return a.a.createElement("div",{className:"Movie"},a.a.createElement("div",{className:"Movie__Column"},a.a.createElement(w,{poster:n,alt:t})),a.a.createElement("div",{className:"Movie__Column"},a.a.createElement("h1",null,t),a.a.createElement("div",{className:"Movie__Genres"},r.map(function(e,t){return a.a.createElement(E,{genre:e,key:t})})),a.a.createElement("div",{className:"Movie__Synopsis"},a.a.createElement(h.a,{text:o,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))}function w(e){var t=e.poster,n=e.alt;return a.a.createElement("img",{src:t,alt:n,className:"Movie__Poster"})}function E(e){var t=e.genre;return a.a.createElement("span",{className:"Movie__Genre"},t," ")}y.prototype={title:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.array.isRequired,synopsis:f.a.string.isRequired},w.prototype={poster:f.a.string.isRequired,alt:f.a.string.isRequired},E.prototype={genre:f.a.string.isRequired};var M=y,b=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e){return a.a.createElement(M,{title:e.title_english,poster:e.medium_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){console.log("will mount")}},{key:"componentDidMount",value:function(){console.log("did mount"),this._getMovies()}},{key:"render",value:function(){console.log("render");var e=this.state.movies;return a.a.createElement("div",{className:e?"App":"App--loading"},e?this._renderMovies():"Loading")}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.ef55d48b.chunk.js.map