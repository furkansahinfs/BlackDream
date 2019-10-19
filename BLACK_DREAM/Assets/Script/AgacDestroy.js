function OnTriggerEnter (other : Collider){
if(other.gameObject.name == "Agac(Clone)")
{
Destroy(other.gameObject);
}
}

