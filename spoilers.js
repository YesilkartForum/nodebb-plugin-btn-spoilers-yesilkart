"use strict";

var YesilkartSpoilers = {
    parse: function(postData, callback) {
        // console.log(postData.postData.content)
        postData.postData.content = postData.postData.content
            .replace(/\#\#spoiler=([^<]*)/g, '***' + '$1' + '***' + '##spoiler')
            .replace(/\#\#spoiler/g, '<div><div href="#" class="show-spoiler btn btn-md btn-default waves-effect" title="İçeriği Göster"><i class="fa fa-eye-slash fa-fw"></i><span class="btn-text" data-show_text="click to show" data-hide_text="click to hide">İçeriği Göster</span></div><div class="spoiler hidden">')
            .replace(/\#\#endspoiler/g, '</div></div>')

        callback(null, postData);
    }
};

module.exports = YesilkartSpoilers;