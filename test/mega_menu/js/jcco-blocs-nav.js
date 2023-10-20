
var homeRowBtn = $("#home-row-btn"), // ********************************

    motorRowBtn = $("#mv-row-btn"),
    motorRow = $("#mv-row"),

    legalRowBtn = $(".legal-btn"),
    legalRow = $(".legal-row"),

    voterRowBtn = $(".voter-btn"),
    voterRow = $(".voter-row"),

    pubRowBtn = $(".pub-btn"),
    pubRow = $(".pub-row"),

    aboutRowBtn = $(".about-btn"),

    chatRowBtn = $(".chat-btn"),
    chatRow = $(".chat-row");


$("#home-row-btn").on('mouseover', function() { 
    $(homeRowBtn).addClass("tab-hovered"); // ********************************
    closeAllElse('homeRow');
});    

$('#mv-row-btn').on('mouseover', function() { 
    if($(motorRow).hasClass('hide-nav-row')) {
        motorRow.removeClass("conceal-row").addClass("reveal-row");
        motorRowBtn.addClass("tab-hovered");
    }else{
        motorRow.removeClass("reveal-row");
    }
    closeAllElse('motorRow');
});

$('#legal-row-btn').on('mouseover', function() {
    if($(legalRow).hasClass('hide-nav-row')) {
        legalRow.removeClass("conceal-row").addClass("reveal-row");
        legalRowBtn.addClass("tab-hovered");
    }else{
        legalRow.removeClass("reveal-row");
    }
    closeAllElse('legalRow');
});

$('#voter-row-btn').on('mouseover', function() {
    if($(voterRow).hasClass('hide-nav-row')) {
        voterRow.removeClass("conceal-row").addClass("reveal-row");
        voterRowBtn.addClass("tab-hovered");
    }else{
        voterRow.removeClass("reveal-row");
    }
    closeAllElse('voterRow');
});


$('#pub-row-btn').on('mouseover', function() {
    if($(pubRow).hasClass('hide-nav-row')) {
        pubRow.removeClass("conceal-row").addClass("reveal-row");
        pubRowBtn.addClass("tab-hovered");
    }else{
        pubRow.removeClass("reveal-row");
    }
    closeAllElse('pubRow');
});


$('#about-row-btn').on('mouseover', function() {
    aboutRowBtn.addClass("tab-hovered");
    closeAllElse('aboutRow');
});


$('#chat-row-btn').on('mouseover', function() {
    if($(chatRow).hasClass('hide-nav-row')) {
        chatRow.removeClass("conceal-row").addClass("reveal-row");
        chatRowBtn.addClass("tab-hovered");
    }else{
        chatRow.removeClass("reveal-row");
    }
    closeAllElse('chatRow');
});


/////////////////////////////////////////////


// Touch event to main nav buttons
$('.motor-vehicle-btn').on("touchstart", function(e){
    e.preventDefault();
    if(!$(motorRow).hasClass('reveal-row')) { 
        motorRow.removeClass("conceal-row").addClass("reveal-row");
        motorRowBtn.addClass("tab-hovered");
    }else{
        motorRow.addClass("conceal-row").removeClass("reveal-row");
        motorRowBtn.removeClass("tab-hovered");
    }
    closeAllElse('motorRow');
}); 

$('.legal-btn').on("touchstart", function(e){
    e.preventDefault();
    if(!$(legalRow).hasClass('reveal-row')) { 
        legalRow.removeClass("conceal-row").addClass("reveal-row");
        legalRowBtn.addClass("tab-hovered");
    }else{
        legalRow.addClass("conceal-row").removeClass("reveal-row");
        legalRowBtn.removeClass("tab-hovered");
    }
    closeAllElse('legalRow');
});


$('.voter-btn').on("touchstart", function(e){
    e.preventDefault();
    if(!$(voterRow).hasClass('reveal-row')) { 
        voterRow.removeClass("conceal-row").addClass("reveal-row");
        voterRowBtn.addClass("tab-hovered");
    }else{
        voterRow.addClass("conceal-row").removeClass("reveal-row");
        voterRowBtn.removeClass("tab-hovered");
    }
    closeAllElse('voterRow');
});

$('.pub-btn').on("touchstart", function(e){
    e.preventDefault();
    if(!$(pubRow).hasClass('reveal-row')) { 
        pubRow.removeClass("conceal-row").addClass("reveal-row");
        pubRowBtn.addClass("tab-hovered");
    }else{
        pubRow.addClass("conceal-row").removeClass("reveal-row");
        pubRowBtn.removeClass("tab-hovered");
    }
    closeAllElse('pubRow');
}); 



$('.about-btn').on("touchstart", function(e){
    e.preventDefault();
    if(!$(chatRow).hasClass('reveal-row')) { 
        aboutRowBtn.addClass("tab-hovered");
    }else{
        aboutRowBtn.removeClass("tab-hovered");
    }
});



$('.chat-btn').on("touchstart", function(e){
    e.preventDefault();
    if(!$(chatRow).hasClass('reveal-row')) { 
        chatRow.removeClass("conceal-row").addClass("reveal-row");
        chatRowBtn.addClass("tab-hovered");
    }else{
        chatRow.addClass("conceal-row").removeClass("reveal-row");
        chatRowBtn.removeClass("tab-hovered");
    }
    closeAllElse('chatRow');
});

// /Touch event to main nav buttons


