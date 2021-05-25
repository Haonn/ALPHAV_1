class Perso extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        this.pouvoirChoisi = 0;
        this.vie = 3;
        this.regarde='aDroite';

    }

    //GESTION DES POUVOIRS:
    // 0=foudre; 1=feu; 2 = vent;

    choixPouvoir(){
        if(this.pouvoirChoisi == 0){
            this.pouvoirChoisi = 1;
        }
        if(this.choixPouvoir == 1){
            this.choixPouvoir = 2
        }
        if(this.choixPouvoir == 2){
            this.choixPouvoir = 0
        }
    }

    pouvoirVent(direction){
        if(direction==gauche){

        }
        else if(direction==haut){

        }
        else if(direction==droite){
            
        }
        else if(direction==bas){
            
        }
    }

    pouvoirFoudre(){

    }

    pouvoirFeu(){

    }

    //GESTION DES DEPLACEMENTS

    droite(){
        this.regarde='aDroite';
        if(this.body.touchingDown == true){
            if(this.choixPouvoir == 0){
                this.setVelocityX(240)
            }
            else{
                this.setVelocityX(160)
            }
        }
    }

    gauche(){
        this.regarde='aGauche';
        if(this.body.touchingDown == true){
            if(this.choixPouvoir == 0){
                this.setVelocityX(-240)
            }
            else{
                this.setVelocityX(-160)
            }
        }
    }


    saut(){

    }
}