export interface Game {
    id: string;
    board: Board;
    players: Player[];
    idPlayer: null;
    round: Round;
}

export interface Board {
    boardId: string;
    cardsInGame: CardsInGame;
    principalMallet: PrincipalMallet[];
}


export interface CardsInGame {

}
export interface CardInGame {
    playerId: string;
    card: PrincipalMallet;
    viewed: Boolean

}

export interface hola {
    boardId?: string;
    cardsInGame?: { [key: string]: Card };
    principalMallet?: PrincipalMallet[];
}

export interface PrincipalMallet {
    cardId: string;
    nameOfCard: string;
    features: string;
    urlImage: string;
    power: number;
}

export interface Player {
    playerId: string;
    name: string,
    email: string;
    globalScore: number;
    localScore: number;
    cards: Card[];
}

export interface Card {
    card: PrincipalMallet;
    viewed: boolean;
}

export interface Round {
    number: number;
    time: string;
}

