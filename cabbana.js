document.getElementById("sec3_box1").style.display='block'
document.getElementById("sec3_box5").style.display='block'

var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var btn10 = document.getElementById('btn10');
function func1(){
    document.getElementById("slider1").src='homepage_image/section3_image/HOT-AND-SOUR-LOBSTER-CLAW-scaled-aspect-ratio-1366-768-scaled.jpg'
    document.getElementById("sec3_box1").style.display='block'
    document.getElementById("sec3_box2").style.display='none'
    document.getElementById("sec3_box3").style.display='none'
    document.getElementById("sec3_box4").style.display='none'
    btn5.classList.add('active');
    btn6.classList.remove('active');
    btn7.classList.remove('active');
    btn8.classList.remive('active');
}
function func2() {
    document.getElementById("slider1").src='homepage_image/section3_image/Niigata-Murakami-Wagyu-Beef-Grilled-Over-Charcoal01-aspect-ratio-1366-768.jpg'
    document.getElementById("sec3_box1").style.display='none'
    document.getElementById("sec3_box2").style.display='block'
    document.getElementById("sec3_box3").style.display='none'
    document.getElementById("sec3_box4").style.display='none'
    btn5.classList.remove('active');
    btn6.classList.add('active');
    btn7.classList.remove('active');
    btn8.classList.remove('active');
}
function func3(){
    document.getElementById("slider1").src='homepage_image/section3_image/Scottish-Langoustine-Crispy-Sweetbread-aspect-ratio-1366-768.jpg'
    document.getElementById("sec3_box1").style.display='none'
    document.getElementById("sec3_box2").style.display='none'
    document.getElementById("sec3_box3").style.display='block'
    document.getElementById("sec3_box4").style.display='none'
    btn5.classList.remove('active');
    btn6.classList.remove('active');
    btn7.classList.add('active');
    btn8.classList.remove('active');
}
function func4(){
    document.getElementById("slider1").src='homepage_image/section3_image/Smoked-Amberjack-01-aspect-ratio-1366-768.jpg'
    document.getElementById("sec3_box1").style.display='none'
    document.getElementById("sec3_box2").style.display='none'
    document.getElementById("sec3_box3").style.display='none'
    document.getElementById("sec3_box4").style.display='block'
    btn5.classList.remove('active');
    btn6.classList.remove('active');
    btn7.classList.remove('active');
    btn8.classList.add('active');
}
function func5(){
    document.getElementById("slider2img").src='homepage_image/section5/LST-aspect-ratio-1366x768-2-e1574943555513.jpg'
    document.getElementById("sec3_box5").style.display='block'
    document.getElementById("sec3_box6").style.display='none'
    btn9.classList.add('active');
    btn10.classList.remove('active');
}
function func6(){
    document.getElementById("slider2img").src='homepage_image/section5/DSF5847-aspect-ratio-1366x768-e1574943566358.jpg'
    document.getElementById("sec3_box5").style.display='none'
    document.getElementById("sec3_box6").style.display='block'
    btn9.classList.remove('active');
    btn10.classList.add('active');
}

// run animation on containt view
// <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"
// integrity="sha512-fHXRw0CXruAoINU11+hgqYvY/PcsOWzmj0QmcSOtjlJcqITbPyypc8cYpidjPurWpCnlB8VKfRwx6PIpASCUkQ=="
// crossorigin="anonymous" referrerpolicy="no-referrer"></script>
