@echo off
echo Starting video optimization for Azure deployment...
echo.

REM Create optimized videos directory
if not exist "public\videos\optimized" mkdir "public\videos\optimized"

echo Compressing videos for web deployment...
echo This will reduce file sizes significantly for better Azure performance.
echo.

REM Compress each video file
echo Compressing homepageBG.mp4...
ffmpeg -i "public\videos\homepageBG.mp4" -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart "public\videos\optimized\homepageBG.mp4"

echo Compressing ROAR-exp.mp4...
ffmpeg -i "public\videos\ROAR-exp.mp4" -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart "public\videos\optimized\ROAR-exp.mp4"

echo Compressing BIONIC_homepage.mp4...
ffmpeg -i "public\videos\BIONIC_homepage.mp4" -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart "public\videos\optimized\BIONIC_homepage.mp4"

echo Compressing DEVINT_homepage.mp4...
ffmpeg -i "public\videos\DEVINT_homepage.mp4" -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart "public\videos\optimized\DEVINT_homepage.mp4"

echo Compressing IRIS_homepage.mp4...
ffmpeg -i "public\videos\IRIS_homepage.mp4" -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart "public\videos\optimized\IRIS_homepage.mp4"

echo Compressing Divisions.mp4...
ffmpeg -i "public\videos\Divisions.mp4" -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart "public\videos\optimized\Divisions.mp4"

echo Compressing Bionic.mp4...
ffmpeg -i "public\videos\Bionic.mp4" -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart "public\videos\optimized\Bionic.mp4"

echo Compressing Devint.mp4...
ffmpeg -i "public\videos\Devint.mp4" -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart "public\videos\optimized\Devint.mp4"

echo Compressing Iris.mp4...
ffmpeg -i "public\videos\Iris.mp4" -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart "public\videos\optimized\Iris.mp4"

echo Compressing about.mp4...
ffmpeg -i "public\videos\about.mp4" -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart "public\videos\optimized\about.mp4"

echo Compressing contact.mp4...
ffmpeg -i "public\videos\contact.mp4" -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart "public\videos\optimized\contact.mp4"

echo Compressing framework.mp4...
ffmpeg -i "public\videos\framework.mp4" -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart "public\videos\optimized\framework.mp4"

echo.
echo Video optimization complete!
echo Optimized videos are in: public\videos\optimized\
echo.
echo Next steps:
echo 1. Replace original videos with optimized versions
echo 2. Test the application locally
echo 3. Deploy to Azure Web App
echo.
pause
