define(['jquery','gotop','waterfall','data','carousel',], function($,GoTop,waterfall,GetData,carousel) {
    carousel.init($(".carousel"));
    new GetData($("#showPicture"));
    GoTop.init($('body'), $('body'), 300);
});