// Close all nav rows on touch event
function closeAllElse(row) {
    if(row != 'homeRow') {
        homeRowBtn.removeClass("tab-hovered"); // ********************************
    }
    if(row != 'motorRow') {
        motorRow.addClass("conceal-row{");
        motorRow.removeClass("reveal-row");
        motorRowBtn.removeClass("tab-hovered");
    }
    if(row != 'legalRow') {
        legalRow.addClass("conceal-row{");
        legalRow.removeClass("reveal-row");
        legalRowBtn.removeClass("tab-hovered");
    }
    if(row != 'voterRow') {
        voterRow.addClass("conceal-row{");
        voterRow.removeClass("reveal-row");
        voterRowBtn.removeClass("tab-hovered");
    }
    if(row != 'pubRow') {
        pubRow.addClass("conceal-row{");
        pubRow.removeClass("reveal-row");
        pubRowBtn.removeClass("tab-hovered");
    }
    if(row != 'aboutRow') {
        aboutRowBtn.removeClass("tab-hovered");
    }
    if(row != 'chatRow') {
        chatRow.addClass("conceal-row{");
        chatRow.removeClass("reveal-row");
        chatRowBtn.removeClass("tab-hovered");
    }
}


function closeAll(this_instance) {
    // Need to creat a toggle system for click events
    if(this_instance == 'clicked') {
        // This needs work. May have to use a loop
        motorRow.removeClass("reveal-row");
        legalRow.removeClass("reveal-row");
        voterRow.removeClass("reveal-row");
        pubRow.removeClass("reveal-row");
        chatRow.removeClass("reveal-row");
    }else{
        motorRow.removeClass("reveal-row");
        legalRow.removeClass("reveal-row");
        voterRow.removeClass("reveal-row");
        pubRow.removeClass("reveal-row");
        chatRow.removeClass("reveal-row");

        homeRowBtn.removeClass("tab-hovered"); 
        motorRowBtn.removeClass("tab-hovered");
        legalRowBtn.removeClass("tab-hovered");
        voterRowBtn.removeClass("tab-hovered");
        pubRowBtn.removeClass("tab-hovered");
        chatRowBtn.removeClass("tab-hovered");
    }
}

var rowWidth = document.querySelectorAll(".nav-row-width");

rowWidth.forEach(function(element) {
    element.addEventListener('mouseleave', function() {
        closeAll('animation'); // Do I need this?
    });
});

// Mouseenter and Mouseleave setTimeout function. 

const delayFadeOut = 150;
const delayFadeIn = 100;
let timeOutFadeOut;
let timeOutFadeIn;

$(".overlay-on").on('mouseenter', (event) => {
    timeOutFadeIn = setTimeout(overlayFadeIn, delayFadeIn);
    clearTimeout(timeOutFadeOut);
});

$(".overlay-on").on('mouseleave', (event) => {
    clearTimeout(timeOutFadeIn);
    timeOutFadeOut = setTimeout(overlayFadeOut, delayFadeOut);
});

$("#home-row-btn, #about-row-btn").on('mouseleave', (event) => {
    setTimeout(()=>{
        $(homeRowBtn).removeClass("tab-hovered");
        $(aboutRowBtn).removeClass("tab-hovered");
    }, delayFadeOut);
});

function overlayFadeIn() {
    $(".tab-overlay").fadeIn('fast');
    $(".nav-container").css("height", "280px");
}
function overlayFadeOut() {
    $(".tab-overlay").fadeOut('fast');
    closeAll('no-animation');
    $(".nav-container").css("height", "");
}


// Mobile view

$('.mobile-menu-btn').click(function(){
    $('.desktop-tabs-row').toggleClass('show');
});


// add debounce function to window scroll event

let yPos;
  
  window.addEventListener('scroll', throttle(callback, 1000));
  
  function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }
  
  function callback() {
    $(window).scroll((e)=>{
        yPos = window.scrollY;
        if(yPos > 100){
            $(".nav-container").addClass("nav-container-scrolled");
            $(".nav-main-tabs-list").addClass("dark-tab-text").removeClass("light-tab-text");
            $(".tab-nav-house-icon").addClass("dark-tab-text").removeClass("light-tab-text");
        }
        if(yPos < 100){
            $(".nav-container").removeClass("nav-container-scrolled");
            $(".nav-main-tabs-list").removeClass("dark-tab-text");
            $(".tab-nav-house-icon").removeClass("dark-tab-text");
        }
    })
  }

// On focus
let timeOutFocus;
$(".nav-tab-btn").on("focus", function(){
    clearTimeout(timeOutFocus);
    timeOutFocus = setTimeout(()=>{
        closeAll();
        if(!$(this).removeClass("tab-hovered"));
        $(this).addClass("tab-hovered");
        if($(this).hasClass("motor-vehicle-btn")){
            motorRow.removeClass("conceal-row").addClass("reveal-row");
        }
        if($(this).hasClass("legal-btn")){
            legalRow.removeClass("conceal-row").addClass("reveal-row");
        }
        if($(this).hasClass("voter-btn")){
            voterRow.removeClass("conceal-row").addClass("reveal-row");
        }
        if($(this).hasClass("pub-btn")){
            pubRow.removeClass("conceal-row").addClass("reveal-row");
        }
        if($(this).hasClass("about-btn")){
            aboutRow.removeClass("conceal-row").addClass("reveal-row");
        }
        if($(this).hasClass("chat-btn")){
            chatRow.removeClass("conceal-row").addClass("reveal-row");
        }
    }, 500);
});


// Clicked while focused
let url;
$(".nav-row-width .tab-col-list-col ul li").on("focus", function(){
    url = $(this).find("a").attr("href");
});

$(document).on("keypress", function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        window.open(url, '_self');
    }
});


// Click outside of nav row
$(document).on("click", function(event){
    if(!$(event.target).closest(".nav-container").length){
        closeAll();
        if($(".desktop-tabs-row").is(":visible")){
            $(".hamburger").click();
        }
    }
});
////











