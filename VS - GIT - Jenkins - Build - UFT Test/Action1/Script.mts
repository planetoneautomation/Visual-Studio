' start visual studio project exe
SystemUtil.Run "C:\Users\Doug\Documents\GitHub\Visual-Studio\bin\Debug\VS Integration with GIT.exe"

' verify label text
sLabelText = SwfWindow("VS Integration with GIT").SwfLabel("VS ---> GIT ---> Jenkins").GetROProperty("text")

If sLabelText = "VS ---> GIT ---> Jenkins" Then
	Reporter.ReportEvent micPass, "Verify Label", "Label text is: '" & sLabelText & "'"
Else
	Reporter.ReportEvent micFail, "Verify Label", "Label text is: '" & sLabelText & "'"
End If

' close app
SwfWindow("VS Integration with GIT").SwfButton("Close").Click @@ hightlight id_;_4264430_;_script infofile_;_ZIP::ssf2.xml_;_
 @@ hightlight id_;_3674694_;_script infofile_;_ZIP::ssf1.xml_;_

