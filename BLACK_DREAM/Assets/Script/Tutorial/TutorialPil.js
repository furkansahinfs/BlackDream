var objecikisi : Transform;
var isik : GameObject;
function Start(){
klon();
}
function klon () {
Instantiate (isik,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(5);
Start();
}