export interface ObservableClient {
    all: Client[]
}

export interface Client {
    name: string;
    lastName: string;
    age: string;
    dateBorn: string;
    possibleDateOfDeath: string
}