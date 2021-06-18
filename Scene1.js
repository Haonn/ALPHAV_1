class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
    }
  
    init(data)
    {
        
    }
    
    ////////////////////////////////////////////////////////PRELOAD////////////////////////////////////////////////////////
    preload()
    {
        this.load.image("TilsetTest", 'assets/Environnement/TilsetTest.png');
        this.load.tilemapTiledJSON("map", 'assets/Environnement/TEST.json');

        this.load.image('ennemiChargeur', 'assets/ennemiChargeur.png');
        this.load.image('background','assets/experimentalBackground.png');
        this.load.spritesheet('dude', 'assets/perso_base.png', { frameWidth: 80, frameHeight:  110});
        this.load.image('thunderProjectileImage', 'assets/thunderProjectile.png')
        this.load.image('firebolt', 'assets/firebolt.png')
    }

    ////////////////////////////////////////////////////////CREATE////////////////////////////////////////////////////////
    create() 
    {  
        this.add.image(960,540, 'background');

        // Tiled 
        this.map = this.add.tilemap('map');
        this.tiles = this.map.addTilesetImage('TilsetTest');

        this.collisionLayer = this.map.createStaticLayer('collisionLayer', this.tiles, 0, 0)
        this.collisionLayer.setCollisionByExclusion(-1,true);

        // Player 

        this.player = new Perso(this, 50, 50, 'dude');

        // Bonus 

        //Ennemis

        this.chargeur1 = new EnnemiChargeur(this, 700, 100, 'ennemiChargeur');

        this.chargeur2 = new EnnemiChargeur(this, 900, 100, 'ennemiChargeur');

        this.listeEnnemiScene1 = [this.chargeur1, this.chargeur2];
        //this.projectileScene1 = new Projectiles(this);

        this.cameras.main.setSize(8000, 4000);
        this.cameras.main.setBounds(0, 0, 1920, 1080);

        this.cameras.main.startFollow(this.player,true,0,0);

         //(A mettre dans les colliders)
        this.physics.add.collider(this.player, this.collisionLayer);
        this.physics.add.collider(this.listeEnnemiScene1, this.collisionLayer);
        console.log(this)
        /*console.log(pointer)
        console.log(pointer.x)*/
    }
    
    ////////////////////////////////////////////////////////UPDATE////////////////////////////////////////////////////////
    update() 
    {
        this.player.updatePerso(this, this.listeEnnemiScene1, this.collisionLayer);
        this.chargeur1.updateEnnemiChargeur(this);
        this.chargeur2.updateEnnemiChargeur(this);
    }
  }
  
  