@echo off
set src="d:\Depa_Website\College-Department-Website\Administration"
set dest="d:\Depa_Website\College-Department-Website\public\Administration"

if not exist %dest% mkdir %dest%

echo Copying all JPEGs...
copy %src%\*.jpeg %dest%\ /Y

echo Done.
dir %dest%
