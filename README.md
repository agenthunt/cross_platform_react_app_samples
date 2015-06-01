#CROSS PLATFORM REACT APP SAMPLES

This repo is a collection of cross platform react application samples. The goal is to have a one step build for packaging to different platforms. It uses electron for desktops ( windows, linux, osx ) and react-native for ios and android (not available yet).  It uses npm scripts for building, developing and packaging. 


##Usage
* Navigate to any sub folder in the repo.
* Run the command
	* npm install
* Dev workflow for  desktops
	* Run the command  npm run dev:electron 
	* Open project in any editor and make changes. It will livereload
* Dev workflow for ios,  open *.xcodeproj under platforms/ios. 
	* Run the project
	* Make changes to src/ui/ios/index.ios.js
	* Cmd+R on the ios simulator
	* or Enable Livereload by pressing Cmd+Ctrl+Z on simulator and click Enable Livereload
* Packaging for osx
	* npm run package:osx
	* <ProjectName>.app dir will be created under the project/dist directory.
* Packaging for linux
    * npm run package:linux
    * \<ProjectName\>-linux dir will be created under the project/dist directory.
* Packaging for windows
    * npm run package:windows
    * \<ProjectName\>-win32 dir will be created under the project/dist directory.
