static var score : float=0;
var highscore : float=0;
var newStyle : GUIStyle;
var karakter : GameObject;

function Start(){
score=0;
}
function Update(){
score += 10* Time.deltaTime;
newStyle.fontSize=(Screen.width+Screen.height)/50;
Level();
PlayerPrefs.SetInt("Skor",score);
PlayerPrefs.GetInt("Skor");
PlayerPrefs.Save();
highscore=PlayerPrefs.GetInt("HighScore");
if(score>highscore){
highscore = score;
PlayerPrefs.SetInt("HighScore", highscore);
PlayerPrefs.GetInt("HighScore");
PlayerPrefs.Save();
}
}


function Level(){
if(score>=100)
{
karakter.GetComponent(Animator).speed=1.1f;
}
if(score>=200)
{
karakter.GetComponent(Animator).speed=1.2f;
}
if(score>=300)
{
karakter.GetComponent(Animator).speed=1.3f;
}
if(score>=400)
{
karakter.GetComponent(Animator).speed=1.4f;
}
if(score>=500)
{
karakter.GetComponent(Animator).speed=1.5f;
}
if(score>=600)
{
karakter.GetComponent(Animator).speed=1.6f;
}
if(score>=700)
{
karakter.GetComponent(Animator).speed=1.7f;
}
if(score>=800)
{
karakter.GetComponent(Animator).speed=1.8f;
}
if(score>=900)
{
karakter.GetComponent(Animator).speed=1.9f;
}
if(score>=1000)
{
karakter.GetComponent(Animator).speed=2f;
}
if(score>=1250)
{
karakter.GetComponent(Animator).speed=2.05f;
}
if(score>=1500)
{
karakter.GetComponent(Animator).speed=2.1f;
}
if(score>=1700)
{
karakter.GetComponent(Animator).speed=2.15f;
}
}

function OnGUI()
{
GUI.Label(Rect (Screen.width*0.42f,Screen.height*0.475f,Screen.width*0.15f,Screen.height*0.08f),score.ToString("F0") +" M",newStyle);
}





