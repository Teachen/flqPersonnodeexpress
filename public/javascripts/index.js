/*
	[DESTOON B2B System] Copyright (c) 2008-2018 www.destoon.com
	This is NOT a freeware, use is subject to license.txt
*/
var _p0 = _p1 = 0;
function AutoTab0() {
	Dd('ian').onmouseover = function() {_p0 = 1;} 
	Dd('ian').onmouseout = function() {_p0 = 0;}
	if(_p0) return;
	var c;
	for(var i = 1; i < 4; i++) { if(Dd('ian-h-'+i).className == 'on') {c = i;} }
	c++; 
	if(c > 3) c = 1;
	Tb(Dd('ian-h-'+c));
}
function AutoTab1() {
	Dd('itrade').onmouseover = function() {_p1 = 1;} 
	Dd('itrade').onmouseout = function() {_p1 = 0;}
	if(_p1) return;
	var c;
	var a = new Array;
	var i = 0;
	$('#trade-h').children().each(function() {
		if($(this).attr('class') == 'on') c = i;		
		a[i++] = $(this).attr('id');
	});
	a[i++] = a[0];
	Tb(Dd(a[c+1]));
}
$(function(){
	if(Dd('brands') != null) new dmarquee(220, 10, 3000, 'brands');
	if(Dd('ian') != null) window.setInterval('AutoTab0()', 5000);
	if(Dd('itrade') != null) window.setInterval('AutoTab1()', 8000);
});

// 供应左侧hover效果来自‘衣服网’

(function($){
    function supportCss3(style) { //是否支持css3某功能 
        var prefix = ['webkit', 'Moz', 'ms', 'o'], i, 
        humpString = [], 
        htmlStyle = document.documentElement.style, 
        _toHumb = function (string) { 
            return string.replace(/-(\w)/g, function ($0, $1) {       
                return $1.toUpperCase(); 
            });         
        }; 
         
        for (i in prefix) 
        humpString.push(_toHumb(prefix[i] + '-' + style));       
         
        humpString.push(_toHumb(style)); 
         
        for (i in humpString) 
        if (humpString[i] in htmlStyle) return true; 
         
        return false; 
    }

	window.v6obj={
		init:function(){
			this.rankbox();
			this.categoStor();
		},
		rankbox:function(){
            var J_ranklist = $(".J_ranklist").children('li');   
           
            J_ranklist.on('mouseenter', function(event) { 
                var self = $(this); 
                var J_rankimg = self.find('.J_rankimg'); 
                var J_rannum = self.find('.rank-num');
                self.addClass('active').siblings().removeClass('active'); 	 
                J_rannum.addClass('block');
                J_rankimg.removeClass('none');
                self.siblings().find('.J_rankimg').addClass('none');
                self.siblings().find('.rank-num').removeClass('block'); 
            });
		},
        categoStor:function(){ 
            var _t = $(".J_storelist").children('li'); 
 
            _t.on({mouseenter:function(){
                var self = $(this);
                var J_listimg =self.find('.J_listimg');
                var J_listinf =self.find('.J_listinf');
                var J_listinfori =J_listinf.children('.J_listinfori');

                var sup = supportCss3("transform");
                self.addClass('active').siblings().removeClass('active');   	
                J_listimg.addClass('active');
                J_listinf.addClass('active');
                J_listinfori.addClass('active').prev().addClass('none');    
                   if(!sup){
                        J_listinf.stop().animate({
                            "width":"266px"},
                        100);
                         J_listimg.stop().animate({
                            "width":"80px"},
                        100);
                        self.find(".list-imgs").stop().animate({
                            "width":"110px"},
                        100);
                        self.find(".list-infors").stop().animate({
                            "width":"270px"},
                        100);
                        
                    }  

            },mouseleave:function() {
                var self = $(this);
                var J_listimg =self.find('.J_listimg');
                var J_listinf =self.find('.J_listinf');
                var J_listinfori =J_listinf.children('.J_listinfori');              

                 var sup = supportCss3("transform");

                self.removeClass('active');   
                J_listimg.removeClass('active');
                J_listinf.removeClass('active');
                J_listinfori.removeClass('active').prev().removeClass('none');  

                    if(!sup){
                        J_listinf.stop().animate({
                            "width":"210px"},
                        100);
                         J_listimg.stop().animate({
                            "width":"148px"},
                        100);
                        self.find(".list-imgs").stop().animate({
                            "width":"148px"},
                        100);
                        self.find(".list-infors").stop().animate({
                            "width":"230px"},
                        100);

                    }  
            }});
 

        },


	}
	v6obj.init();
})(jQuery);