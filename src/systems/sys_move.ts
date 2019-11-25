import {Get, Has} from "../components/com_index.js"
import {Entity, Game} from "../game.js"
import {Vec3} from "../math/index.js"
import {get_translation} from "../math/mat4.js"
import {add, normalize, scale, transform_direction, transform_point} from "../math/vec3.js"

const QUERY = Has.Transform | Has.Move

export function sys_move(game: Game, delta: number) {
    for (let i = 0; i < game.World.length; i++) {
        if ((game.World[i] & QUERY) === QUERY) {
            update(game, i, delta)
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let transform = game[Get.Transform][entity]
    let move = game[Get.Move][entity]

    if (move.Directions.length) {
        let direction = move.Directions.reduce(add_directions)
        let world_position = get_translation([0, 0, 0], transform.World)

        // Transform the movement vector into a direction in the world space.
        let world_direction = transform_direction([0, 0, 0], direction, transform.World)
        normalize(world_direction, world_direction)

        // Scale by the distance travelled in this tick.
        scale(world_direction, world_direction, move.MoveSpeed * delta)
        let new_position = add([0, 0, 0], world_position, world_direction)
        // add(new_position, new_position, transform.Translation)

        if (transform.Parent) {
            // Transform the movement vector into a point in the local space.
            transform_point(new_position, new_position, transform.Parent.Self)
        }
        transform.Translation = new_position
        transform.Dirty = true
        move.Directions = []
    }
}

function add_directions(acc: Vec3, cur: Vec3) {
    return add(acc, acc, cur)
}
