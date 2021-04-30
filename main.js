let object = {
    nom: "tresor",
    prenom: "alain",
    age: 24,
    taille: "187cm"
}
console.log(object.age)

let object2 = {
    nom: "pepe",
    prenom: "the meme",
    age: 100,
    taille: "24cm"
}
let object3 = {}

object3.nom = object.nom
object3.prenom = object.prenom
object3.age = object2.age
object3.taille = "50cm"

console.log(object3);