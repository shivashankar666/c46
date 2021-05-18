var bg,bgImg
var horse1,horse1Img
var horse2,horse2Img

function preload(){
    bgImg=loadImage("images/bg.png")
   horse1Img=loadAnimation("images/horse_1.png","images/horse_2.png","images/horse_3.png","images/horse_4.png")
   horse2Img=loadAnimation("images/horse1.jpg","images/horse2.jpg","images/horse3.jpg","images/horse4.jpg")
}
function setup(){
canvas=createCanvas(displayWidth,displayHeight)
bg=createSprite(1600,300,displayWidth*5,displayHeight)
bg.addImage(bgImg);

}
function draw(){
background("blue");
drawSprites();
}