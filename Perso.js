class Perso extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        this.scene = scene;
        this.timerPouvoir = 60;
        this.pouvoirChoisi = 0;
        this.vies = 3;
        this.regarde='aDroite';
        this.direction = 'aucune';
        this.thunderAbility = true;
        this.timerTir = 16
        //this.pointer = sceneActuelle.input.Pointer;

        
        const { SPACE, Z, Q, D, S } = Phaser.Input.Keyboard.KeyCodes;
        this.pointer = Phaser.Input.pointer;
        this.keys = scene.input.keyboard.addKeys({
          
          space: SPACE,
          z: Z,
          q: Q,
          s: S,
          d: D,
        });
    }

    ////////////////////////////////////////////////////////GESTION DES POUVOIRS////////////////////////////////////////////////////////
    // 0=foudre; 1=feu; 2 = vent;

    choixPouvoir(){

        if(this.pouvoirChoisi == 0 ){
            this.pouvoirChoisi = 1;
            console.log('passage du pouvoir de foudre à celui de feu')
        }

        else if(this.pouvoirChoisi == 1 ){
            this.pouvoirChoisi = 2
            console.log('passage du pouvoir de feu à celui de vent')
        }

        else if(this.pouvoirChoisi == 2 ){
            this.pouvoirChoisi = 0
            this.resetVent();
            console.log('passage du pouvoir de vent à celui de foudre')
        }

        
        console.log(this.pouvoirChoisi);
    }

    pouvoirVent(direction){
        if(direction=='gauche'){
            this.resetVent();
            this.body.setGravityX(-500);
        }
        else if(direction=='haut'){
            this.resetVent();
            this.body.setGravityY(-100);
        }
        else if(direction=='droite'){
            this.resetVent();
            this.body.setGravityX(500);
        }
        else if(direction=='bas'){
            this.resetVent();
            this.body.setGravityX(500);
        }
    }

    resetVent(){
        this.body.setGravityX(0);
        this.body.setGravityY(0);
    }

    //////////////////////////////////////////////////////////FONCTIONS DE DEPLACEMENT//////////////////////////////////////////////////////////

    droite(toucheSol){
        this.regarde='aDroite';
        if(toucheSol){
            if(this.pouvoirChoisi == 0){
                this.body.setVelocityX(240)
            }
            else{
                this.body.setVelocityX(160)
                }
        }
        else if (this.pouvoirChoisi != 2){this.body.setAccelerationX(100)}
        else if (this.pouvoirChoisi == 2){this.body.setAccelerationX(150)}
    }

    gauche(toucheSol){
        this.regarde='aGauche';
        if(toucheSol){
            if(this.pouvoirChoisi == 0){
                this.body.setVelocityX(-240)
            }
            else{
                this.body.setVelocityX(-160)
            }
        }
        else if (this.pouvoirChoisi != 2){this.body.setAccelerationX(-100)}
    }


    saut(){
        this.body.setVelocityY(-300);
    }


    //////////////////////////////////////////////////////////UPDATE DU PERSONNAGE//////////////////////////////////////////////////////////   
    updatePerso(sceneActuelle, listeEnnemi, sol){


        // Utilisation de la capacité active 

        this.pointer = sceneActuelle.input.activePointer;

        if (this.pointer.isDown && this.timerTir > 25) {
            //Projectile de foudre 
            if (this.pouvoirChoisi == 0) {
                this.projectile = new TestProjectile(sceneActuelle, this.body.x + 40, this.body.y + 55, 'thunderProjectileImage', this.pointer);
                sceneActuelle.physics.add.collider(this.pointer, sol);
                for (let i = 0; i < listeEnnemi.length; i++) {
                    sceneActuelle.physics.add.collider(this.projectile, listeEnnemi[i], this.projectile.test);
                }
                this.timerTir = 0;
            }

            //Projectile de feu 
            if (this.pouvoirChoisi == 1) {
                this.projectile = new TestProjectile(sceneActuelle, this.body.x + 40, this.body.y + 55, 'firebolt', this.pointer);
                sceneActuelle.physics.add.collider(this.pointer, sol);
                for (let i = 0; i < listeEnnemi.length; i++) {
                    sceneActuelle.physics.add.collider(this.projectile, listeEnnemi[i], this.projectile.test);
                }
                this.timerTir = 0;
            }

            // Choisir la direction du vent avec la souris 
            else if (this.pouvoirChoisi == 2) {
                if (Math.abs(this.pointer.y) < Math.abs(this.pointer.x)) {
                    if (this.pointer.y < this.body.x) {
                        this.pouvoirVent('haut');
                    }
                    else {
                        this.pouvoirVent('bas');
                    }
                }
                else if (this.pointer.x < this.body.x) {
                    this.pouvoirVent('gauche');
                }
                else {
                    this.pouvoirVent('droite');
                }
            }
        }

        
        const toucheSol = this.body.blocked.down;
        
        //DEPLACEMENTS - UPDATE

         if (this.keys.space.isDown == true && this.timerPouvoir > 30) {
            this.choixPouvoir()
            this.timerPouvoir = 0;
        }


        else if (this.keys.z.isDown == true && toucheSol){
            this.saut()
            console.log(this);
        }

        else if (this.keys.q.isDown == true){
            this.gauche(toucheSol)
        }

        else if (this.keys.d.isDown == true){
            this.droite(toucheSol)
        }


        else if(toucheSol){
            this.body.setVelocityX(0);
            this.body.setVelocityY(100);
        }
        if(toucheSol){
            this.body.setAccelerationX(0);
            this.body.setAccelerationY(0);
        }

        // Gestion des Timers 


        this.timerPouvoir++;
        this.timerTir++;
    }

}