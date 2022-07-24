import { Card } from "./Card"

export interface Players {
    playerId: string;
    email: string;
    globalScore: number | null;
    localScore: number | null;
    cards: Card[];
}