function OnTriggerEnter (other : Collider){
if(other.gameObject.name == "YokEt")
{
Destroy(gameObject);
}
}

