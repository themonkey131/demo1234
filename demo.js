function Cal(a,b)
{
	if(document.getElementById("list").value == "cong")
	{
		return a+b;
	}
	
	if(document.getElementById("list").value == "tru")
	{
		return a-b;
	}
	
	if(document.getElementById("list").value == "nhan")
	{
		return a*b;
	}
	
	if(document.getElementById("list").value == "chia")
	{
		return a/b;
	}
}

function Hienthi()
{
	document.getElementById("kq").value = Cal(parseFloat(document.getElementById("so1").value), parseFloat(document.getElementById("so2").value))
}