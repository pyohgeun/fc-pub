"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var siblings = function siblings(t) {
  return _toConsumableArray(t.parentElement.children).filter(function (e) {
    return e != t;
  });
};

var fc = {
  inputLineType: function inputLineType() {
    var inputLines = document.querySelectorAll('.input-line input');
    var btnReset = document.querySelectorAll('.input-line .btn-input-reset');

    var isValueIn = function isValueIn(target) {
      if (target.value.length > 0) {
        return true;
      } else {
        return false;
      }
    };

    inputLines.forEach(function (e) {
      // 값이 있을 경우 reset 버튼 노출
      e.addEventListener('input', function (e) {
        var parent = e.target.closest('.input-line');

        if (isValueIn(e.target)) {
          parent.classList.add('is-value-in');
        } else {
          parent.classList.remove('is-value-in');
        }
      });
      e.addEventListener('focus', function (e) {
        var parent = e.target.closest('.input-line');
        parent.classList.add('focused');
      });
      e.addEventListener('blur', function (e) {
        var parent = e.target.closest('.input-line');
        parent.classList.remove('focused');
      });
    });
    btnReset.forEach(function (e) {
      e.addEventListener('click', function (e) {
        e.target.previousElementSibling.value = "";
        console.log(e.target.closest('.input-line'));
        e.target.closest('.input-line').classList.remove('is-value-in');
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function () {// for(let item in fc){
  //     fc[item]();
  // }
});