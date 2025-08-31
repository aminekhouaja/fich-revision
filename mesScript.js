function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
function verif() {
  const sel = document.getElementById("methode").selectedIndex;
  if (sel == 0) {
    openModal("algo1");
  } else {
    openModal("algok");
  }
}
function verif2() {
  const ind = document.getElementById("methode_aff").selectedIndex;
  sel = document.getElementById("methode_aff").options[ind].value;
  openModal(sel);
}
function changeX() {
  const sel = document.getElementById("methode_rec").selectedIndex;
  if (sel == 0) {
    document.getElementById("progX").innerHTML = "x=a+pas/2";
    document.getElementById("algoXX").innerHTML = "x ← a + pas / 2";
    document.getElementById("nomf").innerHTML = "millieu";
    document.getElementById("nomg").innerHTML = "millieu";
  } else if (sel == 1) {
    document.getElementById("progX").innerHTML = "x=a";
    document.getElementById("algoXX").innerHTML = "x ← a";
    document.getElementById("nomf").innerHTML = "gauche";
    document.getElementById("nomg").innerHTML = "gauche";
  } else {
    document.getElementById("progX").innerHTML = "x=a+pas";
    document.getElementById("algoXX").innerHTML = "x ← a + pas";
    document.getElementById("nomf").innerHTML = "droite";
    document.getElementById("nomg").innerHTML = "droite";
  }
}
function changecard() {
  // Créer une nouvelle carte
  const card = document.getElementById("grrrr");
  const sel = document.getElementById("methode_aff").selectedIndex;
  if (sel == 1) {
    card.innerHTML = `
        <pre>
$req= "SELECT Section, count(*) as 'Nbre d élèves'
FROM elevee
Group BY Section";
$res = mysqli_query($cx, $req);
echo "<i class="nomf">&lt;ul&gt;</i>";
while( $T =<i class="nomf"> mysqli_fetch_array($res)</i>){
  echo <i class="nomg">
    "&lt;li&gt;".$T["Section"]." ".$T[1]."&lt;/li&gt"</i>;
}
echo"<i class="nomf">&lt;/ul&gt;</i>";
        </pre>

    `;
  } else if (sel == 2) {
    card.innerHTML = `
        <pre>
$req= "SELECT Section, count(*) as 'Nbre d élèves'
FROM elevee
Group BY Section";
$res = mysqli_query($cx, $req);
echo "<i class="nomf">&lt;select&gt;</i>";
while( $T =<i class="nomf"> mysqli_fetch_array($res)</i>){
  echo <i class="nomg">
    "&lt;option value='".$T[1]."'&gt;".$T["Section"]."&lt;/option&gt"</i>;
}
echo"<i class="nomf">&lt;/select&gt;</i>";
        </pre>

    `;
  } else {
    card.innerHTML = `
            <pre>
$req= "SELECT Section, count(*) as 'Nbre d élèves'
FROM elevee
Group BY Section";
$res = mysqli_query($cx, $req);
echo "<i class="nomf">&lt;table border='2'&gt;</i><i class="nomg">
&lt;tr&gt;
&lt;th&gt;Section&lt;/th&gt;
&lt;th&gt;Nombre d'élèves Inscrit&lt;/th&gt;
&lt;/tr&gt;</i>";
while( $T =<i class="nomf"> mysqli_fetch_array($res)</i>){
  echo "<i class="nomg">
  &lt;tr&gt;
    &lt;td&gt;".$T["Section"]."&lt;/td&gt;
    &lt;td&gt;".$T[1]."&lt;/td&gt;
  &lt;/tr&gt;"</i>;
}
echo"<i class="nomf">&lt;/table&gt</i>";
        </pre>`;
  }

  // Contenu de la carte
}

function addNewCard() {
  // Créer une nouvelle carte
  const card = document.getElementById("joe1");
  const sel = document.getElementById("methode").selectedIndex;
  if (sel == 1) {
    card.innerHTML = `
        <pre>
def conv2(ch,b):
l=len(ch)-1
if ch=="":
  return 0
else:
  if ch[l].isdecimal():
    return b*conv2(ch[:l],b)+int(ch[l])
  else:
    return b*conv2(ch[:l],b)+(ord(ch[l])-55)
        </pre>
      </div>
    `;
  } else {
    card.innerHTML = `
          <pre>
def conv10(ch, b):
s = 0
for i in range(len(ch)):
    if ch[i].isdecimal():
        s = b * s + int(ch[i])
    else:
        s = b * s + ord(ch[i]) - 55
return s</pre
    >
  </div>
            `;
  }

  // Contenu de la carte
}
function verifmdp(ch) {
  test1 = false;
  test2 = false;
  test3 = false;
  i = 0;
  while ((!test1 || !test2 || !test3) && i < ch.length) {
    if (!(ch[i] > "9" || "0" > ch[i])) {
      test1 = true;
    } else if (caractere(ch[i]) && ch[i].toLowerCase() == ch[i]) {
      test2 = true;
    } else if (caractere(ch[i]) && ch[i].toUpperCase() == ch[i]) {
      test3 = true;
    }
    i++;
  }
  return test1 && test2 && test3;
}
function caractere(car) {
  return !(car.toUpperCase() < "A" || car.toUpperCase() > "Z");
}
function recherche() {
  search = document.getElementById("searchInp").value;
  cards = document.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "block";
  }
  if (search == "") {
    for (i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
  } else {
    for (i = 0; i < cards.length; i++) {
      text = cards[i].textContent.toLowerCase();
      if (text.indexOf(search.toLowerCase()) == -1) {
        cards[i].style.display = "none";
      }
    }
  }
}
