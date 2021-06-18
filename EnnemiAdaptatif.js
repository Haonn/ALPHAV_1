class EnnemiAdaptatif extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.regarde = "aDroite";
        this.detectionZone = 500;

        this.scene = scene;

    }


    droite() {
        this.regarde = 'aDroite';

        this.body.setAccelerationX(130)

    }


    gauche() {
        this.regarde = 'aGauche';
        this.body.setAccelerationX(-130)
    }


    saut() {
        this.body.setAccelerationY(-300);
    }

    dgtEnnemi() {
        if (player.pouvoirChoisi == 1) {
            this.destroy();
        }

    }


    //////////////////////////////////////////////////////////UPDATE DU PERSONNAGE//////////////////////////////////////////////////////////   
    updateEnnemiAdaptatif(sceneActuelle) {


        if (player.body.position.y > (this.body.position.y - this.detectionZone) && (player.body.position.y < (this.body.position.y + this.detectionZone))) {
            if (player.body.position.x < this.body.position.x && player.body.position.x > (this.body.position.x - 500)) {
                this.gauche();
                if (player.pouvoirChoisi == 1) {
                    this.droite;
                }
            }
            else if (player.body.position.x > (this.body.position.x - this.detectionZone) && this.body.position.x < (this.body.position.x + this.detectionZone)) {
                this.droite();
                if (player.pouvoirChoisi == 1) {
                    this.gauche;
                }

                else {
                    this.body.setVelocityX(0);
                }

            }

        }

    }
}