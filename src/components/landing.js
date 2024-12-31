import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);
export const setupAnimation = () => {
gsap.set('.dot', {
	xPercent: -50,
	yPercent: -50,
  autoAlpha: 1,
	transformOrigin: "50% 50%"
});

const timeline = gsap.timeline({ 
    delay: 1,
		defaults: {
      ease: "linear",
		}		  
	})
.from('.dot',{
  duration: 0.8,
  autoAlpha: 0,
  stagger: {
    each:-0.0009,
   },
}, 0.2)
.to('.dot1', {
  duration: 4,
	immediateRender: true,
	motionPath:{
    path: '.path',
    align: '.path'
   },
   stagger: {
     each:-0.0009,
   },
},0.1)
.to('.dot2', {
  duration: 4,
	immediateRender: true,
	motionPath:{
    path: '.path',
    align: '.path'
   },
   stagger: {
     each:-0.0009,
   },
},0.15)
.fromTo("#text", {
  drawSVG:"0%"
},{
  drawSVG:"100%", 
  immediateRender:true,
  duration: 1.85,
}, 2.03)
.to('.dot',{
  duration: 0.4,
  autoAlpha: 0,
  stagger: {
    each:-0.0009,
   },
}, 3.5)

//Chris Gannons timeline scrubber tool
// ScrubGSAPTimeline(timeline);
}