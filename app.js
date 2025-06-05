// 1. เลือกตัวแสดงผลจากการกดขึ้นมา
let player1Display = document.querySelector("#player-1-display");
let player2Display = document.querySelector("#player-2-display");

// 2. เลือก element ปุ่มเพื่อกดเพิ่มคะแนน
let player1Btn = document.querySelector("#player-1-btn");
let player2Btn = document.querySelector("#player-2-btn");

// 3. ใส่ event ว่าถ้ามีการกด button ให้ตัว display บวกขึ้นทีละ 1
let player1Score = 0; // 3.1 ที่เก็บคะแนนของ player 1
let player2Score = 0; // 3.2 ที่เก็บคะแนนของ player 2

// 4. กำหนด limit ว่าจะให้ชนะที่เท่าไหร่
let winningScore = 5; // 4.1 จุด limit
let isGameover = false; // 4.2 สร้างมาเพื่อใช้บอกว่าเกมจบหรือยัง ถ้ายังจะเป็น false ถ้าจบแล้ว ค่าจะเปลี่ยนเป็น true และไม่สามารถกดเพิ่มคะแนนต่อไปได้

player1Btn.addEventListener("click", function () {
  // 4.3 สร้างเงื่อนไขว่า ถ้าเกมยังไม่จบถึงเป้าหมาย ให้บวกคะแนนเพิ่มต่อได้
  // !isGameover เป็นแค่การตรวจสอบค่าว่าเป็น false หรือไม่ ไม่ใช่การเปลี่ยนตัวแปร
  // !isGameover → !false → true ดังนั้น if จะทำงาน
  if (!isGameover) {
    player1Score = player1Score + 1; // 3.3 เมื่อคลิก ให้ที่เก็บคะแนนของ player 1 เพิ่มขึ้นทีละ 1
    // 4.4 ถ้าคะแนนถึง winning score ที่เราตั้งไว้แล้ว จะไม่สามารถกดต่อได้ ก็คือให้ค่าเป็น true
    if (player1Score === winningScore) {
      isGameover = true;
    }
  }
  player1Display.textContent = player1Score; // 3.4 นำคะแนนของ player 1 แสดงผลลงไป
});
player2Btn.addEventListener("click", function () {
  // 4.5 ทำแบบเดียวกันกับปุ่ม player 1
  if (!isGameover) {
    player2Score = player2Score + 1; // 3.5 เมื่อคลิก ให้ที่เก็บคะแนนของ player 2 เพิ่มขึ้นทีละ 1
    if (player2Score === winningScore) {
      isGameover = true;
    }
  }
  player2Display.textContent = player2Score; //3.6 นำคะแนนของ player  แสดงผลลงไป
});
