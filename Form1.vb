Public Class Form1
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        MsgBox("The WebHook Triggered a Jenkins Build")
        Close()
    End Sub
End Class
