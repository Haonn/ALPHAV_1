var config = {
    width: 1280,
    height: 704,
    backgroundColor: 0x000000,
    scene: [Scene1],
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
    }
  }

  var player;
  var game = new Phaser.Game(config)