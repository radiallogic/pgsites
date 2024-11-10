export enum rating {
    pilot,
    cp,
    ap,
}

export type Site = {
    id: number,
    windDegStart: number,
    windDegEnd: number
    name: string,
    rating: rating
    location: string
}

export type AutoCompleteOption = {
    label: string, 
    value: string|number
  }