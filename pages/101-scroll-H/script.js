import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Wait for DOM fully loaded (images, fonts)
window.addEventListener('load', () => {
	const horizontalSection = document.querySelector('.horizontal');
	const panels = gsap.utils.toArray('.panels .panel');
	if (!horizontalSection || panels.length === 0) return;

	gsap.to(panels, {
		xPercent: -100 * (panels.length - 1),
		ease: 'none',
		scrollTrigger: {
			trigger: horizontalSection,
			start: 'top top',
			pin: true,
			scrub: 1,
			snap: 1 / (panels.length - 1),
			end: () => '+=' + (horizontalSection.offsetWidth * (panels.length - 1))
		}
	});

	// ensure ScrollTrigger calculates correct positions
	ScrollTrigger.refresh();
});

