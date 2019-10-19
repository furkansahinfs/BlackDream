var menu : GUISkin;
var kamera : GameObject;
var karakter : GameObject;
var isik  : GameObject;

function OnGUI()
{
GUI.skin = menu;
if(GUI.Button (Rect (Screen.width*0.275f,Screen.height*0.46f,Screen.width*0.07f,Screen.height*0.12f), "")){
karakter.GetComponent(KarakterYer).enabled=true;
(kamera.GetComponent(Skor) as Skor).score=0;
isik.GetComponent(IsikDestroy).pil=0;
Application.LoadLevel("Menu");
}
}

