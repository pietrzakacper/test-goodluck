import {Get, Has} from "../components/com_index.js"
import {Entity, Game} from "../game.js"

const QUERY = Has.Move | Has.PlayerControl

export function sys_control_player(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) === QUERY) {
            update(game, i, delta)
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let control = game[Get.PlayerControl][entity]

    if (control.Move) {
        let move = game[Get.Move][entity]

        if (control.useWSAD) {
            if (game.InputState.KeyW) {
                move.Directions.push([0, 0, 1])
            }
            if (game.InputState.KeyS) {
                move.Directions.push([0, 0, -1])
            }
        } else {
            if (game.InputState.ArrowUp) {
                move.Directions.push([0, 0, 1])
            }
            if (game.InputState.ArrowDown) {
                move.Directions.push([0, 0, -1])
            }
        }
    }
}
