static var pil:float=0;
static var pilHizCarpani :int;
var pilartma : int;
var altin : GameObject;
static var artmabool : boolean=false;
var pilses : AudioClip;

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


