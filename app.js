function ch(){
    var te="Changed the Image"
    var im=document.getElementById('im1')
    var pe=document.getElementById('pe')
    im.style.display="block"
    im.src="images/image2.jpg";
    pe.innerHTML=te;
 }
 
 function hi(){
    var im1=document.getElementById('im1')
    var pe1=document.getElementById('pe')
    var tr1="Hidden the Image"
 
    im1.style.display="none"
    pe1.innerHTML=tr1
 }
 function re(){
    var im2=document.getElementById('im1')
    var pe2=document.getElementById('pe')
    var tr2="Everything is reset";
 
    im2.src="images/image1.jpg"
    pe2.innerHTML=tr2;
    im2.style.display="block"
 }