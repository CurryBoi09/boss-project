function setLevelMap (num: number) {
    if (num == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else {
    	
    }
}
function hasNextLevel () {
	
}
let Monkey = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f 5 5 5 5 5 f . . . 
    . . . . . f 5 5 5 d d d d f . . 
    . . . . f f 5 5 f f f f f f c . 
    . . . f d d 5 5 d f f d f f c . 
    . . . c d b 5 5 d d d d e e d c 
    f f . c d b 5 5 d d c d d d d c 
    f 5 f . c f 5 5 d d d c c c c c 
    f 5 f . . f f 5 5 d d d d d f . 
    f 5 f . f 5 5 5 5 f f f f f . . 
    f 5 f f 5 5 5 5 5 5 5 f . . . . 
    . f f 5 5 5 5 f 5 f f 5 f . . . 
    . . f 5 5 5 5 f 5 f f 5 f . . . 
    . . . f 5 f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(7)
scene.cameraFollowSprite(Monkey)
let currentLevel = 0
let levelCount = 3
game.onUpdate(function () {
    Monkey.x += controller.dx()
    Monkey.y += controller.dy()
})
