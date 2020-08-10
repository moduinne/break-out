import * as Phaser from 'phaser';
const PADDLE_SCALE = 0.25;
const START_X = innerWidth;
const START_Y = (2*innerHeight) - 200;

export class GameScene extends Phaser.Scene {

    private paddle: Phaser.Physics.Arcade.Sprite;

    constructor() {
        super({ key: 'game' });
    }


    preload(){
       //paddle image
       this.load.setPath('/assets/PNG/');
       this.load.image('paddle', '56-Breakout-Tiles.png');
        
    }

    create(){
        //adding paddle to game
        this.addPaddle();
    }

     //wrapper method for creating the player/paddle
    addPaddle(){
        this.paddle = this.physics.add.sprite(START_X, START_Y, 'paddle').setScale(PADDLE_SCALE).refreshBody();
        //this.paddle.setImmovable(true);
        //this.paddle.setCollideWorldBounds(true);
       // this.paddle.setInteractive();
    }

    update(){
        //TODO
    }

}