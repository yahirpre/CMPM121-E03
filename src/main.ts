const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

//Create gradient to put onto face
const defs = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "defs",
);

const gradient = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "linearGradient",
);
gradient.setAttribute("x1", "0%");
gradient.setAttribute("y1", "0%");
gradient.setAttribute("x2", "100%");
gradient.setAttribute("y2", "100%");
gradient.setAttribute("id", "shading");

const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop1.setAttribute("offset", "0%");
stop1.setAttribute("stop-color", "#f7f2e9");

const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop2.setAttribute("offset", "50%");
stop2.setAttribute("stop-color", "#f3cf87");

const stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop3.setAttribute("offset", "100%");
stop3.setAttribute("stop-color", "#a77346");

gradient.append(stop1, stop2, stop3);
defs.append(gradient);

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A concerned, shaded face");
face.append(defs);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "url(#shading)");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});

const leftEyebrow = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path",
);
leftEyebrow.setAttribute("d", "M 50 60 Q 65 75 80 50");
leftEyebrow.setAttribute("fill", "none");
leftEyebrow.setAttribute("stroke", "#302c29");
leftEyebrow.setAttribute("stroke-width", "4");

const rightEyebrow = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path",
);
rightEyebrow.setAttribute("d", "M 150 60 Q 135 75 120 50");
rightEyebrow.setAttribute("fill", "none");
rightEyebrow.setAttribute("stroke", "#302c29");
rightEyebrow.setAttribute("stroke-width", "4");

face.append(leftEyebrow, rightEyebrow);
