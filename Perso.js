class Perso extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        this.scene = scene;
        this.timerPouvoir = 60;
        this.pouvoirChoisi = 0;
        this.vies = 3;
        this.regarde = 'aDroite';
        this.direction = 'aucune';
        this.thunderAbility = true;
        this.timerTir = 16


        const { SPACE, Z, Q, D, S, K, O, M, L } = Phaser.Input.Keyboard.KeyCodes;
        this.pointer = Phaser.Input.pointer;
        this.keys = scene.input.keyboard.addKeys({

            space: SPACE,
            z: Z,
            q: Q,
            s: S,
            d: D,
            k: K,
            o: O,
            m: M,
            l: L,
        });
    }
    ////////////////////////////////////////////////////////GESTION DE LA VIE////////////////////////////////////////////////////////
    prendDegat() {
        if (this.invulnerabilite > 100) {
            this.vies -= 1;
            if (this.vies < 1) {
                this.mortPlayer();
            }
        }
    }

    mortPlayer() {
        this.estMort = true;
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
        else if (this.pouvoirChoisi != 2){this.body.setAccelerationX(150)}
        else if (this.pouvoirChoisi == 2){this.body.setAccelerationX(200)}
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
        else if (this.pouvoirChoisi != 2) { this.body.setAccelerationX(-150) }
        else if (this.pouvoirChoisi == 2) { this.body.setAccelerationX(-200) }
    }


    saut(){
        this.body.setVelocityY(-300);
    }


    //////////////////////////////////////////////////////////UPDATE DU PERSONNAGE//////////////////////////////////////////////////////////   
    updatePerso(sceneActuelle, listeEnnemi, sol) {
        if (this.estMort == true) {
            sceneActuelle.relanceScene();
        }


        
        // Utilisation de la capacité active 

        this.pointer = sceneActuelle.input.activePointer;

        if (this.pointer.isDown && this.timerTir > 25) {
            console.log(this.body.x, this.body.y)
            //Projectile de foudre 
            if (this.pouvoirChoisi == 0) {
                this.projectile = new TestProjectile(sceneActuelle, this.body.x + 40, this.body.y + 55, 'thunderProjectileImage', this.pointer);
                sceneActuelle.physics.add.collider(this.pointer, sol);
                for (let i = 0; i < listeEnnemi.length; i++) {
                    //sceneActuelle.physics.add.collider(this.projectile, listeEnnemi[i], this.projectile.test);
                    //listeEnnemi[i].colliderProjectile(this, sceneActuelle);
                    sceneActuelle.physics.add.collider(listeEnnemi[i], this.projectile, listeEnnemi[i].mortEnnemi);
                }
                this.timerTir = 0;
            }

            //Projectile de feu 
            if (this.pouvoirChoisi == 1) {
                this.projectile = new TestProjectile(sceneActuelle, this.body.x + 40, this.body.y + 55, 'firebolt', this.pointer);
                sceneActuelle.physics.add.collider(this.pointer, sol);
                for (let i = 0; i < listeEnnemi.length; i++) {
                    //sceneActuelle.physics.add.collider(this.projectile, listeEnnemi[i], this.projectile.test);
                    sceneActuelle.physics.add.collider(listeEnnemi[i], this.projectile, listeEnnemi[i].mortEnnemi);
                }
                this.timerTir = 0;
            }

            // Choisir la direction du vent avec la souris 
            else if (this.pouvoirChoisi == 2) {


                /*if ((this.pointer.x) < this.body.x) {
                    this.pouvoirVent('gauche');
                }
                else if ((this.pointer.x) > (this.body.x)) {
                    this.pouvoirVent('droite');
                }
                 if ((this.pointer.y-this.body.y) > (this.pointer.x-this.body.x)) {
                    if (this.pointer.y < this.body.y) {
                        this.pouvoirVent('haut');
                    }
                    else {
                        this.pouvoirVent('bas');
                    }
                }*/
                /*this.resetVent();
                console.log(sceneActuelle.cameras.main.scrollX)
                this.pointer.x -= sceneActuelle.cameras.main.scrollX;
                this.pointer.y -= sceneActuelle.cameras.main.scrollY;
                this.dY = (this.pointer.y - (this.body.y - sceneActuelle.cameras.main.scrollY));
                this.dX = (this.pointer.x - (this.body.x - sceneActuelle.cameras.main.scrollX));

                this.dSpeed = (250 / (Math.abs(this.dY) + Math.abs(this.dX)));

                this.body.setGravityY(this.dY * this.dSpeed);
                this.body.setGravityX(this.dX * this.dSpeed);*/

            }
        }

        if (this.pouvoirChoisi == 2) {
        if (this.keys.o.isDown) {
            this.pouvoirVent("haut");
        }
        if (this.keys.m.isDown) {
            this.pouvoirVent("droite");
        }
        if (this.keys.k.isDown) {
            this.pouvoirVent("gauche");
        }
        if (this.keys.l.isDown) {
            this.pouvoirVent("bas");
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

        this.invulnerabilite++;
        this.timerPouvoir++;
        this.timerTir++;
    }

}