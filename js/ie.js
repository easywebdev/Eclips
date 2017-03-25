var e = ("article,aside,figcaption,figure,footer,header,hgroup,nav,section,time,main").split(',');
  for (var i = 0; i < e.length; i++) {
    document.createElement(e[i]);
}