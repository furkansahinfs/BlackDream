var kapat : GUISkin;

function OnGUI()
{
GUI.skin = kapat;
if(GUI.Button (Rect (Screen.width*0.485f,Screen.height*0.47f,Screen.width*0.07f,Screen.height*0.13f), "")){
Application.Quit();
}
}




