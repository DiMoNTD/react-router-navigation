/* @flow */
/* eslint no-use-before-define: 0 */

import type { ContextRouter } from 'react-router'
import type {
  NavigationTransitionProps,
  NavigationTransitionSpec,
} from 'react-navigation/src/TypeDefinition'

export type Route = {
  key: string,
  routeName: string,
}

export type NavigationState<OwnRoute> = {
  index: number, // $FlowFixMe
  routes: Array<Route & OwnRoute>,
}

export type RouteProps = {
  component?: ReactClass<ContextRouter>,
  render?: (props: ContextRouter) => React$Element<any>,
  children?: (props: ContextRouter) => React$Element<any>,
  path: string,
  exact?: boolean,
  strict?: boolean,
  state?: Object,
}

/**
 * Style
 */

export type Styles = {[key: string]: Object};
export type StyleSheet = Styles | Array<Styles>;

/**
 * Navigation
 */

export type NavBarProps = {
  // General
  hideNavBar?: boolean,
  renderNavBar?: (props: CardSubViewProps) => React$Element<any>,
  navBarStyle?: StyleSheet,
  // Left button
  hideBackButton?: boolean,
  backButtonTintColor?: string,
  backButtonTitle?: string,
  renderLeftButton?: (props: CardSubViewProps) => React$Element<any>,
  // Title
  title?: string,
  titleStyle?: StyleSheet,
  renderTitle?: (props: CardSubViewProps) => React$Element<any>,
  // Right button
  renderRightButton?: (props: CardSubViewProps) => React$Element<any>,
}

export type NavigationProps = NavBarProps & {
  cardStyle?: StyleSheet,
  configureTransition?: (
    transitionProps: NavigationTransitionProps,
    prevTransitionProps: ?NavigationTransitionProps,
  ) => NavigationTransitionSpec,
  onTransitionStart?: Function,
  onTransitionEnd?: Function,
}

export type CardProps = RouteProps & NavBarProps

export type Card = CardProps & { key: string }

export type CardsRendererProps = {
  onNavigateBack: Function,
  navigationState: NavigationState<{
    path?: string,
    params?: Object,
  }>,
  cards: Array<Card>,
}

export type CardSubViewProps = any
// & NavigationSceneRendererProps
// & CardsRendererProps
// & CardProps

/**
 * Tabs
 */

export type TabBarProps = {
  hideTabBar?: boolean,
  renderTabBar?: (props: TabSubViewProps) => ?React$Element<any>,
  tabBarStyle?: StyleSheet,
  tabStyle?: StyleSheet,
  label?: string,
  labelStyle?: StyleSheet,
  renderLabel?: (props: TabSubViewProps) => ?React$Element<any>,
  tabTintColor?: string,
  tabActiveTintColor?: string,
  // <BottomNavigation /> only:
  renderTabIcon?: (props: TabSubViewProps) => ?React$Element<any>,
  // <Tabs /> only:
  tabBarPosition?: 'top' | 'bottom',
  tabBarIndicatorStyle?: StyleSheet,
}

export type TabsProps = TabBarProps & {
  // <Tabs /> only:
  initialLayout?: { width?: number, height?: number },
  configureTransition: ?Function,
}

export type TabProps = RouteProps & TabBarProps & { onReset?: Function }

export type Tab = TabProps & { key: string }

export type TabsRendererProps = {
  onRequestChangeTab: (index: number) => void,
  navigationState: NavigationState<{
    title?: string,
    testID?: string,
  }>,
  tabs: Array<Tab>,
}

export type TabSubViewProps = any
// & SceneRendererProps
// & TabsRendererProps
// & TabBarProps

