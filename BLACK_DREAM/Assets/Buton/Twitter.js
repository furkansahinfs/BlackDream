var customSkin: GUISkin;
function OnGUI() {
GUI.skin = customSkin;
    if (GUI.Button (Rect (Screen.width*0.515f,Screen.height*0.7375,Screen.width*0.065f,Screen.height*0.14f), ""))
       {
Application.OpenURL("https://twitter.com/onalti_gen");
}
}


