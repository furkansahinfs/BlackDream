var skor : int;
var coins : float;
var highscore :float;
var isikObjesi : GameObject;
var karakter : GameObject;
var altin : GameObject;
var skorObjesi : GameObject;
var newStyle : GUIStyle;
var newStyle2 : GUIStyle;
var newStylescore : GUIStyle;
var newStylecoins : GUIStyle;
var newStylecoinsbgr : GUIStyle;
var reset : GUISkin;
var menu : GUISkin;

function Start(){
skorObjesi.GetComponent(Pause).enabled=false;
skor = PlayerPrefs.GetInt("Skor");
coins = PlayerPrefs.GetInt("Altin");
highscore = PlayerPrefs.GetInt("HighScore");
newStyle.fontSize=(Screen.width+Screen.height)/43;
newStylecoins.fontSize=(Screen.width+Screen.height)/40;
newStylescore.fontSize=(Screen.width+Screen.height)/50;
}

function OnGUI()
{
GUI.Label(Rect (Screen.width*0.305f,Screen.height*0.155f,Screen.width*0.4f,Screen.height*0.7f),"",newStyle2);
GUI.Label(Rect (Screen.width*0.38f,Screen.height*0.20f,Screen.width*0.60f,Screen.height*0.60f),"COINS",newStylecoins);
GUI.Label(Rect (Screen.width*0.38f,Screen.height*0.275f,Screen.width*0.60f,Screen.height*0.60f),"= " + coins.ToString("F0"),newStylescore);
GUI.Label(Rect (Screen.width*0.38f,Screen.height*0.35f,Screen.width*0.60f,Screen.height*0.60f),"METER",newStylecoins);
GUI.Label(Rect (Screen.width*0.38f,Screen.height*0.425f,Screen.width*0.60f,Screen.height*0.60f),"= " + skor.ToString("F0"),newStylescore);
GUI.Label(Rect (Screen.width*0.38f,Screen.height*0.5f,Screen.width*0.60f,Screen.height*0.60f),"BEST",newStylecoins);
GUI.Label(Rect (Screen.width*0.38f,Screen.height*0.575f,Screen.width*0.60f,Screen.height*0.60f),"= " +highscore.ToString("F0"),newStylescore);

GUI.skin=reset;
if(GUI.Button (Rect (Screen.width*0.415f,Screen.height*0.67f,Screen.width*0.08f,Screen.height*0.14f), "")){
Time.timeScale=1;
(isikObjesi.GetComponent(IsikDestroy) as IsikDestroy).pil=0;
(skorObjesi.GetComponent(Skor) as Skor).score=0;
skorObjesi.GetComponent(Pause).enabled=true;
altin.GetComponent(AltinScript).enabled=true;
Application.LoadLevel("ReklamR");
}
GUI.skin = menu;
if(GUI.Button (Rect (Screen.width*0.495f,Screen.height*0.67f,Screen.width*0.085f,Screen.height*0.145f), "")){
karakter.GetComponent(KarakterYer).enabled=true;
(skorObjesi.GetComponent(Skor) as Skor).score=0;
(isikObjesi.GetComponent(IsikDestroy) as IsikDestroy).pil=0;
Application.LoadLevel("Menu");
}
}






