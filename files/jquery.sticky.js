(function($){$.fn.stickyMenubar=function(o){o=$.extend({top:null,floatingDiv:null,floatingDivBackground:false,megaMenu:true,onScroll:function(){},onLeaveTop:function(){},sensitivity:7,padding:5,container_width:960},o||{});var setLiActions=function(t,lvl){var parent_ul=t.children('ul:first');if(lvl>0){t.addClass('inner_menu').hide();}
else{if(!o.floatingDivBackground){t.addClass('smenubar_background');}}
t.mouseleave(function(){$(this).children('li').children('ul').hide();});t.children('li').each(function(){var li=$(this);var class_parent='';var class_child='';var uls=li.children('ul');if(uls.length){uls.each(function(){setLiActions($(this),lvl+1);})
if(lvl==0){li.children('a:first').addClass('arrow_down');}
else{li.children('a:first').addClass('arrow_right');}
if(!$.fn.hoverIntent){alert('hoverIntent javascript library must be included');return;}
var config={over:function(){if(lvl==0){$(this).parent().children('li').not($(this)).children('ul').hide();var inner_ul=li.children('ul:first');var pos=li.position();var pos_ul=inner_ul.position();var top_c=pos.top+li.height();if(inner_ul.hasClass('show2left')){var left_c=pos.left-inner_ul.width()+li.width()+(o.padding*2);class_parent='inuseleft';class_child='inusechildleft';class_panel='left_slide';inner_ul.addClass('topleftradius')}
else if(inner_ul.hasClass('mega_menu')){var left_c=0+($(document).width()/2)-(o.container_width/2);class_parent='inusemega',class_child='inusechildmega';class_panel='mega_slide';inner_ul.addClass('topleftradius').addClass('toprightradius');}
else{var left_c=pos.left;class_parent='inuse';class_child='inusechild';class_panel='right_slide';inner_ul.addClass('toprightradius');}
if(!$.browser.msie||($.browser.msie&&($.browser.version>7.0))){if(inner_ul.width()<=(li.width()+(o.padding*2))){inner_ul.css('width',li.width()+(o.padding*2));inner_ul.removeClass('topleftradius').removeClass('toprightradius');}}
inner_ul.stop(true,true).css({top:top_c,left:left_c}).addClass(class_panel).slideDown(150);li.addClass(class_child);}
else{var inner_ul=li.children('ul');var pos=li.position();var pos_ul=inner_ul.position();var top_c=pos.top;if(inner_ul.hasClass('show2left')){var left_c=pos.left-inner_ul.width()+li.width()-1;class_parent='inuseleft';class_child='inusechildleft';class_panel='left_slide';}
else{var left_c=pos.left+li.width();if($.browser.mozilla){left_c--;}
class_parent='inuse';class_child='inusechild';class_panel='right_slide';}
inner_ul.css({top:top_c,left:left_c}).addClass(class_panel).css({'white-space':'nowrap'}).stop(true,true).animate({width:'toggle'},300);li.addClass(class_child);}},sensitivity:o.sensitivity,timeout:200,out:function(){li.stop(true,true).removeClass(class_child).children('ul').hide();}};li.each(function(){$(this).hoverIntent(config);$(this).mouseleave(function(){if(lvl==0){$(this).children('ul').hide();}});});}
else{li.mouseenter(function(){li.stop(true,true).addClass(class_parent);});li.mouseleave(function(){li.stop(true,true).removeClass(class_parent).children('ul').hide();});}});}
return this.each(function(){var t=$(this);t.addClass('smenubar');if(!o.floatingDiv){var floatingDiv=t;}
else{var floatingDiv=o.floatingDiv;floatingDiv.css({width:'100%'});}
var top_Y=0;if(!o.top){top_Y=floatingDiv.position().top;}
else{top_Y=o.top;}
if(o.floatingDivBackground){floatingDiv.addClass('smenubar_background');t.css({'border-bottom':'none'});}
$(window).scroll(function(){if($(this).scrollTop()>=top_Y){if(!($.browser.msie&&($.browser.version<=7.0))){floatingDiv.addClass('float_top');o.onLeaveTop.call(this);}}
else{floatingDiv.removeClass('float_top').removeClass('float_top_ie7');o.onScroll.call(this);}
var open_menu=$('.inner_menu:visible');var parent_li=open_menu.parent();var pos=parent_li.position();open_menu.css({top:pos.top+parent_li.height()});});t.find('.toggle_block').slideToggle();t.find('.toggle_handle').html('...').css('text-align','center');t.find('a').click(function(){if($(this).hasClass('toggle_handle')){var prev=$(this).parent().prev('.toggle_block');prev.slideToggle().prevUntil(':not(.toggle_block)').slideToggle();}
if($(this).attr('href')=='#'){event.preventDefault();return;}});if(o.megaMenu==true){setLiActions(t,0);}});};})(jQuery);