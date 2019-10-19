function OnTriggerEnter (other : Collider){
if(other.gameObject.name == "Keskin(Clone)")
{
Destroy(other.gameObject);
}
}

