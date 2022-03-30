let direction = 0
basic.forever(function () {
    direction = input.compassHeading()
    if (direction <= 45 || direction >= 315) {
        basic.showArrow(ArrowNames.North)
    } else if (direction > 45 && direction < 135) {
        basic.showArrow(ArrowNames.West)
    } else if (direction >= 135 && direction < 225) {
        basic.showArrow(ArrowNames.East)
    } else if (direction >= 255 && direction < 315) {
        basic.showArrow(ArrowNames.South)
    }
})
