const game = {
  ctx: null,
  sprites: {
    background: null,
    ball: null,
    platform: null,
  },

  init() {
    this.ctx = document.getElementById('mycanvas').getContext('2d');
  },

  preLoad(callback) {
    let loaded = 0;
    const required = Object.keys(this.sprites).length;
    for (let key in this.sprites) {
      this.sprites[key] = new Image();
      this.sprites[key].src = `img/${key}.png`;

      this.sprites[key].addEventListener('load', () => {
        ++loaded;
        if (loaded >= required) {
          callback();
        }
      });
    }
  },

  run() {
    window.requestAnimationFrame(() => {
      this.render();
    });
  },

  render() {
    this.ctx.drawImage(this.sprites.background, 0, 0);
    this.ctx.drawImage(this.sprites.ball, 0, 0);
    this.ctx.drawImage(this.sprites.platform, 0, 0);
    console.log('Rendered');
  },

  start: function () {
    this.init();
    this.preLoad(() => this.run());
  },
};

window.addEventListener('load', () => {
  game.start();
});
