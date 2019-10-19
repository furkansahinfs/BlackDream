var play : GUISkin;
var kamera : GameObject;
var karakter : GameObject;

function OnGUI()
{
GUI.skin = play;
if(GUI.Button (Rect (Screen.width*0.375f,Screen.height*0.4575f,Screen.width*0.07f,Screen.height*0.1225f), "")){
karakter.GetComponent(KarakterYer).enabled=true;
kamera.GetComponent(Pause).enabled=true;
kamera.GetComponent(Skor).enabled=true;
kamera.GetComponent(Play).enabled=false;
kamera.GetComponent(Menu).enabled=false;
kamera.GetComponent(Reset).enabled=false;
kamera.GetComponent(Voiceoyun).enabled=false;
Time.timeScale=1;
}
}



