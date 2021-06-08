class EnnemiChargeur extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.regarde = "aDroite";
        this.detectionZone = 500;

        this.scene = scene;

    }

    chargeDroite() {
        this.regarde = 'aDroite'

        this.body.setAccelerationX(10000);
        this.detectionZone = 1500;

    }

    droite() {
        this.regarde = 'aDroite';

        this.body.setAccelerationX(130)

    }

    chargeGauche() {
        this.regarde = 'aGauche'

        this.body.setAccelerationX(-10000);
        this.detectionZone = 1500;
    }

    gauche() {
        this.regarde = 'aGauche';
        this.body.setAccelerationX(-130)
    }


    saut() {
        this.body.setAccelerationY(-300);
    }

    mortEnnemi() {
        this.destroy();
    }


    //////////////////////////////////////////////////////////UPDATE DU PERSONNAGE//////////////////////////////////////////////////////////   
    updateEnnemiChargeur(sceneActuelle) {


        if (player.body.position.y > (this.body.position.y - this.detectionZone) && (player.body.position.y < (this.body.position.y + this.detectionZone))) {
            if (player.body.position.x < this.body.position.x && player.body.position.x > (this.body.position.x - 500)) {
                this.gauche();
                if (player.body.position.x < (this.body.position.x + 150) && player.body.position.x > (this.body.position.x - 150)) {
                    this.chargeGauche();
                }
            }
            else if (player.body.position.x > (this.body.position.x - this.detectionZone) && this.body.position.x < (this.body.position.x + this.detectionZone)) {
                this.droite();
                if (player.body.position.x > (this.body.position.x - 150) && this.body.position.x < (this.body.position.x + 150)) {
                    this.chargeDroite();
                }

                else {
                    this.body.setVelocityX(0);
                }

            }

        }

    }
}