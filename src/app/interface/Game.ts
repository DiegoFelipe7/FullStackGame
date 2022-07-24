import { Board } from "./Board";
import { Players } from "./Players";
import { Round } from "./Round";

export interface Game {
    id: string,
    board: Board,
    players: Players[],
    idPlayer: null,
    round: Round,
}
