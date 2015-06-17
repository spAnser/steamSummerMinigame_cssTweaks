// ==UserScript==
// @name Monster Minigame CSS Tweaks
// @namespace https://github.com/spAnser
// @version 1.0
// @description Tweaks some of the CSS for the Monster Minigame for better visibility
// @author spAnser
// @match *://steamcommunity.com/minigame/towerattack*
// @match *://steamcommunity.com//minigame/towerattack*
// @grant none
// @updateURL https://raw.githubusercontent.com/spAnser/steamSummerMinigame_cssTweaks/master/cssTweaks.user.js
// @downloadURL https://raw.githubusercontent.com/spAnser/steamSummerMinigame_cssTweaks/master/cssTweaks.user.js
// ==/UserScript==

var link = window.document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://raw.githubusercontent.com/spAnser/steamSummerMinigame_cssTweaks/master/cssTweaks.css';
document.getElementsByTagName("HEAD")[0].appendChild(link);