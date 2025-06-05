// 1. เลือกตัวแสดงผลจากการกดขึ้นมา
let player1Display = document.querySelector("#player-1-display");
let player2Display = document.querySelector("#player-2-display");

// 2. เลือก element ปุ่มเพื่อกดเพิ่มคะแนน
let player1Btn = document.querySelector("#player-1-btn");
let player2Btn = document.querySelector("#player-2-btn");

// 3. ใส่ event ว่าถ้ามีการกด button ให้ตัว display บวกขึ้นทีละ 1
let player1Score = 0; // ที่เก็บคะแนนของ player 1
let player2Score = 0; // ที่เก็บคะแนนของ player 2
player1Btn.addEventListener("click", function () {
  player1Score = player1Score + 1; // เมื่อคลิก ให้ที่เก็บคะแนนของ player 1 เพิ่มขึ้นทีละ 1
  player1Display.textContent = player1Score; // นำคะแนนของ player 1 แสดงผลลงไป
});
player2Btn.addEventListener("click", function () {
  player2Score = player2Score + 1; // เมื่อคลิก ให้ที่เก็บคะแนนของ player 2 เพิ่มขึ้นทีละ 1
  player2Display.textContent = player2Score; // นำคะแนนของ player 2 แสดงผลลงไป
});
