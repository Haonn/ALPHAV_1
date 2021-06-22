var config = {
    width: 1980,
    height: 1080,
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
////////////////////////////////////////////////////////VARIABLE////////////////////////////////////////////////////////
  var sceneActuelle;
  var game = new Phaser.Game(config);
  

