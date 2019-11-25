import {Animate} from "./com_animate"
import {Ball} from "./com_ball"
import {Camera} from "./com_camera"
import {Collide} from "./com_collide"
import {Draw} from "./com_draw"
import {Light} from "./com_light"
import {Move} from "./com_move"
import {Named} from "./com_named"
import {PlayerControl} from "./com_player_control"
import {Render} from "./com_render"
import {RigidBody} from "./com_rigid_body"
import {Transform} from "./com_transform"
import {Trigger} from "./com_trigger"

export const enum Get {
    Animate,
    Camera,
    Collide,
    Draw,
    Light,
    Move,
    Named,
    PlayerControl,
    Render,
    RigidBody,
    Transform,
    Trigger,
    Ball,
}

export interface ComponentData {
    [Get.Animate]: Array<Animate>
    [Get.Camera]: Array<Camera>
    [Get.Collide]: Array<Collide>
    [Get.Draw]: Array<Draw>
    [Get.Light]: Array<Light>
    [Get.Move]: Array<Move>
    [Get.Named]: Array<Named>
    [Get.PlayerControl]: Array<PlayerControl>
    [Get.Render]: Array<Render>
    [Get.RigidBody]: Array<RigidBody>
    [Get.Transform]: Array<Transform>
    [Get.Trigger]: Array<Trigger>
    [Get.Ball]: Array<Ball>
}

export const enum Has {
    Animate = 1 << Get.Animate,
    Camera = 1 << Get.Camera,
    Collide = 1 << Get.Collide,
    Draw = 1 << Get.Draw,
    Light = 1 << Get.Light,
    Move = 1 << Get.Move,
    Named = 1 << Get.Named,
    PlayerControl = 1 << Get.PlayerControl,
    Render = 1 << Get.Render,
    RigidBody = 1 << Get.RigidBody,
    Transform = 1 << Get.Transform,
    Trigger = 1 << Get.Trigger,
    Ball = 1 << Get.Ball,
}
