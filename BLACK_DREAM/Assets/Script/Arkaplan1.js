var speed : float;
var rend: Renderer;
function Start () {
speed = 0.3f;
rend = GetComponent.<Renderer>();
}

function Update () {
if(speed<=1.5f){
			speed += 0.01f* Time.deltaTime;
		}
if(speed>=1.5f){
			speed=1.5f;
		}
		var offset : float = Time.timeSinceLevelLoad * speed;
	rend.material.SetTextureOffset("_MainTex", Vector2(offset,0));
}