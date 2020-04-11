// ==UserScript==
// @name         I'm fine
// @namespace    https://github.com/yqw1212
// @version      0.1
// @description  I'm fine. Thank you!
// @author       missyourmelody
// @match        *://stuinfo.neu.edu.cn/*
// @grant        none
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.0.js
// ==/UserScript==

(function() {
    'use strict';
    $(function () {
        $(document).bind("dblclick", function () {
            $("#sfgcyiqz").val("否");
            $("[name='hjnznl']").val("家");
            $("[name='qgnl']").val("家");
            $("#sfqtdqlxs").val("否");
            $("#sfjcgbr").val("否");
            $("#sfjcglxsry").val("否");
            $("#sfjcgysqzbr").val("否");
            $("#sfjtcyjjfbqk").val("否");
            $("#sfqgfrmz").val("否");
            $("#sfygfr").val("无");
            $("#sfyghxdbsy").val("无");
            $("#sfygxhdbsy").val("无");
            $("button").click();
        })
    })
    // Your code here...
})();
