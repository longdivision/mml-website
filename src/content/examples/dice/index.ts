import { Example } from "@/types/example";

export const diceExample: Example = {
  name: "Dice",
  description: "A dice with advanced animation",
  code: `<m-model
  id="dice"
  src="https://public.mml.io/dice.glb"
  sx="1"
  sy="1"
  sz="1"
  y="1"
  rx="0"
  ry="0"
  rz="0"
  onclick="rollDice()"
></m-model>
<script>
  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  function radToDeg(radians) {
    return radians * (180 / Math.PI);
  }

  let rollResult = 1;

  function rollDice() {
    const rollMap = {
      1: {
        rx: radToDeg(2 * Math.PI),
        ry: 0,
        rz: radToDeg(2 * Math.PI),
      },
      2: {
        rx: radToDeg(2 * Math.PI),
        ry: 0,
        rz: radToDeg(2 * Math.PI - Math.PI / 2),
      },
      3: {
        rx: radToDeg(2 * Math.PI - Math.PI / 2),
        ry: 0,
        rz: radToDeg(2 * Math.PI),
      },
      4: {
        rx: radToDeg(2 * Math.PI + Math.PI / 2),
        ry: 0,
        rz: radToDeg(2 * Math.PI),
      },
      5: {
        rx: radToDeg(2 * Math.PI),
        ry: 0,
        rz: radToDeg(2 * Math.PI + Math.PI / 2),
      },
      6: {
        rx: radToDeg(2 * Math.PI + Math.PI),
        ry: 0,
        rz: radToDeg(2 * Math.PI),
      },
    };

    const diceElement = document.getElementById("dice");

    let newRoll = Math.floor(Math.random() * 6) + 1;
    while (newRoll === rollResult) {
      newRoll = Math.floor(Math.random() * 6) + 1;
    }
    rollResult = newRoll;

    const targetRotation = rollMap[rollResult];
    const startRotation = {
      rx: parseFloat(diceElement.getAttribute("rx")),
      ry: parseFloat(diceElement.getAttribute("ry")),
      rz: parseFloat(diceElement.getAttribute("rz")),
    };
    const animationTime = 400;
    const interval = 40;
    let currentTime = 0;

    let intervalId = setInterval(() => {
      currentTime += interval;
      if (currentTime < animationTime) {
        let t = currentTime / animationTime;
        let currentRotation = {
          rx: lerp(startRotation.rx, targetRotation.rx, t),
          ry: lerp(startRotation.ry, targetRotation.ry, t),
          rz: lerp(startRotation.rz, targetRotation.rz, t),
        };
        diceElement.setAttribute("rx", currentRotation.rx.toString());
        diceElement.setAttribute("ry", currentRotation.ry.toString());
        diceElement.setAttribute("rz", currentRotation.rz.toString());
        diceElement.setAttribute("y", Math.cos(t * 2.0 - 0.5) * 3.5);
      } else {
        diceElement.setAttribute("rx", targetRotation.rx.toString());
        diceElement.setAttribute("ry", targetRotation.ry.toString());
        diceElement.setAttribute("rz", targetRotation.rz.toString());
        clearInterval(intervalId);
      }
    }, interval);
  }
</script>`,
  image: "/images/examples/dice.png",
};
