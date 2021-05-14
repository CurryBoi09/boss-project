scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    statusbar.value += 30
    music.baDing.play()
    tiles.setTileAt(location, sprites.dungeon.floorLightMoss)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    music.smallCrash.play()
    statusbar.value += -0.1
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
function setLevelMap (num: number) {
    if (num == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else if (num == 2) {
        tiles.setTilemap(tilemap`level2`)
    } else {
    	
    }
    hasNextLevel()
}
function hasNextLevel () {
    return currentLevel != levelCount
}
let statusbar: StatusBarSprite = null
let levelCount = 0
let currentLevel = 0
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
scene.cameraFollowSprite(Monkey)
currentLevel = 0
levelCount = 3
Monkey.setPosition(60, 720)
setLevelMap(0)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(Monkey)
game.onUpdate(function () {
    Monkey.x += controller.dx()
    Monkey.y += controller.dy()
})
