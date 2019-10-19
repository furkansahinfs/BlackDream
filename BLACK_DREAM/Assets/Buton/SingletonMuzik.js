private static var obje : SingletonMuzik = null;
 function Awake()
{
    if( obje == null )
    {
        obje = this;
        DontDestroyOnLoad(this);
    }
    else if( this != obje )
    {
        Destroy( gameObject );
    }
}
