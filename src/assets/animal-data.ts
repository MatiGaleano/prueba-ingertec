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
        description: 'El panda rojo o panda menor es una especie de mamífero omnívoro de la familia Ailuridae, aunque se había clasificado dentro de las familias de los prociónidos y de los úrsidos.',
        views: 50        
    },
    {
        id: 2,
        name: 'Suricata',
        image: 'assets/images/suricata.jpg',
        description: 'La suricata​​​​​​​ es una especie de mamífero carnívoro de la familia Herpestidae que habita la región del desierto de Kalahari y el Namib en África.',
        views: 45        
    },
    {
        id: 3,
        name: 'Koala',
        image: 'assets/images/koala.jpg',
        description: 'El koala es una especie de marsupial diprotodonto de la familia Phascolarctidae, endémico de Australia. Es el único representante existente de la familia Phascolarctidae y sus parientes vivos más cercanos son los wombats.',
        views: 60        
    },
    {
        id: 4,
        name: 'Foca',
        image: 'assets/images/foca.jpg',
        description: 'Los fócidos o focas verdaderas son una familia de mamíferos pinnípedos adaptados a vivir en medios acuáticos la mayor parte del tiempo. El nombre común deriva directamente del latín phoca, que a su vez tiene su origen en el griego φώκη. Se conocen 33 especies.',
        views: 75        
    },
    {
        id: 5,
        name: 'Pingüino',
        image: 'assets/images/pinguino.jpg',
        description: 'Los pingüinos son una familia de aves, la única del orden Sphenisciformes. Son aves marinas, no voladoras, que se distribuían casi exclusivamente en el hemisferio sur, exceptuando el pingüino de las islas Galápagos.',
        views: 15        
    }
]