var config = {
    width: 1280,
    height: 720,
    backgroundColor: 0x000000,
    scene: [N1Part1, N1Part2],
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
    }
  }

  var game = new Phaser.Game(config)