(function () {
  "use strict";
  const keys = document.querySelectorAll(".key");

  keys.forEach(key => {
    key.addEventListener("click", () => playNote(key));
  });

  function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.style.backgroundColor = "teal";
    noteAudio.addEventListener("ended", () => stopPlay(key));
  }

  function stopPlay(key) {
    key.style.backgroundColor = "";
  }

  let nextOne = document.getElementById("first-next-line");
  let nextTwo = document.getElementById("second-next-line");
  let nextThree = document.getElementById("third-next-line");
  let startOver = document.getElementById("fourth-next-line");
  let lastLyric = document.getElementById("column-optional");

  nextTwo.hidden = true;
  nextThree.hidden = true;
  startOver.hidden = true;

  // The first button
  nextOne.onclick = function () {
    nextTwo.hidden = false;
    nextOne.hidden = true;
    document.getElementById("letter-note-five").innerHTML = "D";
    document.getElementById("letter-note-six").innerHTML = "C";
  };

  // The second button
  nextTwo.onclick = function () {
    nextThree.hidden = false;
    nextTwo.hidden = true;
    document.getElementById("word-five").innerHTML = "DEAR";
    document.getElementById("word-six").innerHTML = "FRI-";
    lastLyric.style.display = "inline-block";
    document.getElementById("letter-note-three").innerHTML = "G";
    document.getElementById("letter-note-four").innerHTML = "E";
    document.getElementById("letter-note-five").innerHTML = "C";
    document.getElementById("letter-note-six").innerHTML = "B";
  };

  // The third button
  nextThree.onclick = function () {
    startOver.hidden = false;
    nextThree.hidden = true;
    document.getElementById("word-one").innerHTML = "HAP-";
    document.getElementById("word-two").innerHTML = "PY";
    document.getElementById("word-three").innerHTML = "BIRTH";
    document.getElementById("word-four").innerHTML = "TO";
    document.getElementById("word-six").innerHTML = "YOU";
    document.getElementById("letter-note-one").innerHTML = "F";
    document.getElementById("letter-note-two").innerHTML = "F";
    document.getElementById("letter-note-three").innerHTML = "E";
    document.getElementById("letter-note-four").innerHTML = "C";
    document.getElementById("letter-note-five").innerHTML = "D";
    document.getElementById("letter-note-six").innerHTML = "C";
    lastLyric.style.display = "none";
  };

  // The Reset button
  startOver.onclick = function () {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById("word-one").innerHTML = "HAP-";
    document.getElementById("letter-note-one").innerHTML = "G";
    document.getElementById("word-two").innerHTML = "PY";
    document.getElementById("letter-note-two").innerHTML = "G";
    document.getElementById("word-three").innerHTML = "BIRTH-";
    document.getElementById("letter-note-three").innerHTML = "A";
    document.getElementById("word-four").innerHTML = "DAY";
    document.getElementById("letter-note-four").innerHTML = "G";
    document.getElementById("word-five").innerHTML = "TO";
    document.getElementById("letter-note-five").innerHTML = "C";
    document.getElementById("word-six").innerHTML = "YOU!";
    document.getElementById("letter-note-six").innerHTML = "B";
  };
})();
