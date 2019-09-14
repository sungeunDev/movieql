const ssungnni = {
    name: "Ssungnni",
    age: 18,
    gender: "female"
};

export const people = [
    ssungnni,
    {
        id: 1,
        name: "nicolas",
        age: 40,
        gender: "male"
    },
    {
        id: 2,
        name: "pyl",
        age: 35,
        gender: "male"
    },
    {
        id: 3,
        name: "hee",
        age: 30,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPerson = people.filter(person => id === person.id);
    return filteredPerson[0];
};