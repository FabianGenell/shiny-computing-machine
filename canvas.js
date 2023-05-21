const canvas = document.createElement('canvas');

const sandbox = new GlslCanvas(canvas);

document.body.appendChild(canvas)

sandbox.load(frag);

sandbox.setUniform('seed', Math.random());

function resize() {

    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpi = window.devicePixelRatio;

    const s = Math.max(w, h);

    canvas.width = s * dpi;
    canvas.height = s * dpi;
    canvas.style.width = s + "px";
    canvas.style.height = s + "px";

}








