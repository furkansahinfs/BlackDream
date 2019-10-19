var kamera : GameObject;
var karakter : GameObject;
var altin : GameObject;
var altindestroy: GameObject;
function OnTriggerEnter (other : Collider){
if(other.gameObject.name == "Minion")
{
Debug.Log("GameOver");
Time.timeScale=0;
kamera.GetComponent(OyunBitti).enabled=true;
kamera.GetComponent(Skor).enabled=false;
kamera.GetComponent(Pil).enabled=false;
karakter.GetComponent(KarakterYer).enabled=false;
altin.GetComponent(AltinScript).enabled=false;
altindestroy.GetComponent(BoxCollider).enabled=true;

}
}

