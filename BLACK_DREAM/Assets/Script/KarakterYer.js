var hareket : Transform;
var altbool:boolean=false;
var customSkin: GUISkin;
var kses : AudioClip;

function OnGUI () {
GUI.skin = customSkin;
if(GUI.Button (Rect (Screen.width*0.0f,Screen.height*0.0f,Screen.width*1f,Screen.height*0.87f), "")){
altbool=!altbool;
AudioSource.PlayClipAtPoint(kses, transform.position); 
}
if(altbool==true){
hareket.position = Vector3(-0.15, -0.31,-2);
hareket.Rotate(0,0,180f);
}
if(altbool==false){
hareket.position = Vector3(-0.15,0.13,-2);
hareket.Rotate(0,0,0);
}
}


