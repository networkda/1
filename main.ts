cuteBot.IR_callback(function () {
    if (cuteBot.IR_Button(cuteBot.IRButtons.Up)) {
        cuteBot.forward()
    }
    if (cuteBot.IR_Button(cuteBot.IRButtons.Down)) {
        cuteBot.backforward()
    }
    if (cuteBot.IR_Button(cuteBot.IRButtons.Left)) {
        cuteBot.turnleft()
    }
    if (cuteBot.IR_Button(cuteBot.IRButtons.Right)) {
        cuteBot.turnright()
    }
    if (cuteBot.IR_Button(cuteBot.IRButtons.OK)) {
        cuteBot.stopcar()
    }
})
basic.showIcon(IconNames.Heart)
