function OnTriggerEnter (other : Collider){
if(other.gameObject.name == "AltinDestroy")
{
Destroy(this.gameObject);
}
}

