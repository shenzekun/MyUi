var $=require('jquery');
var waterfall = require('./waterfall.js');

function GetData($ct) {
    this.$ct = $ct;
    this.Count = 6;
    this.load();
}
GetData.prototype.getRandomHeight = function () {
    return Math.floor(Math.random() * 200 + 200);
}

GetData.prototype.load = function () {
    var _this = this;
    $("#loadmore").on("click", function () {
        _this.$ct.append(_this.getHtml());
        $("#loadmore").text("loading.....");
        _this.$ct.find('img').on('load', function () {
            waterfall.init(_this.$ct);
            $("#loadmore").text("loadmore");
        });
    });
}

GetData.prototype.getHtml = function () {
    var html = '';
    for (var i = 0; i < this.Count; i++) {
        html += '<li class="col-md-4">';
        html += '<div class="bg">';
        html += '<div class="picture"><img src="https://unsplash.it/304/' + this.getRandomHeight() + '/?random" alt="" style="width:100%;position:relative">'
        html += '<div class="desc"><a href="#" class="">Read More</a></div>';
        html += '</div>';
        html += '<h4>Touring</h4>';
        html += '<p>Photo</p>';
        html += '</div>';
        html += '</li>';
    }
    return html;
}


module.exports = GetData;