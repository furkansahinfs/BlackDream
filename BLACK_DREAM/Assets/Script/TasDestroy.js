﻿function OnTriggerEnter (other : Collider){
if(other.gameObject.name == "Tas(Clone)")
{
Destroy(gameObject);
}
}
