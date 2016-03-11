var myArray=["901","308","901","309","508","209","902","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","000","096","097","098","099"];
var alu;
var pc;
var i=0,rdata,output,input;


function loadMemory()
{
var i=0;

for(i=0;i<100;i++)
{
data=myArray[i];
dataID="a"+i;
document.getElementById(dataID).innerHTML=data;
}
i=0

}


function getDataInp()
{
var a=document.getElementById("memCell").value;
var b=document.getElementById("data").value;
document.getElementById("a"+a).innerHTML=b;

}

function runCPU()
{
alu=0;
pc=0;


setTimeout("mainRunCpu()",10);
}

function mainRunCpu()
{
document.getElementById("a"+i).bgColor="white";
document.getElementById("pc").value=pc;
rdata=document.getElementById("a"+pc).innerHTML;
document.getElementById("rdata").value=rdata;
document.getElementById("a"+pc).bgColor="red";
var insCode=rdata.charAt(0);
var memCode=rdata.charAt(1)+rdata.charAt(2);
var memNum=parseInt(memCode);
i=pc;

switch (insCode)
{
    case "1":
		alu=alu+parseInt(document.getElementById("a"+memNum).innerHTML);
		pc++;
        break;
		
    case "2":
        alu=alu-parseInt(document.getElementById("a"+memNum).innerHTML);
		pc++;
        break;
		
	case "3":
	    document.getElementById("a"+memNum).innerHTML=alu+"";
		pc++;
        break;

	case "5":
        alu=parseInt(document.getElementById("a"+memNum).innerHTML);
		pc++;
        break;
		
    case "6":
        pc=memNum;
        break;	
		
	case "7":
	    if(alu==0)
		{pc=memNum;}
		else
		{pc++;}
        break;
		
    case "8":
        if(alu>=0)
		{pc=memNum;}
		else
		{pc++;}
        break;	
		
	case "9":
	    if(memNum==1)
		{alu=parseInt(window.prompt("Inter value......","000"));}
		else if(memNum==2)
		{window.alert("Output is:"+alu);}
		pc++;
        break;
   
    default:
	window.alert(insCode+" is not a valid command.....system closed....");
	pc=111;

}
document.getElementById("alu").value=alu;
if (pc<100)
{setTimeout("mainRunCpu()",1000);}
else 
{window.alert("Last: ins code "+insCode+" mem code "+memNum);}


}

