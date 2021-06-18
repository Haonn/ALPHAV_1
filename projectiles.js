class Projectiles extends Phaser.Physics.Arcade.Group
{
	constructor(sceneActuelle) {
		// Call the super constructor, passing in a world and a scene
		super(sceneActuelle.physics.world, sceneActuelle);
 
		this.bullets = sceneActuelle.physics.add.group({
			defaultKey: 'thunderProjectile',
			maxSize: 1000
		});
	}

	shoot(scene, pointer) {
		if (player.thunderAbility == true)
		{
			this.bullet = this.bullets.get(player.x, player.y);
			if (this.bullet) {
				this.bullet.setActive(true);
				this.bullet.setVisible(true);
	
				//Calcul de coordonnées du vecteur entre les deux projectiles
				this.dY = ( pointer.y - player.y);
				this.dX = ( pointer.x - player.x);
	
				/*Coefficient entre dX et dY (a voir dans quel sens l'utiliser)
				coeffDistance = (Math.abs(dY)/Math.abs(dX)) */
	
				/*Distance entre les deux points 
				distance = (Math.abs(dY)+Math.abs(dX)); */
	
				//Distance à ajouter pour atteindre la constante vitesse.
				this.dSpeed = (800/(Math.abs(this.dY)+Math.abs(this.dX))); 
	
				this.bullet.body.velocity.y = this.dY*this.dSpeed;
				this.bullet.body.velocity.x = this.dX*this.dSpeed;
	
				
	
				/*if (player.direction == "left"){
				bullet.body.velocity.x = -200
				bullet.body.velocity.y = 0
				}
				if (player.direction == "right"){
				bullet.body.velocity.x = 200
				bullet.body.velocity.y = 0
				}
				if (player.direction == "up"){
				bullet.body.velocity.x = 0
				bullet.body.velocity.y = -200
				}
				if (player.direction == "down"){
				bullet.body.velocity.x = 0
				bullet.body.velocity.y = 200
				}*/
				
			}
		}
		//scene.physics.add.collider(this.bullets, ennemi1,bulletsennemi1);
		
	}
}
