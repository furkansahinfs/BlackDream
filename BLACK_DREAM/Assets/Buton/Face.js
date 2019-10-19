var customSkin: GUISkin;
function OnGUI() {
GUI.skin = customSkin;
    if (GUI.Button (Rect (Screen.width*0.405f,Screen.height*0.7425,Screen.width*0.065f,Screen.height*0.12f), ""))
       {
Application.OpenURL("https://www.facebook.com/onaltigen");
}
}


