

var $=require('jquery');
var carousel=require('./js/carousel.js');
var GoTop=require('./js/gotop.js');
var waterfall=require('./js/waterfall.js');
var GetData=require('./js/data.js');

carousel.init($(".carousel"));

new GetData($("#showPicture"));
GoTop.init($('body'), $('body'), 300);

