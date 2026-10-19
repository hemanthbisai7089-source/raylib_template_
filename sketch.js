const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function update(world) {
  // change the state
}

function draw(world) {
  r.BeginTextureMode(world.target);
  r.ClearBackground(r.BLACK);
  // draw on texture

  r.EndTextureMode();

  r.BeginDrawing();
  r.ClearBackground(world.bg);

  // draw on window
  const source = {
    x: 0,
    y: 0,
    width: world.textureWidth,
    height: world.textureHeight,
  };
  r.DrawTextureRec(world.target.texture, source, { x: 0, y: 0 }, r.WHITE);
  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

function setup() {
  const HEIGHT = 700;
  const WIDTH = 700;
  const FPS = 60;
  const TITLE = "template";
  const bg = r.WHITE;

  const textureWidth = 200;
  const textureHeight = 200;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(WIDTH, HEIGHT, TITLE);
  r.SetTargetFPS(FPS);
  const target = r.LoadRenderTexture(textureWidth, textureHeight);

  return { HEIGHT, WIDTH, FPS, TITLE, target, bg, textureHeight, textureWidth };
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};
