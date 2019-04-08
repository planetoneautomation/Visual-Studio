' start visual studio project exe
SystemUtil.Run "C:\Users\Doug\Documents\GitHub\Visual-Studio\bin\Debug\VS Integration with GIT.exe"

' get label text
sLabelText = SwfWindow("VS Integration with GIT").SwfLabel("VS ---> GIT ---> Jenkins").GetROProperty("text")

' this just brings the app to the foreground for demo purposes
SwfWindow("VS Integration with GIT").SwfLabel("VS ---> GIT ---> Jenkins").Click
Wait 2

' validate the label text
If sLabelText = "VS ---> GIT ---> Jenkins ---> Octane" Then
	Reporter.ReportEvent micPass, "Verify Label", "Label text is: '" & sLabelText & "'"
Else
	Reporter.ReportEvent micFail, "Verify Label", "Label text is: '" & sLabelText & "'"
End If

' close application
SwfWindow("VS Integration with GIT").SwfButton("Close").Click
