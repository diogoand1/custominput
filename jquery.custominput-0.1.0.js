/*!
 * Custom Input - v0.1.0 - 28/03/2013
 *
 * Copyleft 2013 Diogo Santos - diogoand1@gmail.com
 * GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
 * http://www.gnu.org/licenses/gpl.html
 *
 */

$(function ($) {
   
    jQuery.fn.custominput = function(options){
        var defaults = {
            width:           '400',
            height:          '35',
            backgroundColor: '#fff',
            borderColor:     '#d0d0d0',
            borderWidth:     '1',
            borderStyle:     'solid',
            boxColor:        '#51a7e8',
            boxColorBack:    '#52A8EC',
            transition:      '2'
        };
               
        options = $.extend(defaults, options);
        
        return this.each(function(){
            var $this = $('input');
            
                $this
                    //basic
                    .css('width', defaults.width+'px')
                    .css('height', defaults.height+'px')
                    .css('background-color', defaults.backgroundColor)
                    .css('border-width', defaults.borderWidth+'px')
                    .css('border-style', defaults.borderStyle)
                    .css('border-color', defaults.borderColor)
                    .css('outline', 'none')
                    .css('padding', '3px')
            
                    //transition
                    .css('transition', 'border linear 0.'+defaults.transition+'s, box-shadow linear 0.'+defaults.transition+'s')
                    .css('-webkit-transition', 'border linear 0.'+defaults.transition+'s, box-shadow linear 0.'+defaults.transition+'s')
                    .css('-o-transition', 'border linear 0.'+defaults.transition+'s, box-shadow linear 0.'+defaults.transition+'s')
                    .css('-moz-transition', 'border linear 0.'+defaults.transition+'s, box-shadow linear 0.'+defaults.transition+'s');
                
                    //:focus
                    $this.click(function(){
                        $this
                                
                            //box-shadow
                            .css('box-shadow', 'inset 0 0 1px'+ defaults.boxColor+', 0 0 8px'+ defaults.boxColorBack)
                            .css('-webkit-box-shadow', 'inset 0 0 1px'+ defaults.boxColor+', 0 0 8px'+ defaults.boxColorBack)
                            .css('-moz-box-shadow', 'inset 0 0 1px'+ defaults.boxColor+', 0 0 8px'+ defaults.boxColorBack);
    
                    })
                    
                    //:blur
                    .blur(function(){
                            $this
                                //box-shadow
                                .css('box-shadow', '0 0 0'+ defaults.borderColor)
                                .css('-webkit-box-shadow', '0 0 0'+ defaults.borderColor)
                                .css('-moz-box-shadow', '0 0 0'+ defaults.borderColor);
                    });
        });
    };
    
}(jQuery));


