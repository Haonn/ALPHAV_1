class Scene1 extends Phaser.Scene {
    constructor() {
      super("Scene1");
    }
  
    init(data)
    {
       
    }
  
    preload()
    {
        this.load.image('background','assets/experimentalBackground.png');
        this.load.spritesheet('dude', 'assets/perso_base.png', { frameWidth: 80, frameHeight:  110});
        
    }
  
    create() 
    {  
        this.cameras.main.setSize(1920,1080);

        this.add.image(960,540, 'background');

        player = new Perso(this,50,50,'dude');
    }
    
    update() 
    {
      
    }
  }
  
  