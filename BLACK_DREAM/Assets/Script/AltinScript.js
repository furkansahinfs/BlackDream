static var coins : float;
var skor:float;
var isik : GameObject;
var kamera : GameObject;
var karakter : GameObject;
var canvas : GameObject;
var magaza : GUISkin;
var kapat : GUISkin;
var pil1 : GUISkin;
var pil2 : GUISkin;
var pil3 : GUISkin;
var newStyle : GUIStyle;
var newStyleF : GUIStyle;
var itembool : boolean=false;
var pil1bool : boolean=false;
var pil2bool : boolean=false;
var pil3bool : boolean=false;
static var pilHiz : int=6;
var altinses : AudioClip;

function Start(){
coins = PlayerPrefs.GetInt("Altin");
pilHiz = PlayerPrefs.GetInt("PilHiz");
}
function Update(){
PlayerPrefs.SetInt("Altin",coins);
PlayerPrefs.GetInt("Altin");
PlayerPrefs.Save();
PlayerPrefs.SetInt("PilHiz",pilHiz);
PlayerPrefs.Save();
newStyleF.fontSize=(Screen.width+Screen.height)/55;
}


function OnTriggerEnter (other : Collider){
if(other.gameObject.name == "Minion")
{
coins=coins+1;
Destroy(gameObject);
AudioSource.PlayClipAtPoint(altinses, transform.position); 
}
}

function OnGUI()
{

GUI.Label(Rect (Screen.width*-0.01f,Screen.height*-0.015f,Screen.width*0.11f,Screen.height*0.175f),"",newStyle);
GUI.Label(Rect (Screen.width*0.11f,Screen.height*0.056f,Screen.width*0.01f,Screen.height*0.01f),coins.ToString("F0"),newStyleF);

if(kamera.GetComponent(Play).enabled==true){
GUI.skin = magaza;
if(GUI.Button (Rect (Screen.width*0.575f,Screen.height*0.46f,Screen.width*0.075f,Screen.height*0.13f), "")){
Time.timeScale=0;
karakter.GetComponent(KarakterYer).enabled=false;
canvas.GetComponent(Canvas).enabled=true;
kamera.GetComponent(Pause).enabled=false;
kamera.GetComponent(Skor).enabled=false;
kamera.GetComponent(Play).enabled=false;
kamera.GetComponent(Menu).enabled=false;
kamera.GetComponent(Reset).enabled=false;
kamera.GetComponent(Voiceoyun).enabled=false;
itembool = true;
}
}
if(itembool == true){
if(coins>=300){
GUI.skin= pil1;
if(GUI.Button (Rect (Screen.width*0.54f,Screen.height*0.233f,Screen.width*0.12f,Screen.height*0.18f), "")){
coins-=300;
pil1bool=true;
pil2bool=false;
pil3bool=false;
Time.timeScale=1;
(kamera.GetComponent(Skor)as Skor).score=0;
(isik.GetComponent(IsikDestroy) as IsikDestroy).pil=0;
pilHiz=3;
PlayerPrefs.SetInt("PilHiz",pilHiz);
PlayerPrefs.GetInt("PilHiz");
PlayerPrefs.Save();
Application.LoadLevel(Application.loadedLevel);
}
}
if(coins >=500){
GUI.skin= pil2;
if(GUI.Button (Rect (Screen.width*0.54f,Screen.height*0.4f,Screen.width*0.125f,Screen.height*0.19f), "")){
coins-=500;
pil1bool=false;
pil2bool=true;
pil3bool=false;
Time.timeScale=1;
(kamera.GetComponent(Skor) as Skor).score=0;
(isik.GetComponent(IsikDestroy) as IsikDestroy).pil=0;
pilHiz=2;
PlayerPrefs.SetFloat("PilHiz",pilHiz);
PlayerPrefs.GetFloat("PilHiz");
PlayerPrefs.Save();
Application.LoadLevel(Application.loadedLevel);
}
}
if(coins>=1000){
GUI.skin= pil3;
if(GUI.Button (Rect (Screen.width*0.54f,Screen.height*0.58f,Screen.width*0.125f,Screen.height*0.19f), "")){
coins-=1000;
pil1bool=false;
pil2bool=false;
pil3bool=true;
Time.timeScale=1;
(kamera.GetComponent(Skor) as Skor).score=0;
(isik.GetComponent(IsikDestroy) as IsikDestroy).pil=0;
pilHiz=1;
PlayerPrefs.SetFloat("PilHiz",pilHiz);
PlayerPrefs.GetFloat("PilHiz");
PlayerPrefs.Save();
Application.LoadLevel(Application.loadedLevel);
}
}
}
if(itembool==true){
GUI.skin = kapat;
if(GUI.Button (Rect (Screen.width*0.625f,Screen.height*0.095f,Screen.width*0.055f,Screen.height*0.10f), "")){
Time.timeScale=0;
karakter.GetComponent(KarakterYer).enabled=false;
canvas.GetComponent(Canvas).enabled=false;
kamera.GetComponent(Pause).enabled=false;
kamera.GetComponent(Skor).enabled=false;
kamera.GetComponent(Play).enabled=true;
kamera.GetComponent(Menu).enabled=true;
kamera.GetComponent(Reset).enabled=true;
kamera.GetComponent(Voiceoyun).enabled=true;
PlayerPrefs.SetInt("PilHiz",pilHiz);
PlayerPrefs.GetInt("PilHiz");
PlayerPrefs.Save();
itembool = false;
}
}
}





