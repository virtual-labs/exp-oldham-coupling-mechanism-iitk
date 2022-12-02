function initializeSimulation() {
    oldham.init();
    animate();
    
}
//  action will take place when windo resize
function onWindowResize() {
    console.log(Date() + " resize");
}
if (window.addEventListener) {
    window.addEventListener('load', initializeSimulation, false);
    //    window.addEventListener('resize', onWindowResize, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initializeSimulation);
} else {
    window.onload = initializeSimulation;
}

function sliderChange() {
    var t1 = document.getElementById("th1").value;
    var v=0.15*t1;
    document.getElementById("output").value=v;
    var sliderVal = document.getElementById("slider1").value;
    document.getElementById("rangeValue1").value = sliderVal;
    Cylinder2.rotation.z = +t1*sliderVal * (Math.PI / 180);
    Cylinder1.rotation.y = +t1*0.5 * sliderVal * (Math.PI / 180);
    render();

}
//var clock;  // Keeps track of elapsed time of animation.
//
//var animating = false;
//
//function doFrame() {  
//	if (animating) {
//        clock.frameNumber++;
//	    updateForFrame();
//	    render();
//		requestAnimationFrame(doFrame); 
//	}
//}
//
//function startAnimation() {
//    if (!animating) {
//	   if (!clock) {
//		  clock = new THREE.Clock(false);
//		  clock.frameNumber = 0;
//		  clock.getFrameNumber = function() { return this.frameNumber }
//	   }
//	   clock.start();
//	   animating = true;
//	   requestAnimationFrame(doFrame);
//	}
//}
//
//function pauseAnimation() {
//	if (animating) {
//	    clock.stop();
//	    animating = false;
//	}
//}
//
//function doAnimationCheckbox() {
//    if ( document.getElementById("animationCheckbox").checked )
//    	startAnimation();
//    else
//    	pauseAnimation();
//}
