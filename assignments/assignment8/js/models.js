"use strict";

if (!_root) {
    _root = {};
}

(function ($, undefined) {
    $.AccountInfo = function (name, amount) {
        this.name = name;
        this.amount = amount;

        this.getName = function () {
            return this.name;
        }
        this.getAmount = function () {
            return this.amount;
        }
        this.getString = function () {
            var str = `Account Name : ${this.name}`.padfixed(60)+`Balance : ${this.amount}`;
            return str;

        }

    };
})(_root);
