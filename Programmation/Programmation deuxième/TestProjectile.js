class TestProjectile extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y, texture, pointer) {
        super(scene, x, y, texture);

        scene.add.existing(this);
		scene.physics.world.enableBody(this);
		this.body.immovable = true;
		this.shoot(pointer,scene);

    }


	shoot(pointer,scene) {
		if (player.thunderAbility == true) {
			if (this.body) {
				//this.body.setActive(true);
				//this.body.setVisible(true);

				//Calcul de coordonnées du vecteur entre les deux projectiles

				pointer.x += scene.cameras.main.scrollX
				this.dY = (pointer.y - player.y);
				this.dX = (pointer.x - player.x);

				/*Coefficient entre dX et dY (a voir dans quel sens l'utiliser)
				coeffDistance = (Math.abs(dY)/Math.abs(dX)) */

				/*Distance entre les deux points 
				distance = (Math.abs(dY)+Math.abs(dX)); */

				//Distance à ajouter pour atteindre la constante vitesse.
				this.dSpeed = (800 / (Math.abs(this.dY) + Math.abs(this.dX)));

				this.body.setVelocityY(this.dY * this.dSpeed);
				this.body.setVelocityX(this.dX * this.dSpeed);
			}
		}
    }
}