class EcranTitre extends Phaser.Scene {
    constructor() {
        super("EcranTitre");
        const { SPACE} = Phaser.Input.Keyboard.KeyCodes;

        this.keys = scene.input.keyboard.addKeys({

            space: SPACE,

        });
    }
    

    init(data) {

    }

    ////////////////////////////////////////////////////////PRELOAD////////////////////////////////////////////////////////
    preload() {
        this.load.image("Titre", 'assets/EcranTitre.png');

    }

    ////////////////////////////////////////////////////////CREATE////////////////////////////////////////////////////////
    create() {
        this.titre = this.add.image(960, 540, 'Titre');



    }

    ////////////////////////////////////////////////////////UPDATE////////////////////////////////////////////////////////
    update() {
        console.log("passage écran titre")
        if (this.keys.space.isDown) {
            this.scene.start("Scene1");
        }


    }
}