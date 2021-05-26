class Scene1 extends Phaser.Scene {
    constructor() {
      super("Scene1");
    }
  
    init(data)
    {
    
    }
  
    preload()
    {
        this.load.image("TilsetTest", 'assets/Environnement/TilsetTest.png');
        this.load.tilemapTiledJSON("map", 'assets/Environnement/TEST.json');


        this.load.image('background','assets/experimentalBackground.png');
        this.load.spritesheet('dude', 'assets/perso_base.png', { frameWidth: 80, frameHeight:  110});
        
    }

    create() 
    {  


        this.add.image(960,540, 'background');

        this.map = this.add.tilemap('map');
        this.tiles = this.map.addTilesetImage('TilsetTest');

        this.collisionLayer = this.map.createStaticLayer('collisionLayer', this.tiles, 0, 0)
        this.collisionLayer.setCollisionByExclusion(-1,true);

       

        player = new Perso(this,50,50,'dude');

        this.cameras.main.setSize(1920,1080);
        //this.cameras.main.startFollow(this.player,true,0,0);

         //(A mettre dans les colliders)
         this.physics.add.collider(player,this.collisionLayer);

    }
    
    update() 
    {
      player.updatePerso()
    }
  }
  
  