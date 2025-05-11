document.addEventListener("DOMContentLoaded", () => {
  // Définition des données de chaque fonction
  const data = {
    js: [
      {
        name: "alert()",
        description: "Affiche une boîte de dialogue avec un message.",
        syntax: "alert(message);",
        example: 'alert("Bonjour, monde !");',
      },
      {
        name: "console.log()",
        description: "Envoie un message à la console de débogage.",
        syntax: "console.log(valeur);",
        example: 'console.log("Âge :", age);',
      },
      {
        name: "document.getElementById()",
        description: "Sélectionne un élément HTML par son id.",
        syntax: 'document.getElementById("monId");',
        example:
          'document.getElementById("titre").innerText = "Nouveau titre";',
      },
      {
        name: "addEventListener()",
        description: "Attache un gestionnaire d'événement à un élément.",
        syntax: "element.addEventListener(event, fonction);",
        example: 'btn.addEventListener("click", () => alert("Cliqué !"));',
      },
      {
        name: "verifAlpha()",
        description: "Vérifie qu’une chaîne ne contient que des lettres.",
        syntax: "function verifAlpha(str) { return /^[A-Za-z]+$/.test(str); }",
        example: 'verifAlpha("Test"); // true',
      },
      {
        name: "verifAlphaNum()",
        description:
          "Vérifie qu’une chaîne ne contient que des caractères alphanumériques.",
        syntax:
          "function verifAlphaNum(str) { return /^[A-Za-z0-9]+$/.test(str); }",
        example: 'verifAlphaNum("User123"); // true',
      },
    ],
    sql: [
      {
        name: "SELECT ... FROM ...",
        description: "Récupère des données dans une table.",
        syntax: "SELECT colonnes FROM table [WHERE condition];",
        example: "SELECT nom, note FROM etudiants WHERE note >= 10;",
      },
      {
        name: "INSERT INTO",
        description: "Ajoute de nouvelles lignes dans une table.",
        syntax: "INSERT INTO table (col1, col2) VALUES (val1, val2);",
        example: 'INSERT INTO etudiants (nom, age) VALUES ("Sara", 17);',
      },
      {
        name: "UPDATE ... SET ... WHERE",
        description: "Modifie des données existantes.",
        syntax: "UPDATE table SET col = val WHERE condition;",
        example: "UPDATE etudiants SET note = 12 WHERE id = 5;",
      },
      {
        name: "DELETE FROM ... WHERE",
        description: "Supprime des lignes.",
        syntax: "DELETE FROM table WHERE condition;",
        example: "DELETE FROM etudiants WHERE age < 16;",
      },
      {
        name: "COUNT(), SUM(), AVG()",
        description:
          "Fonctions d'agrégation pour compter, sommer, calculer la moyenne.",
        syntax: "SELECT COUNT(col), SUM(col), AVG(col) FROM table;",
        example: "SELECT AVG(note) AS moyenne FROM etudiants;",
      },
    ],
    php: [
      {
        name: "echo / print",
        description: "Affiche du texte/HTML dans la page.",
        syntax: 'echo "Bonjour"; or print "OK";',
        example: 'echo "<h1>Bienvenue</h1>";',
      },
      {
        name: "isset()",
        description: "Vérifie si une variable existe.",
        syntax: "isset($var)",
        example: 'if (isset($_POST["nom"])) { echo $_POST["nom"]; }',
      },
      {
        name: "array_merge() / count()",
        description: "Fusionne des tableaux / compte les éléments.",
        syntax: "array_merge($a, $b); count($array);",
        example: "$tab = array_merge([1,2], [3,4]); echo count($tab); // 4",
      },
      {
        name: "date()",
        description: "Formate la date/heure courante.",
        syntax: "date(format);",
        example: 'echo date("Y-m-d H:i:s");',
      },
      {
        name: "mysqli_connect() / mysqli_query()",
        description: "Se connecter à une base MySQL et exécuter une requête.",
        syntax:
          "$conn = mysqli_connect(host, user, pass, db); mysqli_query($conn, query);",
        example: '$result = mysqli_query($conn, "SELECT nom FROM etudiants");',
      },
    ],
  };

  // Fonction de création de carte
  function createCard(func, lang) {
    const div = document.createElement("div");
    div.className = "fiche";
    div.dataset.language = lang;
    div.innerHTML = `
        <h3>${func.name}</h3>
        <p><strong>Description :</strong> ${func.description}</p>
        <pre><code>${func.syntax}</code></pre>
        <p><strong>Ex :</strong> <code>${func.example}</code></p>
      `;
    return div;
  }

  // Remplissage des sections
  Object.entries(data).forEach(([lang, funcs]) => {
    const container = document.querySelector(`#${lang} .fiches-container`);
    funcs.forEach((f) => container.appendChild(createCard(f, lang)));
  });

  // Modal
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.getElementById("close-modal");
  document.querySelectorAll(".fiche").forEach((fiche) => {
    fiche.addEventListener("click", () => {
      modalBody.innerHTML = fiche.innerHTML;
      modal.classList.remove("hidden");
    });
  });
  closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  // Recherche
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    document.querySelectorAll(".fiche").forEach((card) => {
      const text = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = text.includes(term) ? "" : "none";
    });
  });
});
