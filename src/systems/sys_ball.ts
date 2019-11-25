import {Get, Has} from "../components/com_index.js"
import {Entity, Game} from "../game.js"

const QUERY = Has.Move | Has.Ball | Has.Transform | Has.Collide

let firstRun = true

export function sys_ball(game: Game, delta: number) {
    if (firstRun) {
        firstRun = false
        return
    }

    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) === QUERY) {
            update(game, i, delta)
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let ball = game[Get.Ball][entity]
    let move = game[Get.Move][entity]
    let collide = game[Get.Collide][entity]

    if (collide.Collisions.length) {
        if (collide.Collisions[0].Hit[0] != 0) {
            ball.Direction[0] *= -1
            move.MoveSpeed *= 1.1
        }

        if (collide.Collisions[0].Hit[2] != 0) {
            ball.Direction[2] *= -1
        }
    }

    move.Directions.push([ball.Direction[0], 0, ball.Direction[2]])
}
