const mouseCircle= document.querySelector(".mouse-Circle");
const mouseDot= document.querySelector(".mouse-Dot");

//mouse circle
const mouseCircleFn=(x,y)=>{
  mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity:2`;
  mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 2`;
};

document.body.addEventListener("mousemove", (e) =>{
    let x = e.clientX;
    let y = e.clientY;
mouseCircleFn(x,y);
});
document.body.addEventListener("mouseleave", (e) =>{
    mouseCircle.style.opacity='0';
    mouseDot.style.opacity='0';

})

   
//end of mouse circle