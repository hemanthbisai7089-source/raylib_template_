const r = require("raylib");

function setup() {
  const HEIGHT = 700;
  const WIDTH = 700;
  const FPS = 60;
  const TITLE = "experiment";

  r.InitWindow(WIDTH, HEIGHT, TITLE);
  r.SetTargetFPS(FPS);

  return { HEIGHT, WIDTH, FPS, TITLE };
}

function running() {
  return !r.WindowShouldClose();
}

function update(world) {
  // change the state
}

function draw(world) {
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
