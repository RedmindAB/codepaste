import {
  NavigationActions,
  NavigationContainerComponent
} from 'react-navigation'

let _navigator: NavigationContainerComponent

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
  _navigator = navigatorRef
}

function navigate(routeName: string, params = {}) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

function goBack() {
  _navigator.dispatch(NavigationActions.back())
}

export const getActiveRouteName = navigationState => {
  if (!navigationState) return null
  const route = navigationState.routes[navigationState.index]
  if (route.routes) return getActiveRouteName(route)

  return route.routeName
}

export default {
  navigate,
  goBack,
  setTopLevelNavigator
}
