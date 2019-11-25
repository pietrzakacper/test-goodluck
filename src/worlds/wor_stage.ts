import {ball} from "../components/com_ball.js";
import {camera} from "../components/com_camera.js";
import {collide} from "../components/com_collide.js";
import {light} from "../components/com_light.js";
import {move} from "../components/com_move.js";
import {player_control} from "../components/com_player_control.js";
import {render_shaded} from "../components/com_render_shaded.js";
import {Game} from "../game.js";
import {Mat} from "../materials/mat_index.js";
import {Cube} from "../shapes/Cube.js";
import {Icosphere} from "../shapes/Icosphere.js";

export function world_stage(game: Game) {
    game.World = [];
    game.Cameras = [];
    game.Lights = [];
    game.GL.clearColor(1, 0.3, 0.3, 1);

    // Camera
    game.Add({
        Translation: [0, 7, 13],
        Rotation: [0, 1, -0.4, 0],
        Children: [
            {
                Rotation: [0, 1, 0, 0],
                Using: [camera(game.ViewportWidth / game.ViewportHeight, 1, 0.1, 1000)],
            },
        ],
    });

    // Light
    game.Add({
        Translation: [0, 5, 0],
        Using: [light([1, 1, 1], 9)],
    });

    // Ground
    game.Add({
        Translation: [0, -2, 0],
        Scale: [20, 1, 16],
        Using: [
            render_shaded(game.Materials[Mat.Gouraud], Cube, [0.8, 0.8, 0.8, 1]),
            collide(false),
        ],
    });

    // Back wall
    game.Add({
        Translation: [0, -1, -8],
        Scale: [20, 1, 1],
        Using: [
            render_shaded(game.Materials[Mat.Gouraud], Cube, [0.8, 0.8, 0.8, 1]),
            collide(false),
        ],
    });

    // Front wall
    game.Add({
        Translation: [0, -1, 8],
        Scale: [20, 1, 1],
        Using: [
            render_shaded(game.Materials[Mat.Gouraud], Cube, [0.8, 0.8, 0.8, 1]),
            collide(false),
        ],
    });

    // Left racket
    game.Add({
        Translation: [-10, -1, 0],
        Scale: [1, 1, 3],
        Using: [
            render_shaded(game.Materials[Mat.Flat], Cube, [1, 1, 1, 1]),
            player_control(true, true),
            move(-5, 0),
            collide(true),
        ],
    });

    // Right racket
    game.Add({
        Translation: [10, -1, 0],
        Scale: [1, 1, 3],
        Using: [
            render_shaded(game.Materials[Mat.Flat], Cube, [1, 1, 1, 1]),
            player_control(true, false),
            move(-5, 0),
            collide(true),
        ],
    });

    // Ball
    game.Add({
        Translation: [0, -1, 0],
        Using: [
            render_shaded(game.Materials[Mat.Gouraud], Icosphere, [1, 1, 0.3, 1]),
            collide(true),
            move(8, 0),
            ball([
                (Math.random() * 0.5 + 0.5) * (Math.random() < 0.5 ? 1 : -1),
                0,
                (Math.random() * 0.2 + 0.5) * (Math.random() < 0.5 ? 1 : -1),
            ]),
        ],
    });
}
