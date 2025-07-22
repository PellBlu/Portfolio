var $=jQuery
$(document).ready(function(){$('.block-curriculum:nth-of-type(1) .plus-minus-toggle').removeClass('collapsed')
$('.block-curriculum:nth-of-type(1) .curriculum-section-one').addClass('open-curriculum')
$('.plus-minus-toggle').click(function(){$(this).parent().toggleClass('open-curriculum')
var $target=$(this).parent()
$('.curriculum-section-one').not($target).removeClass('open-curriculum')})
$('.plus-minus-toggle').on('click',function(){var $target=$(this).toggleClass('collapsed')
$('.plus-minus-toggle').not($target).addClass('collapsed')})
$('.plus-minus-toggle').click(function(){var $target=$(this).parent().parent()
$('html,body').animate({scrollTop:$target.offset().top-40},500)})})
$(document).ready(function(){function mediaSize(){if(window.matchMedia('(max-width: 768px)').matches){$('.page-id-36 .container').addClass('container-fluid')
$('#post-303 .container').css({width:'100%',paddingLeft:'15px',paddingRight:'15px'})
$('.container-apply-now-fields').css({display:'block'})
$('.container-field span').css({width:'100%'})
$('.container-apply-now').css({width:'100%'})}else{$('.page-id-36 .container').removeClass('container-fluid')
$('.container-apply-now-fields').css({display:'flex'})
$('.container-field span').css({width:'277px'})
$('.container-apply-now').css({width:'680px'})}}
mediaSize()
window.addEventListener('resize',mediaSize,!1)})
jQuery(document).ready(function($){$('.btn-student').click(function(){$(this).parent().toggleClass('showMore')
$(this).text($(this).text()=='See more +'?'See less -':'See more +')})
$('.bouton2').click(function(){$(this).parent().toggleClass('seeMore')
$(this).text($(this).text()=='See more +'?'See less -':'See more +')})})
filterSelection("all")
function filterSelection(c){var x,i;x=document.getElementsByClassName("filterDiv");if(c=="all")c="";for(i=0;i<x.length;i++){PartnershipsRemoveClass(x[i],"show");if(x[i].className.indexOf(c)>-1)PartnershipsAddClass(x[i],"show")}}
function PartnershipsAddClass(element,name){var i,arr1,arr2;arr1=element.className.split(" ");arr2=name.split(" ");for(i=0;i<arr2.length;i++){if(arr1.indexOf(arr2[i])==-1){element.className+=" "+arr2[i]}}}
function PartnershipsRemoveClass(element,name){var i,arr1,arr2;arr1=element.className.split(" ");arr2=name.split(" ");for(i=0;i<arr2.length;i++){while(arr1.indexOf(arr2[i])>-1){arr1.splice(arr1.indexOf(arr2[i]),1)}}
element.className=arr1.join(" ")}
var btnContainer=document.getElementById("myBtnContainer");var btns=btnContainer.getElementsByClassName("partnerships-btn");for(var i=0;i<btns.length;i++){btns[i].addEventListener("click",function(){var current=document.getElementsByClassName("partnerships-active");current[0].className=current[0].className.replace(" partnerships-active","");this.className+=" partnerships-active"})}