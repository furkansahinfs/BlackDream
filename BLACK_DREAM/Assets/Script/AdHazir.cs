using UnityEngine;
using System.Collections;
using UnityEngine.Advertisements;

public class AdHazir: MonoBehaviour 
{
	[SerializeField] string gameID = "71613";
	void Awake()
	{
		Advertisement.Initialize (gameID, true);
	}
	
	void AdCallbackhandler (ShowResult result)
	{
		switch(result)
		{
		case ShowResult.Finished:
			Debug.Log ("Ad Finished. Rewarding player...");
			Application.LoadLevel("Oyun");
			break;
		case ShowResult.Skipped:
			Debug.Log ("Ad skipped. Son, I am dissapointed in you");
			Application.LoadLevel("Oyun");
			break;
		case ShowResult.Failed:
			Debug.Log("I swear this has never happened to me before");
			Application.LoadLevel("Oyun");
			break;
		}
	}
	
	IEnumerator WaitForAd()
	{
		float currentTimeScale = Time.timeScale;
		Time.timeScale = 0f;
		yield return null;
		
		while (Advertisement.isShowing)
			yield return null;
		
		Time.timeScale = currentTimeScale;
	}
}