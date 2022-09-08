// ==UserScript==
// @name         Brainly Helper
// @description	 Essa extensão foi feita pra ajudar todos a terem um acesso mais amplo ao brainly, alem de poder customizar a interface do site.
// @supportURL	 https://github.com/kinuzo/brainly-helper
// @version      1.0
// @author       kinuzo
// @namespace    brainly.helper
// @include      http*://brainly.com*
// @icon         https://styleguide.brainly.com.br/images/favicons/brainly/favicon-0c2222f36b.ico
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==
(function(){
    'use strict'

  window.addEventListener('load', () => {
    addButton('Ativar bypass', ativarbypass)
    })

    function addButton(text, onclick, cssObj) {
        cssObj = cssObj || {position: 'absolute', bottom: '17%', left:'4%', 'z-index': 3}
        var button = document.createElement('button'), btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.onclick = onclick
        Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
        return button
    }

    function ativarbypass() {
        window.localStorage.setItem('flexible-funnel-previews', {})
    }
    
   window.addEventListener('load', () => {
     temapreto('Mudar tema', ativartema)
    })

    function temapreto(text, onclick, cssObj) {
        cssObj = cssObj || {position: 'absolute', bottom: '13%', left:'4%', 'z-index': 3}
        var button = document.createElement('button'), btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.onclick = onclick
        Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
        return button
    }

    function ativartema() {

        function mudarcordofundo(x){
            var backgroundColorRGB=window.getComputedStyle(x,null).backgroundColor;
            if(backgroundColorRGB!="transparent"){
                var RGBValuesArray = backgroundColorRGB.match(/\d+/g);
                var red   = RGBValuesArray[0];
                var green = RGBValuesArray[1];
                var blue  = RGBValuesArray[2];
                var red_needed   = 220;
                var green_needed = 220;
                var blue_needed  = 220;


                if (red>=220&&green>=220&&blue>=220) {

                   if      (red>=250&&red<=255&&green>=250&&green<=255&&blue>=250&&blue<=255) {
                      red_needed   += 0;
                      green_needed += 0; }

                   else if (red>=240&&red<=255&&green>=240&&green<=255&&blue>=240&&blue<=255) {
                      red_needed   += 6;
                      green_needed += 3; }

                   else if (red>=230&&red<=255&&green>=230&&green<=255&&blue>=230&&blue<=255) {
                      red_needed   += 10;
                      green_needed += 5; }

                   else if (red>=220&&red<=255&&green>=220&&green<=255&&blue>=220&&blue<=255) {
                      red_needed   += 14;
                      green_needed += 7; }

                   x.style.backgroundColor="rgb( " +red_needed+ ", " +green_needed+ ", " +blue_needed+ ")";
                   }
                }
            }
        var allElements=document.getElementsByTagName("*");
        for(var i=0; i<allElements.length; i++)  {
            mudarcordofundo(allElements[i]);}
    }
    window.addEventListener("DOMContentLoaded",mudarcordofundo, false);
}());