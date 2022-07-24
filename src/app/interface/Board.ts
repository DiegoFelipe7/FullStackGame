import { Card } from "./Card"
import { CardsInGame } from "./CaridGame"

export interface Board {
    boardId: string
    cardsInGame: CardsInGame,
    principalMallet: Card[],


}


