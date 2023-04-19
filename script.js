const burger = document.querySelector("nav svg");

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    gsap.to(".links", { x: "100%" });
    gsap.to(".line", { stroke: "white" });
    gsap.set("body", { overflow: "auto" });
    gsap.set("body", { overflowX: "hidden" });
  } else {
    gsap.to(".links", { x: "0%" });
    gsap.to(".line", { stroke: "black" });
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
    );
    gsap.set("body", { overflow: "hidden" });
  }
  burger.classList.toggle("active");
});

const videos = gsap.utils.toArray(".video");
gsap.set(videos, { opacity: 0 });

videos.forEach((video) => {
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",

    onEnter: () => {
      gsap.to(video, { opacity: 1 });
      video.play();
    },
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  });
});

const data = {
  "bin laden":"Obama.txt with a score of 27.805</br> Clinton.txt with a score of 15.642</br> GWBush.txt with a score of 11.391</br> Kennedy.txt with a score of 1.844 </br>Pierce.txt with a score of 0.000",
  "hello": "Hi there!",
  "how are you?": "I'm doing well, thank you!",
  "what is your name?": "My name is ChatGPT.",
  "what do you do?": "I'm a language model trained to answer your questions.",
  "thank you": "You're welcome!"
};

function search() {
  const searchTerm = document.getElementById("search-box").value.toLowerCase();
  const output = document.getElementById("output");
  output.innerHTML = "";
  if (data[searchTerm]) {
    output.innerHTML = `QUERY: ${searchTerm}<br>ANSWER: ${data[searchTerm]}`;
  } else {
    output.innerHTML = `QUERY: ${searchTerm}<br>ANSWER: Sorry, I don't know the answer to that.`;
  }
}
