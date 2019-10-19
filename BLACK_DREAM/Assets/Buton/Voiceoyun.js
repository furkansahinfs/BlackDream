var voice:GUISkin;
var locked : boolean=false;


function OnGUI(){
GUI.skin = voice;
if(GUI.Button (Rect (Screen.width*0.675f,Screen.height*0.4585f,Screen.width*0.07f,Screen.height*0.12f),"")){
	if (!locked) {
		AudioListener.pause =  ! AudioListener.pause;
		var musicOnOff = PlayerPrefs.GetString("MUSIC");
		if (musicOnOff == "OFF")
			PlayerPrefs.SetString("MUSIC", "ON");
		else
			PlayerPrefs.SetString("MUSIC", "OFF");
}
}
}




