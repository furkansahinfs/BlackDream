var objecikisi : Transform; 
var tas : GameObject; 
var keskin : GameObject;
var odun : GameObject;
var agac : GameObject;
var tabela : GameObject;
var kopek : GameObject;
var altin : GameObject;
var isik : GameObject;
var skor : float;

var deger : int;

function Start() {
if(skor>= 0 && skor<1000){
deger = Random.Range(1,18);
clone();
}
if(skor>=1000 && skor<1000000000){
deger = Random.Range(18,35);
clone();
}
}

function Update(){
skor = PlayerPrefs.GetInt("Skor");
}
function clone () {
if( deger==1){
Instantiate (tas,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}

else if (deger==2){
Instantiate (keskin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}

else if (deger==3){
Instantiate (altin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}

else if (deger==4){
Instantiate (odun,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}
else if (deger==5){
Instantiate (isik,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}


else if (deger==6){
Instantiate (tas,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}

else if (deger==7){
Instantiate (tabela,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}

else if (deger==8){
Instantiate (keskin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}

else if (deger==9){
Instantiate (altin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}

else if (deger==10){
Instantiate (kopek,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(2,4));
Start();
}

else if (deger==11){
Instantiate (agac,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}

else if (deger==12){
Instantiate (tas,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}

else if (deger==13){
Instantiate (odun,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}
else if (deger==14){
Instantiate (tabela,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}
else if (deger==15){
Instantiate (keskin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}

else if (deger==16){
Instantiate (kopek,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(2,4));
Start();
}

else if (deger==17){
Instantiate (altin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(1);
Start();
}

else if( deger==18){
Instantiate (tas,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}

else if (deger==19){
Instantiate (keskin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}

else if (deger==20){
Instantiate (altin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}

else if (deger==21){
Instantiate (odun,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}
else if (deger==22){
Instantiate (keskin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}


else if (deger==23){
Instantiate (tas,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}

else if (deger==24){
Instantiate (tabela,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}

else if (deger==25){
Instantiate (keskin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}

else if (deger==26){
Instantiate (altin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(1);
Start();
}

else if (deger==27){
Instantiate (kopek,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}

else if (deger==28){
Instantiate (agac,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}

else if (deger==29){
Instantiate (tas,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}

else if (deger==30){
Instantiate (odun,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}
else if (deger==31){
Instantiate (tabela,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}
else if (deger==32){
Instantiate (isik,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}

else if (deger==33){
Instantiate (kopek,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}

else if (deger==34){
Instantiate (altin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}
else{
Start();
}
}
