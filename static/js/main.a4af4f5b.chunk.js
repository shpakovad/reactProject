(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,a){e.exports={newsWrapper:"News_newsWrapper__3ZGUA",imgTitle:"News_imgTitle__3RWui",newsTitle:"News_newsTitle__1_Iz5",newsItemWrapper:"News_newsItemWrapper__2_Lyz",animatedBackground:"News_animatedBackground__J3gfM"}},40:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/nyt_logo.8d5a2dd6.jpg"},45:function(e,t,a){e.exports=a(74)},5:function(e,t,a){e.exports={weatherWrapper:"Weather_weatherWrapper__fbkFi",searchCityInput:"Weather_searchCityInput__3WEkr",searchCityInputError:"Weather_searchCityInputError__Er1K5",searchCityBtn:"Weather_searchCityBtn__22LgB",wrapperCityDates:"Weather_wrapperCityDates__LO2jN",cityName:"Weather_cityName__2f4Og",mainImg:"Weather_mainImg__1QKdn",timeValue:"Weather_timeValue__36yNZ",dateValue:"Weather_dateValue__2h_UC",temp:"Weather_temp__3a55_",tempFeels:"Weather_tempFeels__3j2Zt",description:"Weather_description__3nZnA"}},50:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),i=a.n(c),l=(a(50),a(8)),s=a(9),o=a(11),u=a(10),m=a(12),p=a(17),d=a(18),h=a(20),v=a(21),g=a(25),E=a(16),b=a.n(E),w=b.a.create({baseURL:"https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=".concat("pFpSg40feER6OKDiEgPgdLKM1TFaXD8k")}),f=function(){return w.get("",{})},y="api_data/news/RESULTS",_={results:[]},O=function(){return function(e){f().then((function(t){var a=t.data.results;e(function(e){return{type:y,newResults:e}}(a))})).catch(Error)}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(g.a)({},e,{results:t.newResults});default:return e}},N=a(42),k=b.a.create({baseURL:"https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=".concat("AIzaSyA1ekIAkTGCDSz_MdhqrskiiL7LuhQxYqs")}),V=function(){return k.get("",{})},W={popularVideos:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"api_data/videos/POPULAR-VIDEOS-LIST":return Object(g.a)({},e,{popularVideos:t.popularVideos})}},C=Object(v.c)({news:j,videos:x}),S=Object(v.d)(C,Object(v.a)(N.a)),I=a(14),D=a(5),F=a.n(D);function L(){var e=Object(n.useState)(void 0),t=Object(I.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(void 0),l=Object(I.a)(i,2),s=l[0],o=l[1],u=Object(n.useState)(void 0),m=Object(I.a)(u,2),p=m[0],d=m[1],h=Object(n.useState)(void 0),v=Object(I.a)(h,2),g=v[0],E=v[1],w=Object(n.useState)(void 0),f=Object(I.a)(w,2),y=f[0],_=f[1],O=Object(n.useState)(void 0),j=Object(I.a)(O,2),N=j[0],k=j[1],V=Object(n.useState)(void 0),W=Object(I.a)(V,2),x=W[0],C=W[1],S=Object(n.useState)(void 0),D=Object(I.a)(S,2),L=D[0],R=D[1],P=Object(n.useState)(!1),A=Object(I.a)(P,2),T=A[0],B=A[1],q=function(e){switch(e){case"1":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/11d@2x.png",alt:""});case"2":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/09d@2x.png",alt:""});case"3":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/10d@2x.png",alt:""});case"4":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/13d@2x.png",alt:""});case"5":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/09d@2x.png",alt:""});case"6":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/13d@2x.png",alt:""});case"7":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/50d@2x.png",alt:""});case"8":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/01d@2x.png",alt:""});case"9":return r.a.createElement("img",{src:"http://openweathermap.org/img/wn/04d@2x.png",alt:""})}},M="".concat(!0===T?F.a.searchCityInputError:F.a.searchCityInput),U=new Date,z=U.getFullYear()+"-"+Number(U.getMonth()+1)+"-"+U.getDate();return r.a.createElement("div",{className:F.a.weatherWrapper},r.a.createElement("div",{className:F.a.dateValue}," ",z," "),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.city.value;if(t){b.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("bcadf81ac18c65d589a0b694bcf27724")).then((function(e){c(e.data.name),o(e.data.sys.country),d(e.data.weather[0].description),E(e.data.weather[0].id),_((e.data.main.temp-273.15).toFixed(0)),k((e.data.main.feels_like-273.15).toFixed(0)),C(e.data.wind.speed.toFixed(0)),R(void 0),B(!1)}))}else R("Enter the city!"),c(void 0),o(void 0),d(void 0),E(void 0),_(void 0),k(void 0),C(void 0),B(!0)},"data-test-id":"increment"},r.a.createElement("input",{type:"text",className:M,placeholder:"Enter City...",name:"city"}),r.a.createElement("button",{className:F.a.searchCityBtn}," Get Weather ")),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:F.a.wrapperCityDates},r.a.createElement("span",{className:F.a.cityName}," ",a,", ",s," "),y&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:F.a.temp}," ",y," \xb0C"),r.a.createElement("div",{className:F.a.tempFeels}," feels like: ",N," \xb0C")),r.a.createElement("div",null," ",g>=200&&g<=232&&q("1"),"  "),r.a.createElement("div",null," ",g>=300&&g<=321&&q("2"),"  "),r.a.createElement("div",null," ",g>=500&&g<=504&&q("3"),"  "),r.a.createElement("div",null," ",511===g&&q("4"),"  "),r.a.createElement("div",null," ",g>=520&&g<=531&&q("5"),"  "),r.a.createElement("div",null," ",g>=600&&g<=622&&q("6"),"  "),r.a.createElement("div",null," ",g>=701&&g<=781&&q("7"),"  "),r.a.createElement("div",null," ",800===g&&q("8"),"  "),r.a.createElement("div",null," ",g>=801&&g<=804&&q("9"),"  "),r.a.createElement("div",{className:F.a.description}," ",p," "),r.a.createElement("div",{className:F.a.description}," ",x&&r.a.createElement(r.a.Fragment,null," wind speed: ",x," m/s ")))),r.a.createElement("div",{className:F.a.cityName}," ",L," "))}a(72);var R=a(19),P=a.n(R),A=a(43),T=a.n(A),B=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.url,a=e.title,n=e.image;return r.a.createElement("div",{className:P.a.newsItemWrapper},r.a.createElement("a",{href:"".concat(t),className:P.a.newsTitle,target:"_blank",rel:"noopener noreferrer"}," ",a," "),!n&&r.a.createElement("div",null," ",r.a.createElement("img",{className:P.a.imgTitle,alt:"",src:T.a})," "),n&&r.a.createElement("div",null," ",r.a.createElement("img",{className:P.a.imgTitle,alt:"",src:n}),"  "))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getResults=function(e){a.props.getResults(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getResults(this.props.results)}},{key:"render",value:function(){var e=this.props.results,t=e.map((function(e,t){return r.a.createElement(B,{key:t,title:e.title,image:e.thumbnail_standard,url:e.url})}));return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:P.a.newsWrapper},t)))}}]),t}(n.PureComponent),M=Object(h.b)((function(e){return{results:e.news.results}}),(function(e){return{getResults:function(t){e(O())}}}))(q),U=(a(40),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getPopularVideosList(this.props.popularVideos)}},{key:"render",value:function(){var e=this.props,t=e.titlePopularVideos,a=e.popularVideos;return r.a.createElement("div",{className:"wrapper-video"},r.a.createElement(p.b,{to:"/videos_found",className:"btn btn-outline-secondary search-btn",type:"button",id:"button-addon2"}," Search Videos "),r.a.createElement("div",{className:"text-popular"}," Popular:"),!t&&!a&&r.a.createElement("div",{className:"spinner-border text-danger spinner-place",role:"status"}),r.a.createElement("div",{className:"videos"},r.a.createElement("div",null,a)))}}]),t}(n.PureComponent)),z=Object(h.b)((function(e){return{popularVideos:e.videos.popularVideos}}),(function(e){return{getPopularVideosList:function(t){e(function(e){return function(t){V().then((function(a){console.log(a.data.items),a.data.items.map((function(e){var t="https://www.youtube.com/embed/".concat(e.id,"?controls=2"),a=e.snippet.title;return r.a.createElement("div",{className:"item-wrapper",key:e.id},r.a.createElement("li",{className:"title-popular-video"},r.a.createElement("div",{className:"wrapper-title-video"},r.a.createElement("span",null," ",a," ")),r.a.createElement("iframe",{width:"300",height:"200",src:t,frameBorder:"0",title:"myFrame"})))})),t(function(e){return{type:"api_data/videos/POPULAR-VIDEOS-LIST",popularVideos:e}}(e))}))}}(t))}}}))(U),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={resultValue:""},a.addValue=function(e){e.preventDefault();var t=e.target.elements.video.value;if(t){b.a.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&q=".concat(t,"&type=video&videoDefinition=any&key=").concat("AIzaSyA1ekIAkTGCDSz_MdhqrskiiL7LuhQxYqs")).then((function(e){var t=e.data.items.map((function(e,t){var a="https://www.youtube.com/embed/".concat(e.id,"?controls=2"),n=e.snippet.title.replace(/&quot;/g," ");return r.a.createElement("div",{className:"wrapper-found-video",key:t},r.a.createElement("li",{className:"title-found-video"},r.a.createElement("div",{className:"wrapper-frame-video"},r.a.createElement("span",null," ",n," ")),r.a.createElement("iframe",{className:"frame-video",width:"60%",height:"300px",src:a,frameBorder:"0",title:"myFrameVideo"})))}));a.setState({resultValue:t})}))}else console.log("Error")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.resultValue;return r.a.createElement("div",{className:"wrapper-video"},r.a.createElement("form",{onSubmit:this.addValue,"data-test-id":"increment"},r.a.createElement("div",{className:"input-group mb-3 search-input"},r.a.createElement("input",{type:"text",name:"video",className:"form-control","aria-describedby":"button-addon2"}),r.a.createElement("button",{className:"btn btn-outline-secondary",id:"button-addon2"}," Search"))),r.a.createElement("div",{className:"text-resultValue"},e))}}]),t}(n.PureComponent),K=Object(d.e)(G),Z=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"wrapperHeader"},r.a.createElement(p.b,{to:"/news"}," News "),r.a.createElement(p.b,{to:"/weather"}," Weather "),r.a.createElement(p.b,{to:"/videos"}," Videos "))),r.a.createElement("div",null,r.a.createElement(d.a,{path:"/news",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(d.a,{path:"/weather",render:function(){return r.a.createElement(L,null)}}),r.a.createElement(d.a,{path:"/videos",render:function(){return r.a.createElement(z,null)}}),r.a.createElement(d.a,{path:"/videos_found",render:function(){return r.a.createElement(K,null)}})))}}]),t}(n.PureComponent),J=function(){return r.a.createElement(p.a,null,r.a.createElement(h.a,{store:S},r.a.createElement(Z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.a4af4f5b.chunk.js.map