/**
 * Compte épargne
 */
class CompteEpargne extends Compte{
    /**
     * Création du compte
     * @param {Titulaire} titulaire Titulaire du compte
     * @param {number} montant Montant de départ
     * @param {number} taux Taux d'intérêts
     * @param {number} rythme Rythme de versement des intérêts (en millisecondes)
     */
    
    #taux;
    constructor(titulaire, montant = 50, rythme = 1000){
        super(titulaire, montant);
        this.#taux = 0.08;
        this.rythme = rythme;

        // Intérêts de taux toutes les "rythme" millisecondes (0.5% toutes les 5 secondes)
        setInterval(() => {
            this.solde *= 1+this.#taux;
        }, this.rythme);
    }

    // puisque taux est privée, on ne peut  plus y accéder qu'avec un getter !!! 
    getTaux=()=>this.#taux
        
}