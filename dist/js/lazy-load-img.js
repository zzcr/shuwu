!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoadImg=e()}(this,function(){"use strict";var t=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.getBoundingClientRect(),n=t.offsetWidth,r=t.offsetHeight,i=window.innerWidth,a=window.innerHeight,s=!(o.right-e.left<=0&&o.left+n-e.left<=0||o.left+e.right>=i&&o.right+e.right>=n+i),c=!(o.bottom-e.top<=0&&o.top+r-e.top<=0||o.top+e.bottom>=a&&o.bottom+e.bottom>=r+a);return 0!=t.width&&0!=t.height&&s&&c},e=document.createElement("canvas");e.getContext("2d").globalAlpha=0;var o={},n=function(t,n,r){if(o[t])return o[t];e.width=n,e.height=r;var i=e.toDataURL("image/png");return o[t]=i,i},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.options={el:null,mode:"default",time:300,complete:!0,diy:{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"},position:{top:0,right:0,bottom:0,left:0},before:function(){},success:function(){},error:function(){}},a(this.options.position,t.position||{}),a(this.options.diy,t.diy||{}),a(this.options,t),this._timer=!0,this.start()}return i(e,[{key:"start",value:function(){var e=this,o=this.options;clearTimeout(this._timer),this._timer&&(this._timer=setTimeout(function(){var n=Array.prototype.slice.apply(o.el.querySelectorAll("[data-src]"));return!n.length&&o.complete?clearTimeout(e._timer):(n.forEach(function(n){!n.dataset.LazyLoadImgState&&t(n,o.position)&&e.loadImg(n)}),void e.start())},o.time))}},{key:"loadImg",value:function(t){var e=this,o=this.options;t.dataset.LazyLoadImgState="start",o.before.call(this,t);var r=new Image;r.src=t.dataset.src,r.addEventListener("load",function(){return"diy"==o.mode?(t.src=n(t.src,t.width,t.height),a(t.style,o.diy),t.style.backgroundImage="url("+r.src+")"):t.src=r.src,delete t.dataset.src,t.dataset.LazyLoadImgState="success",o.success.call(e,t)},!1),r.addEventListener("error",function(){delete t.dataset.src,t.dataset.LazyLoadImgState="error",o.error.call(e,t)},!1)}},{key:"destroy",value:function(){delete this._timer}}]),e}();return s});