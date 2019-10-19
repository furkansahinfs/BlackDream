var pil:float;
var onflash : GameObject;
var arkaflash : GameObject;
var dlight : GameObject;
var cube : GameObject;
var newStyle : GUIStyle;
var newStyle1 : GUIStyle;
var newStyle2 : GUIStyle;
var newStyle3 : GUIStyle;
var newStyle4 : GUIStyle;
var newStyle5 : GUIStyle;
var lightl : Light;

function Start(){
lightl = dlight.GetComponent(Light);
}

function Update(){
pil = PlayerPrefs.GetFloat("Pil");
}

function OnGUI(){
if(pil>=1000)
{
GUI.Label(Rect (Screen.width*0.85f,Screen.height*0f,Screen.width*0.15f,Screen.height*0.12f),"",newStyle5);
lightl.intensity=0.2f;
onflash.GetComponent(MeshRenderer).enabled=false;
arkaflash.GetComponent(MeshRenderer).enabled=false;
cube.SetActive (false);
}
if(pil>=750&&pil<=999)
{
GUI.Label(Rect (Screen.width*0.85f,Screen.height*0f,Screen.width*0.15f,Screen.height*0.12f),"",newStyle4);
lightl.intensity=0.6f;
onflash.GetComponent(MeshRenderer).enabled=true;
arkaflash.GetComponent(MeshRenderer).enabled=true;
cube.SetActive (true);
}
if(pil>=500&&pil<=749)
{
GUI.Label(Rect (Screen.width*0.85f,Screen.height*0f,Screen.width*0.15f,Screen.height*0.12f),"",newStyle3);
lightl.intensity=0.6f;
onflash.GetComponent(MeshRenderer).enabled=true;
arkaflash.GetComponent(MeshRenderer).enabled=true;
cube.SetActive (true);
}
if(pil>=250&&pil<=499)
{
GUI.Label(Rect (Screen.width*0.85f,Screen.height*0f,Screen.width*0.15f,Screen.height*0.12f),"",newStyle2);
lightl.intensity=0.6f;
onflash.GetComponent(MeshRenderer).enabled=true;
arkaflash.GetComponent(MeshRenderer).enabled=true;
cube.SetActive (true);
}
if(pil>=0&&pil<=249)
{
GUI.Label(Rect (Screen.width*0.85f,Screen.height*0f,Screen.width*0.15f,Screen.height*0.12f),"",newStyle1);
lightl.intensity=0.6f;
onflash.GetComponent(MeshRenderer).enabled=true;
arkaflash.GetComponent(MeshRenderer).enabled=true;
cube.SetActive (true);
}
}



