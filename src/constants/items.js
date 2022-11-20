let countPrice = (max) => {
    return Math.floor(Math.random() * max)
}

const items = [
    {
        id: 1,
        category: 'cabin',
        country: 'USA',
        openSpots: 2,
        review: 4.9,
        numberOfReviews: 152,
        price: countPrice(1567),
        unit: 'person',
    },
    {
        id: 2,
        category: 'house',
        country: 'CANADA',
        openSpots: 0,
        review: 4.7,
        numberOfReviews: 142,
        price: countPrice(976),
        unit: 'room',
    },
    {
        id: 3,
        category: 'room',
        country: 'JAPAN',
        openSpots: 6,
        review: 4.4,
        numberOfReviews: 12,
        price: countPrice(876),
        unit: 'person',
    }
]

export default items