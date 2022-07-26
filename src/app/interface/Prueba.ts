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
    email: string;
    globalScore: number | null;
    localScore: number | null;
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

