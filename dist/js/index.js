function changeList(n,t,s){var a=document.getElementById(t).getElementsByTagName("dl");if(s=s||window.event,"mouseover"==s.type){for(var e=0;e<a.length;e++)""==a[e].className&&(e!=a.length-1?a[e].className="bg":a[e].className="bg nobg");n.className=""}}function tab2(n,t,s){for(i=1;i<=s;i++){var a=document.getElementById(n+i),e=document.getElementById(n+"_cont"+i);a.className=i==t?"current":"",e.style.display=i==t?"block":"none"}}function play_pic(){1==play_status&&(tab2("newbook",tag_sn,5),tab2(li_sn[tag_sn-1],na_sn[tag_sn-1],5),na_sn[tag_sn-1]<5?na_sn[tag_sn-1]++:(5==tag_sn?tag_sn=1:tag_sn++,na_sn[tag_sn-1]=1)),setTimeout("play_pic()",6e3)}function set_play_satus(n){play_status=n}function play_tab(n,t,s){if(play_status=0,"newbook"==n)tag_sn=t,na_sn[tag_sn-1]=1,tab2(li_sn[tag_sn-1],na_sn[tag_sn-1],5);else for(na_sn[tag_sn-1]=t,i=0;i<5;i++)if(n==li_sn[i]){tag_sn=i+1;break}for(i=1;i<=s;i++){var a=document.getElementById(n+i),e=document.getElementById(n+"_cont"+i);a.className=i==t?"current":"",e.style.display=i==t?"block":"none"}}var lazyLoadImg=new LazyLoadImg({el:document.querySelector("#lazyLoadImg"),mode:"default",time:300,complete:!0,position:{top:0,right:0,bottom:0,left:0},before:function(){},success:function(n){n.classList.add("success")},error:function(n){n.src="./images/error.png"}}),system={win:!1,mac:!1,xll:!1},p=navigator.platform;system.win=0==p.indexOf("Win"),system.mac=0==p.indexOf("Mac"),system.x11="X11"==p||0==p.indexOf("Linux"),system.win||system.mac||system.xll||(window.location.href="http://m.263zw.com/");var play_status=0,tag_sn=1,na_sn=[1,1,1,1,1],li_sn=["na","nb","nc","nd","ne"],ppRoll;