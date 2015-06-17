// ==UserScript==
// @name Monster Minigame CSS Tweaks
// @namespace https://github.com/spAnser/steamSummerMinigame_cssTweaks
// @version 1.1
// @description Tweaks some of the CSS for the Monster Minigame for better visibility
// @author spAnser
// @match *://steamcommunity.com/minigame/towerattack*
// @match *://steamcommunity.com//minigame/towerattack*
// @grant none
// @updateURL https://raw.githubusercontent.com/spAnser/steamSummerMinigame_cssTweaks/master/cssTweaks.user.js
// @downloadURL https://raw.githubusercontent.com/spAnser/steamSummerMinigame_cssTweaks/master/cssTweaks.user.js
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('#upgrades .title_upgrates,#upgrades .title_upgrates.abilities{display:none}.cantafford .upgrade .link{background:rgba(127,140,141,1)}.cantafford .upgrade .link:hover{background:rgba(149,165,166,1)}.upgrade .info .icon,.upgrade.purchase .info .icon{position:absolute;right:0;top:0}.upgrade .info .level,.upgrade.purchase .info .level{color:rgba(236,240,241,1);font-size:16px;line-height:30px;margin:0;padding:0;position:absolute;right:0;text-align:right;top:0;width:75px}.upgrade .info .level:before,.upgrade.purchase .info .level:before{color:rgba(236,240,241,1);content:"lvl";font-size:8px;margin:0;padding:0;vertical-align:middle}.upgrade .info .name,.upgrade.purchase .info .name{color:rgba(236,240,241,1);font-size:8px;left:1px;margin:0;max-width:100%;padding:0;position:absolute;top:1px;width:100%}.upgrade .info,.upgrade.purchase .info{color:rgba(236,240,241,1);margin:0;max-width:100%;padding:0;position:absolute;top:-5px;width:100%}.upgrade .link .cost,.upgrade.purchase .link .cost{color:rgba(241,196,15,1);display:inline-block}.upgrade .link .upgrade_text,.upgrade.purchase .link .upgrade_text{display:inline-block}.upgrade .link,.upgrade.purchase .link{background:rgba(142,68,173,1);bottom:0;color:rgba(236,240,241,.85);display:block;height:auto;left:0;line-height:12px;padding:2px 0;position:absolute;text-align:center;text-decoration:none;width:175px}.upgrade .link:hover,.upgrade.purchase .link:hover{background:rgba(155,89,182,1)}.upgrade,.upgrade.purchase{background:rgba(52,73,94,1);color:rgba(236,240,241,1);display:inline-block;height:20px;margin:5px;min-height:0;padding:0;position:relative;width:250px;text-shadow:1px 1px 0 #000}');
