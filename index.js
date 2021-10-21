document.addEventListener('DOMContentLoaded', function () {
    let fruits = ["Fraise", "Pomme", "Orange", "Poire"]

    // 1 - Ajouter "Framboise" à la fin du tableau et "Ananas" au début du tableau
    //     Afficher le resultat dans la console
    fruits.push('Framboise');
    fruits.unshift('Ananas');
    console.log(fruits);

    // 2 - Trouve l'index de "Orange" dans le tableau
    //     Afficher le resultat dans la console
    console.log(fruits.indexOf('Orange'));

    // 3 - Trouve si oui ou non "Poire" est dans le tableau
    //     Afficher le resultat dans la console
    console.log(fruits.includes('Poire'));

    // 4 - Return un tableau filtré par les valeurs qui contiennent au moins un "a"
    //     Afficher le resultat dans la console
    const result = fruits.filter(fruit => fruit.includes('a'));
    console.log(result);

    // 5 - Parcourir le tableau pour trouver la valeur qui a la plus grande longueur
    //     Afficher le resultat dans la console
    fruits.sort((a, b) => b.length - a.length)
    console.log(fruits[0]);
    // j'aurai pu itérer dans le tableau...


    // 6 - Retirer "Pomme" du tableau
    //     Afficher le resultat dans la console
    fruits.splice(2, 1)
    console.log(fruits);


    let persons = [
        {

            id: '6124c290e788efa315a2b714',
            firstname: 'Billy',
            lastname: 'Morningman',
            age: 28,
            job: 'Serrurier',
            city: 'Roubaix'

        },
        {

            id: '609ea3f88d7e1de79edc1b92',
            firstname: 'Willy',
            lastname: 'Dixon',
            age: 35,
            job: 'Avocat',
            city: 'Lomme'

        },
        {

            id: '6124c290e788efa315a2b714',
            firstname: 'Benjamin',
            lastname: 'Franklin',
            age: 315,
            job: 'Père Fondateur',
            city: 'New York'

        },
    ]

    // 7 - Récupérér le troisième objet dans le tableau persons et le stocker dans la variable "let person"
    //     Trouve si l'objet récupéré contient la propriété birthdate
    //     Afficher le resultat dans la console

    let person = persons[2]
    console.log(person.birthdate ? person.birthdate : person);


    // 8 - Return un tableau des id à partir du tableau d'objet persons
    //     Afficher le resultat dans la console
    console.log(persons.map(person => person.id));

    // 9 - Return l'index de la propriété age dans l'objet person
    //     Afficher le resultat dans la console
    let arr = []
    for (let i in person) {
        arr.push(i);
    }
    console.log(arr.findIndex(props => props === 'age'));

    // j' ai pas trouvé mieux, il doit y avoir un moyen sans faire passer l'objet person en tableau mais il est tard !!

    // 10 - Trier le tableau persons dans l'ordre alphabétique de la clé firstname
    //     Afficher le resultat dans la console
    console.log(persons.sort((a, b) => a.firstname.localeCompare(b.firstname)));
})