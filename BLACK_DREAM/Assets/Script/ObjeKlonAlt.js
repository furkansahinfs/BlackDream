var objecikisi : Transform; 
var tas : GameObject; 
var keskin : GameObject;
var odun : GameObject;
var tabela : GameObject;
var altin : GameObject;
var isik : GameObject;
var skor : float;

var deger : int;

function Start() {
if(skor>= 0 && skor<1000){
deger = Random.Range(1,15);
clone();
}
if(skor>=1000 && skor<1000000000){
deger = Random.Range(15,28);
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
Instantiate (altin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}


else if (deger==9){
Instantiate (tas,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}

else if (deger==11){
Instantiate (odun,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}
else if (deger==12){
Instantiate (tabela,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,3));
Start();
}
else if (deger==13){
Instantiate (odun,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}

else if (deger==14){
Instantiate (tas,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}

else if( deger==15){
Instantiate (tas,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}

else if (deger==16){
Instantiate (keskin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}

else if (deger==17){
Instantiate (altin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}

else if (deger==18){
Instantiate (odun,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}
else if (deger==19){
Instantiate (keskin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}


else if (deger==20){
Instantiate (tas,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}

else if (deger==21){
Instantiate (tabela,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}

else if (deger==22){
Instantiate (altin,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(2);
Start();
}


else if (deger==23){
Instantiate (tas,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}

else if (deger==24){
Instantiate (odun,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}
else if (deger==25){
Instantiate (tabela,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}
else if (deger==26){
Instantiate (odun,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}

else if (deger==27){
Instantiate (tas,objecikisi.transform.position,objecikisi.transform.rotation);
yield WaitForSeconds(Random.Range(1,2));
Start();
}
else{
Start();
}
}
