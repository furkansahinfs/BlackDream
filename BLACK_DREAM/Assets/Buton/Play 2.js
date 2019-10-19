var play : GUISkin;
var tutorialOnOff : String;

function OnGUI()
{
GUI.skin = play;
if(GUI.Button (Rect (Screen.width*0.41f,Screen.height*0.4625f,Screen.width*0.08f,Screen.height*0.15f), "")){
if(PlayerPrefs.GetInt("TOFF")==1){
Application.LoadLevel("Oyun");
Time.timeScale=1;
}
else {
Application.LoadLevel("Tutorial");
}
}
}






