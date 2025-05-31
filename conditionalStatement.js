function launchBrowser(browser)
{
if(browser="chrome")
{
console.log("The browser is chrome");
}
else if(browser="firefox")
{
console.log("The browser is firefox");
}
else if (browser="edge")
{
console.log("The browser is edge");
}
}



function runTests(type)
{
switch(type){
    case "regression" :
    {
        console.log("Test type is regression");
        break;
    }
    case "sanity" :
        {
            console.log("Test type is sanity");
            break;
        }
    case "smoke" :
        
    {
        console.log("Test type is smoke");
        break;
    }
}
}
let browser;
launchBrowser("chrome");
let type = "smoke";
runTests(type);
