
static var pil:float=1000;
static var pilHizCarpani :int;
var pilartma : int;
static var artmabool : boolean=false;
var pilses : AudioClip;
var ust : GameObject;
var alt : GameObject;
var canvasaltin : GameObject;
var kamera : GameObject;

function Start(){
pilHizCarpani=PlayerPrefs.GetInt("PilHiz");
if(pilHizCarpani==0){
pilHizCarpani=6;
}
}
function Update(){
pil += pilHizCarpani* Time.deltaTime; 
if(pil<0){
pil=0; 
}
if(pil>=1000){
pil=1000; 
}
if(pil<=973){
ust.GetComponent(TutorialPil).enabled=false;
alt.GetComponent(TutorialPil).enabled=false;
Market();
}
pilartma= pilHizCarpani;
PlayerPrefs.SetFloat("Pil",pil);
PlayerPrefs.GetFloat("Pil");
PlayerPrefs.Save();
}

function OnTriggerEnter(other:Collider){
if(other.gameObject.name == "Minion"&&artmabool==false){
artmabool=true;
if(other.gameObject.name == "Minion" && artmabool==true){
Destroy(gameObject);
pil-=25;
artmabool = false;
AudioSource.PlayClipAtPoint(pilses, transform.position); 
}
Update();
}
}

function Market(){
yield WaitForSeconds(1);
Application.LoadLevel("Market");
}
