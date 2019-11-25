import {Entity, Game} from "../game.js"
import {Get, Has} from "./com_index.js"

export interface PlayerControl {
    readonly Move: boolean
    readonly useWSAD: boolean
}

export function player_control(Move: boolean, useWSAD: boolean) {
    return (game: Game, entity: Entity) => {
        game.World[entity] |= Has.PlayerControl
        game[Get.PlayerControl][entity] = <PlayerControl>{
            Move,
            useWSAD,
        }
    }
}
