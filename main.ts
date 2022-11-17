let meteor: game.LedSprite = null
let speed = 500
meteor = game.createSprite(randint(0, 4), 0)
meteor.set(LedSpriteProperty.Direction, 0)
meteor.set(LedSpriteProperty.Brightness, 255)
let player = game.createSprite(randint(0, 4), 4)
player.set(LedSpriteProperty.Brightness, 150)
game.startCountdown(60000)
game.setScore(0)
basic.forever(function () {
    pause(speed)
meteor.move(-1)
if (meteor.isTouching(player)) {
    game.gameOver()
}
    if (meteor.get(LedSpriteProperty.Y) == 4) {
        pause(speed)
        game.addScore(1)

meteor.setY(0)
meteor.setX(randint(0, 4))
speed = speed - 10
    }
})

input.onButtonPressed(Button.A, function() {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})