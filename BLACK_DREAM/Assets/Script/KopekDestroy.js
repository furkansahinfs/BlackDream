function OnTriggerEnter (other : Collider){
if(other.gameObject.name == "Kopek(Clone)")
{
Destroy(other.gameObject);
}
}

