define(['jquery','gotop','waterfall','data','carousel',], function($,GoTop,waterfall,GetData,carousel) {
    carousel.init($(".carousel1"));
    new GetData($("#showPicture"));
    GoTop.init($('body'), $('body'), 300);
});