<%
' Prevent caching
Response.Expires = -1

' Array of names
Dim a(30)
a(1) = "Anna"
a(2) = "Brittany"
a(3) = "Cinderella"
a(4) = "Diana"
a(5) = "Eva"
a(6) = "Fiona"
a(7) = "Gunda"
a(8) = "Hege"
a(9) = "Inga"
a(10) = "Johanna"
a(11) = "Kitty"
a(12) = "Linda"
a(13) = "Nina"
a(14) = "Ophelia"
a(15) = "Petunia"
a(16) = "Amanda"
a(17) = "Raquel"
a(18) = "Cindy"
a(19) = "Doris"
a(20) = "Eve"
a(21) = "Evita"
a(22) = "Sunniva"
a(23) = "Tove"
a(24) = "Unni"
a(25) = "Violet"
a(26) = "Liza"
a(27) = "Elizabeth"
a(28) = "Ellen"
a(29) = "Wenche"
a(30) = "Vicky"

' Get the query parameter
Dim q
q = UCase(Request.QueryString("q"))

' Search for matches
Dim hint
hint = ""
If Len(q) > 0 Then
    For i = 1 To 30
        If q = UCase(Mid(a(i), 1, Len(q))) Then
            If hint = "" Then
                hint = a(i)
            Else
                hint = hint & " , " & a(i)
            End If
        End If
    Next
End If

' Output result
If hint = "" Then
    Response.Write("No suggestion")
Else
    Response.Write("<div>" & Replace(hint, " , ", "</div><div>") & "</div>")
End If
%>
