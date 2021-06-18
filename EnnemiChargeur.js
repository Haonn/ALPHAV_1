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

        this.body.setAccelerationX(10000 + Phaser.Math.Between(1000, 5000));
        this.detectionZone = 1500;

    }

    droite() {
        this.regarde = 'aDroite';

        this.body.setAccelerationX(130)

    }

    chargeGauche() {
        this.regarde = 'aGauche'

        this.body.setAccelerationX(-10000 + Phaser.Math.Between(1000, 5000));
        this.detectionZone = 1500;
    }

    gauche() {
        this.regarde = 'aGauche';
        this.body.setAccelerationX(-130)
    }


    saut() {
        this.body.setAccelerationY(-300);
    }

    mortEnnemi(ennemi,projectile) {
        ennemi.destroy();
        projectile.destroy();
    }

    //////////////////////////////////////////////////////////UPDATE DU PERSONNAGE//////////////////////////////////////////////////////////   
    updateEnnemiChargeur(sceneActuelle) {


        if (sceneActuelle.player.body.position.y > (this.body.position.y - this.detectionZone) && (sceneActuelle.player.body.position.y < (this.body.position.y + this.detectionZone))) {
            if (sceneActuelle.player.body.position.x < this.body.position.x && sceneActuelle.player.body.position.x > (this.body.position.x - 500)) {
                this.gauche();
                if (sceneActuelle.player.body.position.x < (this.body.position.x + 200) && sceneActuelle.player.body.position.x > (this.body.position.x - 200)) {
                    this.chargeGauche();
                }
            }
            else if (sceneActuelle.player.body.position.x > (this.body.position.x - this.detectionZone) && this.body.position.x < (this.body.position.x + this.detectionZone)) {
                this.droite();
                if (sceneActuelle.player.body.position.x > (this.body.position.x - 200) && this.body.position.x < (this.body.position.x + 200)) {
                    this.chargeDroite();
                }

                else {
                    this.body.setVelocityX(0);
                }

            }

        }

    }
}