import {Entity, Game} from "../game.js"
import {Vec3} from "../math/index.js"
import {Get, Has} from "./com_index.js"

export interface Ball {
    Direction: Vec3
}

export function ball(initDirection: Vec3) {
    return (game: Game, entity: Entity) => {
        game.World[entity] |= Has.Ball
        game[Get.Ball][entity] = <Ball>{
            Direction: initDirection,
        }
    }
}
