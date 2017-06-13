"use strict";
var _root = {};//Root object to bind models too. We will use this _root to access all the modules and extend
if (!String.prototype.pad) {
    String.prototype.padfixed = function (pad_length) {
        var result = this;
        var pad_char = ' ';
        if (pad_length > this.length) {
            var padding = pad_char.repeat(pad_length - this.length);
            result = result + padding;
        }
        return result;
    }
}

(function ($, win, doc, undefined) {

    win.onload = function () {
        console.log("Loaded");
        doc.getElementById("btnCreate").onclick = function () {
            var name = doc.getElementById("accName").value;
            var amount = parseInt(doc.getElementById("accDeposit").value);
            if (amount) {
                $.AccountManager.createAccount(name, amount);
            }
            else {
                alert("Deposit Amount should be number");
            }

            var accountList = $.AccountManager.getAccountsList();
            var strAccountList = "";
            accountList.forEach(function (obj) {
                strAccountList += obj.getString() + "\n";
            }, this);

            doc.getElementById("accList").value = strAccountList;
        }
    }


})(_root, window, document);