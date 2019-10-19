var market : GameObject;

function Start(){
yield WaitForSeconds(1);
market.GetComponent(Canvas).enabled=true;
yield WaitForSeconds(8);
Application.LoadLevel("Start");
}




