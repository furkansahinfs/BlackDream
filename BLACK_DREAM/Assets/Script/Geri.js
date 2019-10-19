var skor : float;

function Update(){
skor += 10* Time.deltaTime;
if (skor<=100){
transform.Translate(Vector3.back * 1 * Time.deltaTime);
}
else if (skor<=200){
transform.Translate(Vector3.back * 2 * Time.deltaTime);
}
else if (skor<=300){
transform.Translate(Vector3.back* 3 * Time.deltaTime);
}
else if (skor<=400){
transform.Translate(Vector3.back * 4 * Time.deltaTime);
}
else if (skor<=500){
transform.Translate(Vector3.back * 5 * Time.deltaTime);
}
else if (skor<=600){
transform.Translate(Vector3.back * 5.5 * Time.deltaTime);
}
else if (skor<=700){
transform.Translate(Vector3.back * 6 * Time.deltaTime);
}
else if (skor<=800){
transform.Translate(Vector3.back * 6.5 * Time.deltaTime);
}
else if (skor<=900){
transform.Translate(Vector3.back * 7 * Time.deltaTime);
}
else if (skor<=1000){
transform.Translate(Vector3.back * 7.5 * Time.deltaTime);
}
else if (skor<=1250){
transform.Translate(Vector3.back * 8 * Time.deltaTime);
}
else if (skor<=1500){
transform.Translate(Vector3.back * 8.5 * Time.deltaTime);
}
else if (skor<=1700){
transform.Translate(Vector3.back * 9 * Time.deltaTime);
}
else if (skor<=1800){
transform.Translate(Vector3.back * 9.5 * Time.deltaTime);
}
else if (skor<=1900){
transform.Translate(Vector3.back * 10* Time.deltaTime);
}
else if (skor<=2000){
transform.Translate(Vector3.back * 10.5 * Time.deltaTime);
}
else if (skor<=10000000){
transform.Translate(Vector3.back * 11 * Time.deltaTime);
}
}

