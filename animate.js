const logodiv = document.querySelector("div.logo");
const svg = logodiv.querySelector('svg');

svg.remove();

const rings = 25;

for (let index = 0; index < rings; index++) {
    const svgClone = svg.cloneNode(true);
    svgClone.style.transform = `rotate(${(360 / rings) * index}deg)`
    logodiv.appendChild(svgClone)
}


gsap.from('.hero *', {
    opacity: 0,
    y: 100,
    duration: 2,
    delay: .3,
    ease: "power4"
})
