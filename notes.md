### Chapter 4: Components for Mobile
* Text component most basic, can't do things like `Hello <strong>cat</strong>` but you can make re-usable style components so that your text inputs look this
```
const Strong = ({children}) => {
  <Text style={{fontStyle: "bold"}}>
    {children}
  </Text>
}

<View>
  <Text>
    Hello <Strong>Cat</Cat>
  </Text>
</View>
```
* Use `<TouchableHighlight>` component to provide basic feedback and indicate an element is touchable
* Use `PanResponser` system to implement custom touch interface, use raw `GestureResponser` system for finest control
* Use organizational components like `<ListView>`, `<TabView>`, `<NavigatorView>` to build more complex interfaces
* Use Platform-specific components like `<SwitchIOS>` and `<SwitchAndroid>` for platform-specific components. Let's say you want to include a `<Switch>` component. Build two versions of `<Switch>` using `<SwitchIOS>` and `<SwitchAndroid>` and save them in `switch.ios.js` and `switch.android.js` respectively in the same directory. React Native will pick the right one base on what platform the code is running
* Read Apple and Google HCI guidelines for designing appropriate UI/UX for platform-specific components
