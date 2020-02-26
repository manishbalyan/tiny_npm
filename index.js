


/**
 * @param {number} current time
 * @param {number} start value
 * @param {number} change in value
 * @param {number} duration
 */
const easeInOutQuad = (t, b, c, d) => {
	t /= d / 2;
	if (t < 1) return (c / 2) * t * t + b;
	t -= 1;
	return (-c / 2) * (t * (t - 2) - 1) + b;
};

/**
 * @param {HTMLElement} element Dom element to scroll
 * @param {number} to value to scroll the element
 * @param {number} duration scroll duration
 * @param {number} interval increment value for animation
 */

module.exports = function scrollWithAnimation(element, to, duration, interval) {
	const start = element.scrollLeft;
	let currentTime = 0;
	const increment = interval;
	const animateScroll = () => {
		currentTime += increment;
		const val = easeInOutQuad(currentTime, start, to, duration);
		element.scrollIntoView({
			behavior: 'smooth',
		});
		element.scrollLeft = val;
		if (currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	};
	animateScroll();
}