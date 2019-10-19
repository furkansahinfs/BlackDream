var reset : GUISkin;
var isikObjesi : GameObject;
var skorObjesi : GameObject;

function OnGUI()
{
GUI.skin = reset;
if(GUI.Button (Rect (Screen.width*0.475f,Screen.height*0.46f,Screen.width*0.07f,Screen.height*0.12f), "")){
(isikObjesi.GetComponent(IsikDestroy)as IsikDestroy).pil=0;
(skorObjesi.GetComponent(Skor)as Skor).score=0;
Application.LoadLevel("Oyun");
Time.timeScale=1;
}
}

