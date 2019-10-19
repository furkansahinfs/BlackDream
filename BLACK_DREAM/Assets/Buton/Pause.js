var pause : GUISkin;
var kamera : GameObject;
var karakter : GameObject;
function OnGUI()
{
GUI.skin = pause;
if(GUI.Button (Rect (Screen.width*0.01f,Screen.height*0.875f,Screen.width*0.07f,Screen.height*0.12f), "")){
karakter.GetComponent(KarakterYer).enabled=false;
kamera.GetComponent(Pause).enabled=false;
kamera.GetComponent(Skor).enabled=false;
kamera.GetComponent(Play).enabled=true;
kamera.GetComponent(Menu).enabled=true;
kamera.GetComponent(Reset).enabled=true;
kamera.GetComponent(Voiceoyun).enabled=true;
Time.timeScale=0f;
}
}




