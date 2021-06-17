var config = {
    width: 1280,
    height: 704,
    backgroundColor: 0x000000,
    scene: [Scene1],
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: true
      }
    }
  }
////////////////////////////////////////////////////////VARIABLE////////////////////////////////////////////////////////
  var player;
  var sceneActuelle;
  var game = new Phaser.Game(config);
  

