function OnTriggerEnter (other : Collider){
if(other.gameObject.name == "Altin")
{
Destroy(this.gameObject);
}
}

