' start visual studio project exe
SystemUtil.Run "C:\Users\Doug\Documents\GitHub\Visual-Studio\bin\Debug\VS Integration with GIT.exe"

' get label text
sLabelText = SwfWindow("VS Integration with GIT").SwfLabel("The Label").GetROProperty("text")

' this just brings the app to the foreground for demo purposes
SwfWindow("VS Integration with GIT").SwfLabel("The Label").Click
Wait 2

' validate the label text
If sLabelText = "VS ---> GIT ---> Jenkins ---> Octane" Then
	Reporter.ReportEvent micPass, "Verify Label", "Label text is: '" & sLabelText & "'"
Else
	Reporter.ReportEvent micFail, "Verify Label", "Label text is: '" & sLabelText & "'"
End If

' close application
SwfWindow("VS Integration with GIT").SwfButton("Close").Click @@ hightlight id_;_4264430_;_script infofile_;_ZIP::ssf2.xml_;_
 @@ hightlight id_;_3674694_;_script infofile_;_ZIP::ssf1.xml_;_

