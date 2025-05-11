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
function addNewCard() {
  // Créer une nouvelle carte
  const card = document.getElementById("joe1");
  const sel = document.getElementById("methode").selectedIndex;
  if (sel == 1) {
    card.innerHTML = `
        <pre>
def conv2(x,b):
l=len(x)-1
if x=="":
  return 0
else:
if x[l].isdecimal():
  return b*conv2(x[:l],b)+int(x[l])
else:
  return b*conv2(x[:l],b)+(ord(x[l])-55)
        </pre>
      </div>
    `;
  } else {
    card.innerHTML = `
          <pre>
def conv10(x, b):
s = 0
for i in range(len(x)):
    if x[i].isdecimal():
        s = b * s + int(x[i])
    else:
        s = b * s + ord(x[i]) - 55
return s</pre
    >
  </div>
            `;
  }

  // Contenu de la carte
}
