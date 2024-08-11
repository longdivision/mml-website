import { Example } from "@/types/example";

export const diceExample: Example = {
  name: "Dice",
  description: "A dice with animated rolling",
  code: `<m-model id="dice" src="https://public.mml.io/dice.glb" y="1" collide="true" onclick="rollDice()">
  <m-attr-anim id="rx" attr="rx" ping-pong="false" easing="linear" start="0" end="0" loop="false" start-time="0" duration="1"></m-attr-anim>
  <m-attr-anim id="ry" attr="ry" ping-pong="false" easing="linear" start="0" end="0" loop="false" start-time="0" duration="1"></m-attr-anim>
  <m-attr-anim id="rz" attr="rz" ping-pong="false" easing="linear" start="0" end="0" loop="false" start-time="0" duration="1"></m-attr-anim>
  <m-attr-anim id="y" attr="y" ping-pong="false" easing="linear" start="1" end="1" loop="false" start-time="0" duration="1"></m-attr-anim>
</m-model>
<script>
  let rolling = false;
  let rollResult = 1;
  let rollDuration = 750;
  let rollHeight = 3.1;

  function radToDeg(radians) {
    return radians * (180 / Math.PI);
  }

  function animate(attr, easing, targetRotation, duration) {
    rolling = true;
    const mAttrAnim = document.getElementById(attr);
    const newStart = mAttrAnim.getAttribute("end");
    mAttrAnim.setAttribute("easing", easing);
    mAttrAnim.setAttribute("start", newStart);
    mAttrAnim.setAttribute("end", targetRotation);
    mAttrAnim.setAttribute("loop", "false");
    mAttrAnim.setAttribute("duration", duration);
    mAttrAnim.setAttribute("start-time", document.timeline.currentTime);
    setTimeout(() => {
      rolling = false;
    }, duration + 10);
  }

  function rollDice() {
    if (rolling) return;
    const rollMap = {
      1: {
        rx: 0,
        ry: 0,
        rz: 0
      },
      2: {
        rx: 0,
        ry: 0,
        rz: radToDeg(-Math.PI / 2)
      },
      3: {
        rx: radToDeg(-Math.PI / 2),
        ry: 0,
        rz: 0
      },
      4: {
        rx: radToDeg(Math.PI / 2),
        ry: 0,
        rz: 0
      },
      5: {
        rx: 0,
        ry: 0,
        rz: radToDeg(Math.PI / 2)
      },
      6: {
        rx: radToDeg(Math.PI),
        ry: 0,
        rz: 0
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

    animate("rx", "easeOutCubic", targetRotation.rx, rollDuration);
    animate("ry", "easeOutCubic", targetRotation.ry, rollDuration);
    animate("rz", "easeOutCubic", targetRotation.rz, rollDuration);
    animate("y", "easeOutQuint", rollHeight, rollDuration * 0.35);
    setTimeout(() => {
      animate("y", "easeOutBounce", 1, rollDuration * 0.65);
    }, rollDuration * 0.35);
  }
</script>`,
  image: "/images/examples/dice.png",
};
