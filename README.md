# **Product-Insert-Module App**

- Install Expo CLI with npm i -g expo-cli
- Install Node dependencies with npm i
- Run the app with npm start

## **Dependencies**

You will need Node (v12.18.3) and NPM (v6.14.6) installed.
Other versions may work, but try switching to these exact versions if you run into issues.

## **Technologies Used**

- [Expo](https://expo.io/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)

You should familiarise yourself with these technologies to understand what they contribute to the overall solution and how best to overcome future issues. If in doubt, please read the documentation.

## **Debugging**

For day-to-day development and debugging, you will want to...

- [Install XCode (for iOS Simulator)](https://docs.expo.io/workflow/ios-simulator/?redirected)
- [Install Android Studio (for Android Studio)](https://docs.expo.io/workflow/android-studio-emulator/?redirected)
- [Install React Native Debugger](https://docs.expo.io/workflow/debugging/?redirected)
- You can also debug live on your iOS or Android phone using the [Expo App](https://docs.expo.io/versions/v36.0.0/get-started/installation/#2-mobile-app-expo-client-for-ios).

React Native Debugger is extremely useful as it includes Chrome DevTools, React DevTools and Redux DevTools. Just be aware that you need to be running on port 19001 (cmd+T), and right-click to Enable Network Inspect.

Read the documentation carefully as it contains lots of useful tips and tricks to boost efficiency and avoid issues.    

## **Troubleshooting**

Sometimes the app content may cache unbearably during development, even regressing to an older version of the app. To clear the cache, try the following (one at a time, until the problem is resolved)...

Run expo start -c.
Quit and restart React Native Debugger.
Switch to publish mode in the Metro Bundler browser tab, refresh, switch back and refresh again.
In iOS Simulator, go to Hardware > Erase All Content and Settings...
Additionally, you may find a daily restart of your workstation beneficial.
