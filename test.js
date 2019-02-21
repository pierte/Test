function Personne(age, nom , prenom, nick, travail, friends){
    this.age = age;
    this.prenom = prenom;
    this.nom = nom;
    this.nick = nick;
    this.travail = travail;
    this.friends = friends;
    this.addfriend = function(age, nom, prenom, nick, travail){
        this.friends.push(new Personne(age, nom, prenom, nick, travail, friends));
    };
    this.afficher = function(){
        let pAfficher = document.getElementById("prenom");
        let text = "Je m'appelle " + this.nom + " " + this.prenom + ", j'ai " +
        this.age + " ans. On me surnomme " + this.nick + " et je travaille en tant que "
        + this.travail + ".";
        pAfficher.innerText = text;
    };
}
let jean = new Personne(24, "Dupont", "Jean", "Jeannet", "boulanger", []);
jean.addfriend(22, "Kol", "Jack", "Jaquet", "boucher");
jean.afficher();