
global.Ip1={

    IP:"http://218.13.52.169",
    PORT:":8080",
    PROJECTNAME:"/gps/",

}
global.CONTENT={

    CONTENT : Ip1.IP+Ip1.PORT+Ip1.PROJECTNAME,
}
global.INTERFANCE={
    LOGIN:CONTENT.CONTENT+"login/info",
}