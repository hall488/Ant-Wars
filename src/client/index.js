import Phaser from 'phaser';
import logoImg from '../../assets/logo.png';

class MyGame extends Phaser.Scene
{
    slogo;    

    preload ()
    {
        this.load.image('logo', logoImg);
    }
      
    create ()
    {
        this.slogo = this.add.image(400, 150, 'logo');
    }

    update () 
    {
        this.slogo.rotation += 0.01;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
