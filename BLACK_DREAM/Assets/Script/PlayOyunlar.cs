using UnityEngine;
using System.Collections;
using GooglePlayGames;
using GooglePlayGames.BasicApi;
using UnityEngine.SocialPlatforms;


public class PlayOyunlar : MonoBehaviour {

//private string leaderboard = "CgkIrK_91MMKEAIQDA ";
public GUISkin leaderb;
	
public void Start(){
		PlayGamesPlatform.DebugLogEnabled = true;
		PlayGamesPlatform.Activate ();
		Debug.Log ("Login Process ...");
		
		Social.localUser.Authenticate ((bool success) => {
		});
	}
public void OnGUI(){
GUI.skin = leaderb;
if(GUI.Button(new Rect(Screen.width * (2.915f/6.55f),Screen.height * (4.2f/6.3f),Screen.width * (0.6f/6.55f), Screen.height * (1.4f/6.3f)),""))
{
long highScore = PlayerPrefs.GetInt ("HighScore");
Social.ReportScore (highScore, "CgkIrK_91MMKEAIQDA", (bool success) => {
if (success) {
print ("successfully reported");
} 
else {
print ("Error");
}
});
((PlayGamesPlatform)Social.Active).ShowLeaderboardUI("CgkIrK_91MMKEAIQDA");
}
}
}
