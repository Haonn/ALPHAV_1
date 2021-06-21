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
        this.load.tilemapTiledJSON("map", 'assets/Environnement/lvl1.json');
        this.load.image('ennemiChargeur', 'assets/ennemiChargeur.png');
        this.load.image('background','assets/experimentalBackground.png');
        this.load.spritesheet('dude', 'assets/Perso_base.png', { frameWidth: 80, frameHeight:  110});
        this.load.image('thunderProjectileImage', 'assets/thunderProjectile.png')
        this.load.image('firebolt', 'assets/firebolt.png')
    }
    relanceScene() {
        this.scene.restart();
    }
    ////////////////////////////////////////////////////////CREATE////////////////////////////////////////////////////////
    create() 
    {  
        this.add.image(960, 540, 'background');
        this.add.image(2880, 540, 'background');
        this.add.image(4800, 540, 'background');


        // Tiled 
        this.map = this.add.tilemap('map');
        this.tiles = this.map.addTilesetImage('TilsetTest','TilsetTest');

        this.collisionLayer = this.map.createLayer('collisionLayer', this.tiles, 0, 0);
        this.collisionLayer.setCollisionByExclusion(-1,true);

        // Player 
        this.startX = 50
        this.startY = 50
        this.player = new Perso(this, this.startX, this.startY, 'dude');

        // Bonus 

        //Ennemis

        this.chargeur1 = new EnnemiChargeur(this, 1147, 622, 'ennemiChargeur');

        this.chargeur2 = new EnnemiChargeur(this, 2269, 800, 'ennemiChargeur');

        this.chargeur3 = new EnnemiChargeur(this, 2769, 800, 'ennemiChargeur');

        this.chargeur4 = new EnnemiChargeur(this, 2769, 300, 'ennemiChargeur');

        this.chargeur5 = new EnnemiChargeur(this, 3566, 700, 'ennemiChargeur');

        this.listeEnnemiScene1 = [this.chargeur1, this.chargeur2, this.chargeur3, this.chargeur4, this.chargeur5];
        //this.projectileScene1 = new Projectiles(this);

        this.cameras.main.setSize(1920, 1080);
        this.cameras.main.setBounds(0, 0, 5760, 1200);


         //(A mettre dans les colliders)
        this.physics.add.collider(this.player, this.collisionLayer);
        this.physics.add.collider(this.listeEnnemiScene1, this.collisionLayer);
        this.physics.add.overlap(this.listeEnnemiScene1, this.player, this.player.mortPlayer)

    }

    
    ////////////////////////////////////////////////////////UPDATE////////////////////////////////////////////////////////
    update() 
    {
        this.cameras.main.startFollow(this.player, true, 0, 0);
        this.player.updatePerso(this, this.listeEnnemiScene1, this.collisionLayer);
        if (this.chargeur1.displayList != null) { this.chargeur1.updateEnnemiChargeur(this) };
        if (this.chargeur2.displayList != null) { this.chargeur2.updateEnnemiChargeur(this) };
        if (this.chargeur3.displayList != null) { this.chargeur3.updateEnnemiChargeur(this) };
        if (this.chargeur4.displayList != null) { this.chargeur4.updateEnnemiChargeur(this) };
        if (this.chargeur5.displayList != null) { this.chargeur5.updateEnnemiChargeur(this) };
        if (this.player.body.x >= 5200 && this.player.body.y <= -46) {
            this.scene.start("EcranTitre");
        }

        //this.chargeur1.updateEnnemiChargeur(this);
        //this.chargeur2.updateEnnemiChargeur(this);
    }
  }
  
  