(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,a){e.exports={newsWrapper:"News_newsWrapper__3ZGUA",imgTitle:"News_imgTitle__3RWui",newsTitle:"News_newsTitle__1_Iz5",newsItemWrapper:"News_newsItemWrapper__2_Lyz",animatedBackground:"News_animatedBackground__J3gfM"}},40:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/nyt_logo.8d5a2dd6.jpg"},45:function(e,t,a){e.exports={main:"Main_main__1uMKs"}},46:function(e,t,a){e.exports=a(75)},5:function(e,t,a){e.exports={weatherWrapper:"Weather_weatherWrapper__fbkFi",searchCityInput:"Weather_searchCityInput__3WEkr",searchCityInputError:"Weather_searchCityInputError__Er1K5",searchCityBtn:"Weather_searchCityBtn__22LgB",wrapperCityDates:"Weather_wrapperCityDates__LO2jN",cityName:"Weather_cityName__2f4Og",mainImg:"Weather_mainImg__1QKdn",timeValue:"Weather_timeValue__36yNZ",dateValue:"Weather_dateValue__2h_UC",temp:"Weather_temp__3a55_",tempFeels:"Weather_tempFeels__3j2Zt",description:"Weather_description__3nZnA"}},51:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),c=a.n(i),o=(a(51),a(8)),s=a(9),l=a(11),u=a(10),m=a(12),d=a(16),p=a(19),h=a(18),v=a(22),f=a(21),E=a(17),g=a.n(E),b=g.a.create({baseURL:"https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=".concat("pFpSg40feER6OKDiEgPgdLKM1TFaXD8k")}),w=function(){return b.get("",{})},y="api_data/news/RESULTS",_={results:[]},O=function(){return function(e){w().then((function(t){var a=t.data.results;e(function(e){return{type:y,newResults:e}}(a))})).catch(Error)}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(f.a)({},e,{results:t.newResults});default:return e}},N=a(42),V=g.a.create({baseURL:"https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=".concat("AIzaSyA1ekIAkTGCDSz_MdhqrskiiL7LuhQxYqs")}),k=function(){return V.get("",{})},x={popularVideos:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"api_data/videos/POPULAR-VIDEOS-LIST":return Object(f.a)({},e,{popularVideos:t.popularVideos});default:return e}},C="api_data/found-videos/FOUND-VIDEOS-LIST",S={foundVideos:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(f.a)({},e,{foundVideos:t.foundVideos});default:return e}},F=Object(v.c)({news:j,videos:W,found_videos:I}),L=Object(v.d)(F,Object(v.a)(N.a)),D=a(14),R=a(5),T=a.n(R);function A(){var e=Object(n.useState)(void 0),t=Object(D.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(void 0),o=Object(D.a)(c,2),s=o[0],l=o[1],u=Object(n.useState)(void 0),m=Object(D.a)(u,2),d=m[0],p=m[1],h=Object(n.useState)(void 0),v=Object(D.a)(h,2),f=v[0],E=v[1],b=Object(n.useState)(void 0),w=Object(D.a)(b,2),y=w[0],_=w[1],O=Object(n.useState)(void 0),j=Object(D.a)(O,2),N=j[0],V=j[1],k=Object(n.useState)(void 0),x=Object(D.a)(k,2),W=x[0],C=x[1],S=Object(n.useState)(void 0),I=Object(D.a)(S,2),F=I[0],L=I[1],R=Object(n.useState)(!1),A=Object(D.a)(R,2),P=A[0],B=A[1],M=function(e){switch(e){case"1":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/11d@2x.png",alt:""});case"2":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/09d@2x.png",alt:""});case"3":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/10d@2x.png",alt:""});case"4":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/13d@2x.png",alt:""});case"5":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/09d@2x.png",alt:""});case"6":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/13d@2x.png",alt:""});case"7":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/50d@2x.png",alt:""});case"8":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/01d@2x.png",alt:""});case"9":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/04d@2x.png",alt:""})}},U="".concat(!0===P?T.a.searchCityInputError:T.a.searchCityInput),q=new Date,z=q.getFullYear()+"-"+Number(q.getMonth()+1)+"-"+q.getDate();return r.a.createElement("div",{className:T.a.weatherWrapper},r.a.createElement("div",{className:T.a.dateValue}," ",z," "),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.city.value;if(t){g.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("bcadf81ac18c65d589a0b694bcf27724")).then((function(e){i(e.data.name),l(e.data.sys.country),p(e.data.weather[0].description),E(e.data.weather[0].id),_((e.data.main.temp-273.15).toFixed(0)),V((e.data.main.feels_like-273.15).toFixed(0)),C(e.data.wind.speed.toFixed(0)),L(void 0),B(!1)}))}else L("Enter the city!"),i(void 0),l(void 0),p(void 0),E(void 0),_(void 0),V(void 0),C(void 0),B(!0)},"data-test-id":"increment"},r.a.createElement("input",{type:"text",className:U,placeholder:"Enter City...",name:"city"}),r.a.createElement("button",{className:T.a.searchCityBtn}," Get Weather ")),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:T.a.wrapperCityDates},r.a.createElement("span",{className:T.a.cityName}," ",a,", ",s," "),y&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:T.a.temp}," ",y," \xb0C"),r.a.createElement("div",{className:T.a.tempFeels}," feels like: ",N," \xb0C")),r.a.createElement("div",null," ",f>=200&&f<=232&&M("1"),"  "),r.a.createElement("div",null," ",f>=300&&f<=321&&M("2"),"  "),r.a.createElement("div",null," ",f>=500&&f<=504&&M("3"),"  "),r.a.createElement("div",null," ",511===f&&M("4"),"  "),r.a.createElement("div",null," ",f>=520&&f<=531&&M("5"),"  "),r.a.createElement("div",null," ",f>=600&&f<=622&&M("6"),"  "),r.a.createElement("div",null," ",f>=701&&f<=781&&M("7"),"  "),r.a.createElement("div",null," ",800===f&&M("8"),"  "),r.a.createElement("div",null," ",f>=801&&f<=804&&M("9"),"  "),r.a.createElement("div",{className:T.a.description}," ",d," "),r.a.createElement("div",{className:T.a.description}," ",W&&r.a.createElement(r.a.Fragment,null," wind speed: ",W," m/s ")))),r.a.createElement("div",{className:T.a.cityName}," ",F," "))}a(73);var P=a(20),B=a.n(P),M=a(43),U=a.n(M),q=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.url,a=e.title,n=e.image;return r.a.createElement("div",{className:B.a.newsItemWrapper},r.a.createElement("a",{href:"".concat(t),className:B.a.newsTitle,target:"_blank",rel:"noopener noreferrer"}," ",a," "),!n&&r.a.createElement("div",null," ",r.a.createElement("img",{className:B.a.imgTitle,alt:"",src:U.a})," "),n&&r.a.createElement("div",null," ",r.a.createElement("img",{className:B.a.imgTitle,alt:"",src:n}),"  "))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getResults=function(e){a.props.getResults(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getResults(this.props.results)}},{key:"render",value:function(){var e=this.props.results,t=e.map((function(e,t){return r.a.createElement(q,{key:t,title:e.title,image:e.thumbnail_standard,url:e.url})}));return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:B.a.newsWrapper},t)))}}]),t}(n.PureComponent),K=Object(h.b)((function(e){return{results:e.news.results}}),(function(e){return{getResults:function(t){e(O())}}}))(z),G=(a(40),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getPopularVideosList(this.props.popularVideos)}},{key:"render",value:function(){var e=this.props.popularVideos;return r.a.createElement("div",{className:"wrapper-video"},r.a.createElement(d.b,{to:"/videos_found",className:"btn btn-outline-secondary search-btn",type:"button",id:"button-addon2"}," Search Videos "),r.a.createElement("div",{className:"text-popular"}," Popular:"),!e&&r.a.createElement("div",{className:"spinner-border text-danger spinner-place",role:"status"}),r.a.createElement("div",{className:"videos"},r.a.createElement("div",null,e)))}}]),t}(n.PureComponent)),Z=Object(h.b)((function(e){return{popularVideos:e.videos.popularVideos}}),(function(e){return{getPopularVideosList:function(t){e(function(e){return function(t){k().then((function(a){console.log(a.data.items),a.data.items.map((function(e){var t="https://www.youtube.com/embed/".concat(e.id,"?controls=2"),a=e.snippet.title;return r.a.createElement("div",{className:"item-wrapper",key:e.id},r.a.createElement("li",{className:"title-popular-video"},r.a.createElement("div",{className:"wrapper-title-video"},r.a.createElement("span",null," ",a," ")),r.a.createElement("iframe",{width:"300",height:"200",src:t,frameBorder:"0",title:"myFrame"})))})),t(function(e){return{type:"api_data/videos/POPULAR-VIDEOS-LIST",popularVideos:e}}(e))}))}}(t))}}}))(G),J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={resultValue:""},a.addValue=function(e){e.preventDefault();var t=e.target.elements.video.value;if(t){g.a.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&q=".concat(t,"&type=video&videoDefinition=any&key=").concat("AIzaSyA1ekIAkTGCDSz_MdhqrskiiL7LuhQxYqs")).then((function(e){var t=e.data.items.map((function(e,t){var a="https://www.youtube.com/embed/".concat(e.id,"?controls=2"),n=e.snippet.title.replace(/&quot;/g," ");return r.a.createElement("div",{className:"wrapper-found-video",key:t},r.a.createElement("li",{className:"title-found-video"},r.a.createElement("div",{className:"wrapper-frame-video"},r.a.createElement("span",null," ",n," ")),r.a.createElement("iframe",{className:"frame-video",width:"60%",height:"300px",src:a,frameBorder:"0",title:"myFrameVideo"})))}));a.props.getFoundVideosList(t)}))}else console.log(Error)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.foundVideos;return r.a.createElement("div",{className:"wrapper-video"},r.a.createElement("form",{onSubmit:this.addValue,"data-test-id":"increment"},r.a.createElement("div",{className:"input-group mb-3 search-input"},r.a.createElement("input",{type:"text",name:"video",className:"form-control","aria-describedby":"button-addon2"}),r.a.createElement("button",{className:"btn btn-outline-secondary",id:"button-addon2"}," Search"))),r.a.createElement("div",{className:"text-resultValue"},e))}}]),t}(n.PureComponent),Q=Object(h.b)((function(e){return{foundVideos:e.found_videos.foundVideos}}),(function(e){return{getFoundVideosList:function(t){e(function(e){return{type:C,foundVideos:e}}(t))}}}))(J),Y=Object(p.e)(Q),H=a(45),X=a.n(H),$=function(){return r.a.createElement("div",{className:X.a.main})},ee=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"wrapperHeader"},r.a.createElement(d.b,{to:"/"}," Main "),r.a.createElement(d.b,{to:"/news"}," News "),r.a.createElement(d.b,{to:"/weather"}," Weather "),r.a.createElement(d.b,{to:"/videos"}," Videos "))),r.a.createElement("div",null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement($,null)}}),r.a.createElement(p.a,{path:"/news",render:function(){return r.a.createElement(K,null)}}),r.a.createElement(p.a,{path:"/weather",render:function(){return r.a.createElement(A,null)}}),r.a.createElement(p.a,{path:"/videos",render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(p.a,{path:"/videos_found",render:function(){return r.a.createElement(Y,null)}})))}}]),t}(n.PureComponent),te=function(){return r.a.createElement(d.a,null,r.a.createElement(h.a,{store:L},r.a.createElement(ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.4ea69560.chunk.js.map