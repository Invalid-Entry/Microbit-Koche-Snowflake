input.onButtonPressed(Button.A, function () {
    curvy(3)
})
function firstorder () {
    basic.showNumber(0)
    go_forth(500)
    basic.showNumber(1)
    turn(200, true)
    basic.showNumber(2)
    go_forth(500)
    basic.showNumber(3)
    turn(600, false)
    go_forth(500)
    basic.showNumber(4)
    turn(200, true)
    basic.showNumber(5)
    go_forth(500)
    basic.showIcon(IconNames.Yes)
}
function sleepy () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.pause(200)
}
function go_forth (ms: number) {
    speed = 10
    pins.servoWritePin(AnalogPin.P1, 90 - speed)
    pins.servoWritePin(AnalogPin.P2, 90 + speed)
    basic.pause(ms)
    sleepy()
}
function turn (ms: number, left: boolean) {
    if (left) {
        speed = 5
    } else {
        speed = -10
    }
    pins.servoWritePin(AnalogPin.P1, 90 + speed)
    pins.servoWritePin(AnalogPin.P2, 90 + speed)
    basic.pause(ms)
    sleepy()
}
function curvy (num: number) {
    if (num - 1 == 1) {
        firstorder()
    } else {
        curvy(num - 1)
        turn(200, true)
        curvy(num - 1)
        turn(600, false)
        curvy(num - 1)
        turn(200, true)
        curvy(num - 1)
    }
    basic.showIcon(IconNames.Heart)
}
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
let speed = 0
basic.showIcon(IconNames.Happy)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
