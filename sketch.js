const r = require("raylib");
const geometry = require("./geometry");

function setup() {
  const HEIGHT = 700;
  const WIDTH = 700;
  const FPS = 60;
  const TITLE = "experiment";

  r.InitWindow(WIDTH, HEIGHT, TITLE);
  r.SetTargetFPS(FPS);
  c;
}

function running() {
  return !r.WindowShouldClose();
}

function update() {
  // change the state
}

function draw() {
  // draw the current state
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};
