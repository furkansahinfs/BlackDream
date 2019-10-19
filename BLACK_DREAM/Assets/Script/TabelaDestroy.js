function OnTriggerEnter (other : Collider){
if(other.gameObject.name == "Tabela(Clone)")
{
Destroy(other.gameObject);
}
}

