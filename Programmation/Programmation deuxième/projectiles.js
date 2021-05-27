class Projectiles extends Phaser.Physics.Arcade.Group
{
	constructor(scene) {
		// Call the super constructor, passing in a world and a scene
		super(scene.physics.world, scene);
 
		this.bullet = this.physics.add.group({
			defaultKey: 'thunderProjectile',
			maxSize: 1000
		});
	}

	shoot(pointer) {
		if (player.thunderAbility == true)
		{
			var bullet = this.bullets.get(player.x, player.y);
			if (bullet) {
				bullet.setActive(true);
				bullet.setVisible(true);
	
				//Calcul de coordonnées du vecteur entre les deux projectiles
				dY = ( pointer.y - player.y);
				dX = ( pointer.x - player.x);
	
				/*Coefficient entre dX et dY (a voir dans quel sens l'utiliser)
				coeffDistance = (Math.abs(dY)/Math.abs(dX)) */
	
				/*Distance entre les deux points 
				distance = (Math.abs(dY)+Math.abs(dX)); */
	
				//Distance à ajouter pour atteindre la constante vitesse.
				dSpeed = (800/(Math.abs(dY)+Math.abs(dX))); 
	
				bullet.body.velocity.y = dY*dSpeed;
				bullet.body.velocity.x = dX*dSpeed;
	
				
	
				/*if (facing == "left"){
				bullet.body.velocity.x = -200
				bullet.body.velocity.y = 0
				}
				if (facing == "right"){
				bullet.body.velocity.x = 200
				bullet.body.velocity.y = 0
				}
				if (facing == "up"){
				bullet.body.velocity.x = 0
				bullet.body.velocity.y = -200
				}
				if (facing == "down"){
				bullet.body.velocity.x = 0
				bullet.body.velocity.y = 200
				}*/
				
			}
		}
		this.physics.add.collider(this.bullets, ennemi1,bulletsennemi1);
		
	}
}
