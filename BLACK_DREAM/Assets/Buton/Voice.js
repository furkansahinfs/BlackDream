var voice:GUISkin;
var locked : boolean=false;


function OnGUI(){
GUI.skin = voice;
if(GUI.Button (Rect (Screen.width*0.935f,Screen.height*0.87f,Screen.width*0.08,Screen.height*0.13f),"")){
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




