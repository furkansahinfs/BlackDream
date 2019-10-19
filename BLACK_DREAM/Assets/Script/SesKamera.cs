using UnityEngine;
using System.Collections;

public class SesKamera : MonoBehaviour {
public GameObject kamera;
void Start () 
{
string musicOnOff = PlayerPrefs.GetString("MUSIC");
audio.loop = true;        
if (musicOnOff == "OFF") 
			AudioListener.pause = true;
		
		else 
			AudioListener.pause = false;

Debug.Log (PlayerPrefs.GetString ("MUSIC"), gameObject);	
}
}

