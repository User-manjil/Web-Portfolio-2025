import React, { useState, useEffect, useRef } from "react";
import gamebg from "../assets/gamebg.jpg";

const Banner = () => {
  const [gameMode, setGameMode] = useState(true); // true = menu, false = game
  const canvasRef = useRef(null);

  // GAME STATE
  const player = { x: 60, y: 0, size: 20, dy: 0, jumpForce: 9, gravity: 0.45, isJumping: false };
  const enemy = { x: 0, y: 0, size: 25, speed: 5 };

  const [score, setScore] = useState(0);
  const scoreRef = useRef(0);
  scoreRef.current = score;

  // Responsive game world size
  const gameWidth = window.innerWidth < 500 ? 320 : 800;
  const gameHeight = window.innerWidth < 500 ? 200 : 300;

  useEffect(() => {
    if (gameMode) return; // Stop loop if in menu

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let frame;
    const ground = gameHeight - 30;

    // Reset positions
    player.y = ground - player.size;
    enemy.x = gameWidth + 100;
    enemy.y = ground - enemy.size;

    // Jump
    const jump = () => {
      if (!player.isJumping) {
        player.dy = -player.jumpForce;
        player.isJumping = true;
      }
    };

    const handleKeys = (e) => {
      if (e.code === "Space") jump();
    };

    window.addEventListener("keydown", handleKeys);

    // MAIN GAME LOOP
    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background
      const bg = new Image();
      bg.src = gamebg;
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

      // PLAYER PHYSICS
      player.dy += player.gravity;
      player.y += player.dy;

      if (player.y > ground - player.size) {
        player.y = ground - player.size;
        player.isJumping = false;
      }

      // Draw Player (Circle)
      ctx.beginPath();
      ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();

      // ENEMY MOVEMENT
      enemy.x -= enemy.speed;

      if (enemy.x < -enemy.size) {
        enemy.x = gameWidth + 50;
        setScore(scoreRef.current + 1);
      }

      // Draw Enemy (Triangle)
      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.moveTo(enemy.x, enemy.y);
      ctx.lineTo(enemy.x - enemy.size, enemy.y + enemy.size);
      ctx.lineTo(enemy.x + enemy.size, enemy.y + enemy.size);
      ctx.closePath();
      ctx.fill();

      // COLLISION DETECTION
      const hit =
        player.x < enemy.x + enemy.size &&
        player.x + player.size > enemy.x &&
        player.y + player.size > enemy.y;

      if (hit) {
        alert("Game Over! Score: " + scoreRef.current);
        setGameMode(true);
        setScore(0);
        return;
      }

      frame = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", handleKeys);
    };
  }, [gameMode]);

  return gameMode ? (
    /* ------------------ MENU SCREEN ------------------ */
    <div className="w-full  bg-blue-500 flex flex-col rounded-sm items-center justify-center text-white p-5">

      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-bounce">
        Bouncy Ball
      </h1>

      <p className="text-lg opacity-70 mb-8 text-center max-w-[300px]">
        Tap the screen to jump and dodge the triangle!
      </p>

      <button
        onClick={() => setGameMode(false)}
        className="border-2 border-white px-8 py-3 rounded-sm text-xl hover:bg-white hover:text-black transition-all"
      >
        Play Game
      </button>
    </div>
  ) : (
    /* ------------------ GAME SCREEN ------------------ */
    <div className="w-full bg-blue-500   flex flex-col items-center justify-center p-3">
      
      <canvas
        ref={canvasRef}
        width={gameWidth}
        height={gameHeight}
        className="border-2 border-white rounded-lg w-full max-w-[800px]"
        onClick={() => {
          const ev = new KeyboardEvent("keydown", { code: "Space" });
          window.dispatchEvent(ev);
        }}
      />

      <p className="text-white text-xl mt-4">Score: {score}</p>

      <button
        onClick={() => setGameMode(true)}
        className="mt-4 border border-white px-6 py-2 text-white rounded-full"
      >
        Exit
      </button>
    </div>
  );
};

export default Banner;
