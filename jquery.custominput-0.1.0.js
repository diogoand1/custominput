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
            width : '400px',
            height : '35px',
            backgroundColor : '#fff',
            borderColor : '#d0d0d0',
            borderWidth : '1px',
            borderStyle : 'solid',
            boxColor : '#51a7e8',
            boxColorBack : '#52A8EC',
            transition : '2',
	    submit : { 
		width : '200px',
		height : '35px',
		backgroundColor : '#fff',
	    }
        };
               
        options = $.extend(defaults, options);
	       
        return $('input', this).each( function() {
           var customInput = $(this);
	       //INPUT SUBMIT
	       if (customInput.is(':submit')) {
		    defaults.width = defaults.submit.width;
		    defaults.height = defaults.submit.height;
		    defaults.backgroundColor = defaults.submit.backgroundColor
	       }
               customInput
                    .css({
			 'width' :  defaults.width, 
			 'height' : defaults.height,
			 'background-color' : defaults.backgroundColor,
			 'border-width' : defaults.borderWidth,
			 'border-style' : defaults.borderStyle,
			 'border-color' : defaults.borderColor, 
			 'outline' : 'none',
			 'padding' : '3px',
			 'transition' : 'border linear 0.'+defaults.transition+'s, box-shadow linear 0.'+defaults.transition+'s',
			 '-webkit-transition' : 'border linear 0.'+defaults.transition+'s, box-shadow linear 0.'+defaults.transition+'s',
                         '-o-transition' : 'border linear 0.'+defaults.transition+'s, box-shadow linear 0.'+defaults.transition+'s',
                         '-moz-transition' : 'border linear 0.'+defaults.transition+'s, box-shadow linear 0.'+defaults.transition+'s'
		    })                                    
                    .click(function(){
                        customInput                                
                            //box-shadow
                            .css({
				'box-shadow' : 'inset 0 0 1px'+ defaults.boxColor+', 0 0 8px'+ defaults.boxColorBack,
                                '-webkit-box-shadow' : 'inset 0 0 1px'+ defaults.boxColor+', 0 0 8px'+ defaults.boxColorBack,
                                '-moz-box-shadow' : 'inset 0 0 1px'+ defaults.boxColor+', 0 0 8px'+ defaults.boxColorBack
				});
    
                    })                                        
                    .blur(function(){
                            customInput
                                //box-shadow
                                .css({
				     'box-shadow' : '0 0 0'+ defaults.borderColor,
                                     '-webkit-box-shadow' : '0 0 0'+ defaults.borderColor,
                                     '-moz-box-shadow' : '0 0 0'+ defaults.borderColor
				});
                    });
		
        });
    };
    
}(jQuery));


