export interface Animal {
    id: number,
    name: string,
    image: string,
    description: string,
    views: number
}

export const AnimalData: Animal[] = [
    {
        id: 1,
        name: 'Panda Rojo',
        image: 'assets/images/panda.jpg',
        description: 'El panda rojo o panda menor es una especie de mamífero omnívoro de la familia Ailuridae.',
        views: 50        
    },
    {
        id: 2,
        name: 'Suricata',
        image: 'assets/images/suricata.jpg',
        description: 'La suricata​​​​​​​ es una especie de mamífero carnívoro de la familia Herpestidae.',
        views: 45        
    },
    {
        id: 3,
        name: 'Koala',
        image: 'assets/images/koala.jpg',
        description: 'El koala es una especie de marsupial diprotodonto de la familia Phascolarctidae.',
        views: 60        
    },
    {
        id: 4,
        name: 'Foca',
        image: 'assets/images/foca.jpg',
        description: 'Los fócidos o focas verdaderas son una familia de mamíferos pinnípedos.',
        views: 75        
    },
    {
        id: 5,
        name: 'Pingüino',
        image: 'assets/images/pinguino.jpg',
        description: 'Los pingüinos son una familia de aves, la única del orden Sphenisciformes.',
        views: 15        
    }
]