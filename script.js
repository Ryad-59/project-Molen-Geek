const in1 = document.querySelector(".in1");
const in2 = document.querySelector(".in2");
const btn = document.querySelector(".btn");
const resultat = document.querySelector("#resultat");

const updateDisplay = () => {
    const maintenant = new Date();

    if (in1.value.trim() !== "" && in2.value.trim() !== "") {
        // Si les inputs sont remplis : dans une heure
        const dansUneHeure = new Date(maintenant.getTime() + 60 * 60 * 1000);
        resultat.innerHTML = `
            <p><strong>Tâche:</strong> ${in1.value}</p>
            <p><strong>Obligation:</strong> ${in2.value}</p>
            <p><strong>Horaire:</strong> Dans une heure (${dansUneHeure.toLocaleTimeString()})</p>
        `;
    } else {
        // Sinon l'inverse : maintenant
        resultat.innerHTML = `
            <p>Veuillez remplir les champs !</p>
            <p><strong>Horaire actuel:</strong> ${maintenant.toLocaleTimeString()}</p>
        `;
    }
};

btn.addEventListener("click", updateDisplay);