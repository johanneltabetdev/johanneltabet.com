(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(t,e,o){"use strict";o.r(e);var n=o(9),r=o(11),l=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[e("g",{attrs:{transform:"translate(1 1)",stroke:"#000","stroke-width":"2",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"9",cy:"9",r:"4"}}),e("path",{attrs:{d:"M9 0v1.636m0 14.728V18M2.635 2.635l1.161 1.161m10.408 10.408l1.161 1.161M0 9h1.636m14.728 0H18M2.635 15.365l1.161-1.161M14.204 3.796l1.161-1.161"}})])])}),[],!1,null,null,null).exports,c=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[e("path",{attrs:{d:"M16.252 13.615c-.15.008-.29.008-.44.008-2.422 0-4.702-.883-6.417-2.493-1.714-1.61-2.654-3.752-2.654-6.026A8.118 8.118 0 018.546 0c-.632.063-1.24.188-1.83.36C2.82 1.516 0 4.932 0 8.973 0 13.959 4.302 18 9.612 18c2.937 0 5.559-1.235 7.323-3.181.4-.446.765-.93 1.065-1.446a9.206 9.206 0 01-1.748.242zm-6.64 3.134c-4.569 0-8.28-3.485-8.28-7.776 0-3.056 1.88-5.698 4.61-6.972a9.169 9.169 0 00-.533 3.103c0 5.15 4.244 9.371 9.62 9.746-1.448 1.188-3.345 1.9-5.417 1.9z"}})])}),[],!1,null,null,null).exports,d=Object(n.defineComponent)({components:{SunIcon:l,MoonIcon:c},setup:function(){var t=Object(n.ref)(!1);return Object(n.onMounted)((function(){window.matchMedia("(prefers-color-scheme: dark)").matches&&(t.value=!0),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){t.value=e.matches}))})),Object(n.watch)(t,(function(t){document.documentElement.dataset.theme=t?"dark":"light"})),{isDark:t}}}),m=(o(247),Object(r.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{staticClass:"theme-switch",attrs:{for:"theme-switch"}},[o("span",{staticClass:"sr-only"},[t._v("Toggle theme")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.isDark,expression:"isDark"}],staticClass:"theme-switch__input",attrs:{id:"theme-switch",type:"checkbox"},domProps:{checked:Array.isArray(t.isDark)?t._i(t.isDark,null)>-1:t.isDark},on:{change:function(e){var o=t.isDark,n=e.target,r=!!n.checked;if(Array.isArray(o)){var l=t._i(o,null);n.checked?l<0&&(t.isDark=o.concat([null])):l>-1&&(t.isDark=o.slice(0,l).concat(o.slice(l+1)))}else t.isDark=r}}}),t._v(" "),o("span",{staticClass:"theme-switch__slider"}),t._v(" "),o("span",{staticClass:"theme-switch__icon"},[o(t.isDark?"MoonIcon":"SunIcon",{tag:"component"})],1)])}),[],!1,null,null,null));e.default=m.exports},125:function(t,e,o){"use strict";o.r(e);var n=o(9),r=o(124),l=Object(n.defineComponent)({components:{ThemeSwitch:r.default}}),c=(o(249),o(11)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"nav right-0 left-0 fixed z-10 font-bold"},[o("div",{staticClass:"wrap flex justify-between items-center"},[o("nuxt-link",{staticClass:"lg:text-xl",attrs:{to:"/"}},[t._v("Johann Eltabet")]),t._v(" "),o("ul",{staticClass:"nav-items flex items-center text-sm lg:text-base -mr-2 py-3 lg:py-6"},[o("li",{staticClass:"sm:pr-2"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Work")])],1),t._v(" "),o("li",{staticClass:"sm:pr-2"},[o("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),o("li",[o("ThemeSwitch",{staticClass:"ml-6"})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ThemeSwitch:o(124).default})},128:function(t,e,o){"use strict";o(14);e.a=function(t){var e=t.$axios,o=t.error;e.onError((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.response,n=void 0===e?{}:e,r=t.message,l=void 0===r?"":r;return o({statusCode:n.status,message:l}),Promise.resolve(!1)})),e.onResponse((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Promise.resolve(t.data)}))}},129:function(t,e,o){"use strict";o(67),o(273),o(40),o(104),o(41);var n=o(0),r="IntersectionObserver"in window,l={install:function(){var t=this;this.items=[],this.options={rootMargin:"0px 0px 20% 0px",threshold:.01},n.default.directive("observe-visibility",this.bind.bind(this),this.update.bind(this),this.unbind.bind(this)),r?this.createObserver():this.items.forEach((function(e){t.processOptions(e.options.value).callback(!0,e.el)}))},createObserver:function(){var t=this;this.observer=new IntersectionObserver((function(e,o){e.forEach((function(e){var n=e.target,r=t.items.find((function(t){return t.el===n})),l=r?t.processOptions(r.options.value):{};if(l.once)(e.isIntersecting||e.intersectionRatio)&&(o.unobserve(n),l.callback(!0,n),t.removeItem(n));else{var c=e.isIntersecting&&e.intersectionRatio>0;l.callback(c,n)}}))}),this.options)},bind:function(t,e){e.value&&(t.vueVisibilityState=!0,this.items.some((function(o){return o==={el:t,options:e}}))||this.items.push({el:t,options:e}),this.observer?this.observer.observe(t):this.processItemsInViewListener&&this.processItemsInViewListener())},update:function(t,e,o){var n=e.value;n||this.unbind(t),t.vueVisibilityState?this.observer.observe(t):this.bind(t,{value:n},o)},unbind:function(t){t.vueVisibilityState&&delete t.vueVisibilityState,this.removeItem(t)},processOptions:function(t){return"function"==typeof t?{callback:t}:t},removeItem:function(t){this.items=this.items.filter((function(e){return e.el!==t}))}};n.default.use(l)},168:function(t,e,o){var content=o(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("6958804c",content,!0,{sourceMap:!1})},169:function(t,e,o){var content=o(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("69619090",content,!0,{sourceMap:!1})},170:function(t,e,o){var content=o(252);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("74fb47d0",content,!0,{sourceMap:!1})},184:function(t,e,o){"use strict";var n=o(9),r=o(61),l=o(125),c=o(87),d=Object(n.defineComponent)({components:{Navigation:l.default,Footer:c.default},setup:function(){var t=Object(n.useContext)().$axios,e=Object(n.useAsync)((function(){return t.get("/api/options")}),"hOHmeSR4Vi7Y7Kr2diRGKw==");Object(r.provideStore)({options:e})}}),m=o(11),component=Object(m.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navigation"),this._v(" "),e("Nuxt",{staticClass:"main"}),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navigation:o(125).default,Footer:o(87).default})},186:function(t,e,o){o(187),t.exports=o(188)},221:function(t,e,o){var content=o(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("53c32468",content,!0,{sourceMap:!1})},222:function(t,e,o){(e=o(33)(!1)).push([t.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.rounded-full{border-radius:9999px}.border-solid{border-style:solid}.border-2{border-width:2px}.border-t{border-top-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline{display:inline}.flex{display:flex}.table{display:table}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.font-medium{font-weight:500}.font-bold{font-weight:700}.h-0{height:0}.h-8{height:2rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.mb-0{margin-bottom:0}.mt-1{margin-top:.25rem}.mb-1{margin-bottom:.25rem}.mt-2{margin-top:.5rem}.mb-2{margin-bottom:.5rem}.mt-4{margin-top:1rem}.mb-4{margin-bottom:1rem}.mt-6{margin-top:1.5rem}.ml-6{margin-left:1.5rem}.mt-8{margin-top:2rem}.mb-8{margin-bottom:2rem}.mt-12{margin-top:3rem}.mb-12{margin-bottom:3rem}.mt-16{margin-top:4rem}.-mr-2{margin-right:-.5rem}.object-cover{-o-object-fit:cover;object-fit:cover}.opacity-0{opacity:0}.opacity-50{opacity:.5}.overflow-hidden{overflow:hidden}.px-1{padding-left:.25rem;padding-right:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-12{padding-top:3rem;padding-bottom:3rem}.pt-1{padding-top:.25rem}.pt-2{padding-top:.5rem}.pl-2{padding-left:.5rem}.pt-4{padding-top:1rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pt-16{padding-top:4rem}.pt-24{padding-top:6rem}.pointer-events-none{pointer-events:none}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.left-0{left:0}.top-auto{top:auto}.capitalize{text-transform:capitalize}.w-0{width:0}.w-8{width:2rem}.w-20{width:5rem}.w-full{width:100%}.z-10{z-index:10}.transform{--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))}.transition-all{transition-property:all}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:640px){.sm\\:container{width:100%}}@media (min-width:640px) and (min-width:640px){.sm\\:container{max-width:640px}}@media (min-width:640px) and (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:640px) and (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:640px) and (min-width:1280px){.sm\\:container{max-width:1280px}}@media (min-width:640px){.sm\\:pr-2{padding-right:.5rem}.sm\\:pl-6{padding-left:1.5rem}}@media (min-width:768px){.md\\:container{width:100%}}@media (min-width:768px) and (min-width:640px){.md\\:container{max-width:640px}}@media (min-width:768px) and (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:768px) and (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:768px) and (min-width:1280px){.md\\:container{max-width:1280px}}@media (min-width:1024px){.lg\\:container{width:100%}}@media (min-width:1024px) and (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:1024px) and (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px) and (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1024px) and (min-width:1280px){.lg\\:container{max-width:1280px}}@media (min-width:1024px){.lg\\:flex{display:flex}.lg\\:flex-wrap{flex-wrap:wrap}.lg\\:justify-between{justify-content:space-between}.lg\\:text-base{font-size:1rem}.lg\\:text-lg{font-size:1.125rem}.lg\\:text-xl{font-size:1.25rem}.lg\\:text-2xl{font-size:1.5rem}.lg\\:-mx-4{margin-left:-1rem;margin-right:-1rem}.lg\\:mt-0{margin-top:0}.lg\\:mb-6{margin-bottom:1.5rem}.lg\\:mb-16{margin-bottom:4rem}.lg\\:mt-24{margin-top:6rem}.lg\\:p-4{padding:1rem}.lg\\:py-6{padding-top:1.5rem;padding-bottom:1.5rem}.lg\\:pb-0{padding-bottom:0}.lg\\:pt-2{padding-top:.5rem}.lg\\:pb-4{padding-bottom:1rem}.lg\\:pb-12{padding-bottom:3rem}.lg\\:pt-16{padding-top:4rem}.lg\\:pt-24{padding-top:6rem}.lg\\:pt-32{padding-top:8rem}.lg\\:w-40{width:10rem}.lg\\:w-3\\/12{width:25%}.lg\\:w-4\\/12{width:33.333333%}.lg\\:w-6\\/12{width:50%}.lg\\:w-9\\/12{width:75%}}@media (min-width:1280px){.xl\\:container{width:100%}}@media (min-width:1280px) and (min-width:640px){.xl\\:container{max-width:640px}}@media (min-width:1280px) and (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1280px) and (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1280px) and (min-width:1280px){.xl\\:container{max-width:1280px}}:root{--bg:#fff;--text:#000;--brand:#1a73e8;--gray:rgba(0,0,0,0.6);--header-bg:hsla(0,0%,100%,0.6);--project-bg:hsla(0,0%,94.5%,0.9451);--border:rgba(0,0,0,0.08);--font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;--site-width:1200px;--input:#fff}[data-theme=dark]{--bg:#161515;--text:#fff;--gray:hsla(0,0%,100%,0.5);--header-bg:rgba(22,21,21,0.6);--project-bg:#282828;--border:hsla(0,0%,100%,0.08);--input:#292929}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-family:var(--font-family);background-color:#fff;background-color:var(--bg);color:#000;color:var(--text);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.nuxt-progress{background:#000!important;background:var(--text)!important}.wrap{padding-left:1.5rem;padding-right:1.5rem;max-width:1200px;max-width:var(--site-width)}.main{min-height:calc(100vh - 290px);padding-top:6rem}.text-brand{color:#1a73e8;color:var(--brand)}.text-gray{color:rgba(0,0,0,.6);color:var(--gray)}.border-color{border-color:rgba(0,0,0,.08);border-color:var(--border)}h1{font-size:1.5rem;font-weight:700}h1 .underline{box-shadow:0 3px 0;color:#000;color:var(--text)}.underline{box-shadow:0 1px 0;color:currentColor;text-decoration:none;cursor:pointer}.button{background:#1a73e8;background:var(--brand);display:inline-block;text-align:center;font-size:1.125rem;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));font-weight:700;padding:.75rem;border-radius:.375rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-duration:.3s}.button.-min-width{width:10rem}@media (min-width:640px){.wrap{padding-left:3rem;padding-right:3rem}}@media (min-width:1024px){.wrap{padding-left:3rem;padding-right:3rem;margin:0 auto}.main{padding-top:10rem}h1{font-size:2.25rem}}.fade-enter-active,.fade-leave-active{transition:opacity .25s}.fade-enter,.fade-leave-to{opacity:0}.fade-leave-active,.page-enter-active{transition:opacity .25s ease-out,transform .6s cubic-bezier(.165,.84,.44,1)}.page-enter,.page-leave-to{opacity:0;transform:translateY(15px)}',""]),t.exports=e},247:function(t,e,o){"use strict";o(168)},248:function(t,e,o){(e=o(33)(!1)).push([t.i,'.theme-switch{display:none}@media (min-width:640px){.theme-switch{width:64px;height:34px;display:block;cursor:pointer;position:relative;display:inline-block}}.theme-switch__input{width:0;height:0;opacity:0}.theme-switch__slider{background-color:#ddd;position:absolute;top:0;right:0;bottom:0;left:0;border-radius:9999px}.theme-switch__slider:before{content:"";bottom:4px;left:4px;width:26px;height:26px;position:absolute;border-radius:9999px;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-duration:.2s}.theme-switch__input:checked+.theme-switch__slider{background-color:var(--brand)}.theme-switch__input:focus+.theme-switch__slider{box-shadow:0 0 1px var(--brand)}.theme-switch__input:checked+.theme-switch__slider:before{transform:translateX(28px)}.theme-switch__icon{right:11px;position:absolute;top:7px;width:18px;height:18px;opacity:.5}.theme-switch__icon svg{fill:#fff}.theme-switch__input:checked+*+.theme-switch__icon{left:8px;top:8px;right:auto;transform:rotate(25deg);opacity:1}',""]),t.exports=e},249:function(t,e,o){"use strict";o(169)},250:function(t,e,o){(e=o(33)(!1)).push([t.i,".nav{background:var(--header-bg);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.nav .nav-items a{color:var(--gray);padding:.5rem}.nav a.nuxt-link-exact-active{color:var(--text);pointer-events:none}",""]),t.exports=e},251:function(t,e,o){"use strict";o(170)},252:function(t,e,o){(e=o(33)(!1)).push([t.i,"footer{font-weight:500}footer a{text-transform:capitalize;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}footer .nuxt-link-exact-active{font-weight:700;box-shadow:0 1px 0}",""]),t.exports=e},61:function(t,e,o){"use strict";o.r(e),o.d(e,"provideStore",(function(){return l})),o.d(e,"useStore",(function(){return c}));o(243),o(246),o(14);var n=o(9),r=Symbol("state");function l(t){Object(n.provide)(r,t)}function c(){var t=Object(n.inject)(r);if(!t)throw new Error("no store found");return t}},87:function(t,e,o){"use strict";o.r(e);var n=o(9),r=o(61),l=["twitter","linkedin","github"],c=Object(n.defineComponent)({setup:function(){var t=Object(r.useStore)().options;return{options:void 0===t?{}:t,links:l}}}),d=(o(251),o(11)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"border-t border-color py-12 mt-8 lg:mt-24"},[o("div",{staticClass:"wrap lg:flex lg:flex-wrap lg:justify-between"},[o("div",{staticClass:"lg:w-4/12"},[o("ul",[o("li",{staticClass:"mb-2"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Work")])],1),t._v(" "),o("li",{staticClass:"mb-2"},[o("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),t._v(" "),o("div",{staticClass:"lg:w-4/12 mt-6 lg:mt-0"},[o("ul",t._l(t.links,(function(link){return o("li",{key:link,staticClass:"mb-2"},[o("a",{attrs:{href:t.options[link],target:"_blank",rel:"noopener"}},[t._v(t._s(link))])])})),0)]),t._v(" "),o("div",{staticClass:"lg:w-3/12 mt-6 lg:mt-0"},[o("div",{staticClass:"text-xs mb-4",domProps:{innerHTML:t._s(t.options.colophon)}}),t._v(" "),o("p",{staticClass:"text-xs"},[t._v("© Johann Eltabet "+t._s((new Date).getFullYear()))])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:o(87).default})}},[[186,5,1,6]]]);