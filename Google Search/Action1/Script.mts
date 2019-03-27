
SystemUtil.Run "http://google.com"

Browser("Google").Page("Google").WebEdit("Search").Set "foulk consulting"
Browser("Google").Page("Google").WebButton("Google Search").Click
Browser("Google").Page("foulk consulting - Google").Link("FoulkConsulting.com –").Click
Browser("Google").Page("FoulkConsulting.com –").Sync @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Google").Close

