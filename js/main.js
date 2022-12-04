var navheight=$("nav").innerHeight();
var aboutusoffset=$(".aboutus").offset().top;
console.log( navheight);
console.log(aboutusoffset);
$(window).scroll(function(){
if($(window).scrollTop() > (aboutusoffset-(navheight*2))){
$("nav").css("backgroundColor","white");
$("nav li a").addClass( "text-black" );
$("nav li a").removeClass( "text-white" );


} 
else{
    $("nav").css("backgroundColor","transparent");
    $("nav li a").addClass( "text-white" );
    $("nav li a").removeClass( "text-black" );
}
})