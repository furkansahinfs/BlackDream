var speed : float;
var rend: Renderer;
function Start () {
speed = 0.16f;
rend = GetComponent.<Renderer>();
}

function Update () {
if(speed<=1.9f){
			speed += 0.008f* Time.deltaTime;
		}
		if(speed>=1.9f){
			speed=1.9f;
		}
		var offset : float = Time.timeSinceLevelLoad * speed;
	rend.material.SetTextureOffset("_MainTex", Vector2(offset,0));
}