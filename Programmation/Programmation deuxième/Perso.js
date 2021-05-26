class Perso extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        this.timerPouvoir = 60;
        this.pouvoirChoisi = 0;
        this.vie = 3;
        this.regarde='aDroite';
        this.direction == 'aucune';
        
        
        const { SPACE, Z, Q, D, S } = Phaser.Input.Keyboard.KeyCodes;
        this.keys = scene.input.keyboard.addKeys({
          
          space: SPACE,
          z: Z,
          q: Q,
          s: S,
          d: D
        });
    }

    //GESTION DES POUVOIRS:
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
            console.log('passage du pouvoir de vent à celui de foudre')
        }

        
        console.log(this.pouvoirChoisi);
    }

    pouvoirVent(direction){
        if(direction==gauche){
            this.setGravityX(-5000);
        }
        else if(direction==haut){
            player.setGravityY(-100);
        }
        else if(direction==droite){
            this.setGravityX(5000);
        }
        else if(direction==bas){
            player.setGravityX(5000);
        }
    }

    pouvoirFoudre(){

    }

    pouvoirFeu(){

    }

    //FONCTIONS DE DEPLACEMENT

    droite(){
        this.regarde='aDroite';
        if(this.body.touchingDown == true){
            if(this.pouvoirChoisi == 0){
                this.body.setVelocityX(240)
            }
            else{
                this.body.setVelocityX(160)
            }
        }
        console.log('droite')
    }

    gauche(){
        this.regarde='aGauche';
        if(this.body.touchingDown == true){
            if(this.pouvoirChoisi == 0){
                this.body.setVelocityX(-240)
            }
            else{
                this.body.setVelocityX(-160)
            }
        }
        console.log('gauche')
    }


    saut(){

    }
    updatePerso(toucheSol){
        
        if (toucheSol == true){
            console.log('true')
        }
        else if (toucheSol == false) {
            console.log('false')
        }
        else { console.log('undefined') } 
        
        //DEPLACEMENTS

        if (this.keys.q.isDown == true){
            this.gauche()
        }

        if (this.keys.d.isDown == true){
            this.droite()
        }

        if (this.keys.z.isDown == true){
            this.saut()
        }

        if (this.keys.space.isDown == true && this.timerPouvoir > 30){
          this.choixPouvoir()
          this.timerPouvoir=0
        }

        this.timerPouvoir++
    }
}