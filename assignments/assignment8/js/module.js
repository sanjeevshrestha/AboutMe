"use strict";

(function ($, undefined) {
    $.AccountManager = (function () {

        var accountsList = [];

        return {
            createAccount: function (name, amount) {
                var account = new $.AccountInfo(name, amount);
                accountsList.push(account);
            },
            getAccountsList: function () {
                return accountsList;
            }
        }
    })();
})(_root);