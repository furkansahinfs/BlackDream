function OnTriggerEnter (other : Collider){
if(other.gameObject.name == "Odun(Clone)")
{
Destroy(gameObject);
}
}

