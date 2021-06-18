class TestProjectile extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y, texture, pointer) {
        super(scene, x, y, texture);
        scene.add.existing(this);
		scene.physics.world.enableBody(this);
		this.body.immovable = true;
		this.shoot(pointer, scene);
		this.body.setGravityY(-300);
    }


	shoot(pointer,scene) {
		if (scene.player.thunderAbility == true) {
			if (this.body) {
				pointer.x += scene.cameras.main.scrollX
				this.dY = (pointer.y - scene.player.y);
				this.dX = (pointer.x - scene.player.x);

				this.dSpeed = (800 / (Math.abs(this.dY) + Math.abs(this.dX)));

				this.body.setVelocityY(this.dY * this.dSpeed);
				this.body.setVelocityX(this.dX * this.dSpeed);
			}
		}
	}

	test() {
		console.log("touché")
    }
}