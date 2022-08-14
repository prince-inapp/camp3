#!C:\ProgramData\Anaconda3\python.exe

import os
import sys
import cgi
import cgitb
import html
try:
    import msvcrt
    msvcrt.setmode(0,os.O_BINARY)
    msvcrt.setmode(1,os.O_BINARY)
except ImportError:
    print("<p>No msvcrt module found<p>")


# interpretors
# 'office' : '#!C:\Users\Prince Johnson\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\python.exe',
# 'home' : '#!C:\ProgramData\Anaconda3\python.exe'


print("Content-type: text/html\n\n")

cgitb.enable()
form = cgi.FieldStorage()
name = form.getvalue('name')

mail = form.getvalue('email')
password = form.getvalue('password')
emotions  = form.getlist('emotions')
satisfaction = form.getvalue('satisfied')
if(form.getvalue('comment')):
    comments = form.getvalue('comment')
else:
    comments = "No comments"
photo = form['bio-photo']

if photo.filename:
    photo_data = photo.file.read()
    file_name = os.path.basename(photo.filename)
    with open ('files/'+file_name, 'wb') as f:
        f.write(photo_data)
        msg = True
else:
    msg = False

location = form.getvalue('location')

print("""<html>
<head>
<link type="text/css" rel="stylesheet" href="css/style.css"/>
<title>Your Profile</title>
</head>
<body>
<div class="container">
""")
if(msg):
    print('''<img src="files/{}" alt="{}" width="200" height="200">'''.format(file_name, file_name))
else:
    print("<p>No Bio-Pic</p>")
print("<p>Name: %s</p>" % name)
print("<p>Email: %s</p>" % mail)
print("<p>Password: %s</p>" % password)
print("<p> Emotions are:</p><ul>")
for i in emotions:
    print("<li>%s</li>" % i)
print("</ul><p>Level of Satisfaction: %s</p>" % satisfaction)
print("<p>Comments: %s</p>" % comments)
print("<p>Location: %s</p>" % location)


print('''</div></body>
</html>''')




