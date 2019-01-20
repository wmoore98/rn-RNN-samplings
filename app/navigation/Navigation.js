import { Navigation } from 'react-native-navigation';
import {
    HOME_SCREEN,
    POSTS_SCREEN,
    PROFILE_SCREEN,
    SIDEMENU_SCREEN
} from './Screens';

import registerScreens from './registerScreens';

// Register all screens on launch
registerScreens();

Navigation.events().registerNavigationButtonPressedListener((event) => {
  switch(event.buttonId) {
    case 'nav_menu_btn':
      Navigation.mergeOptions(event.componentId, {
        sideMenu: {
          left: {
            visible: true
          }
        }
      });

    default:
      return;
  }
  console.log(event);
});

export function pushHomeScreen() {
    Navigation.setDefaultOptions({
      topBar: {
        background: {
          color: '#039893'
        },
        title: {
          color: 'white',
        },
        backButton: {
          title: '', // Remove previous screen name from back button
          color: 'white'
        },
        buttonColor: 'white',
      },
      statusBar: {
        style: 'light'
      },
      layout: {
        orientation: ['portrait']
      },
      bottomTabs: {
        titleDisplayMode: 'alwaysShow'
      },
      bottomTab: {
        textColor: 'gray',
        selectedTextColor: 'black',
        iconColor: 'gray',
        selectedIconColor: 'black',
      }
    });

    Navigation.setRoot({
      root: {
        stack: {
          children: [{
            component: {
              name: HOME_SCREEN,
              options: {
                topBar: {
                  visible: false,
                },
                statusBar: {
                  style: 'dark'
                }
              },
              passProps: { text: 'Home Screen - really?' }
            }
          }]
        }
      }
    });
}

/*
export function pushTabBasedApp() {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [{
            stack: {
              children: [{
                component: {
                  name: POSTS_SCREEN,
                  options: {
                    topBar: {
                      title: {
                        text: 'Posts'
                      },
                      leftButtons: [
                        {
                          id: 'nav_user_btn',
                          icon: require('img/icons/ic_nav_user.png'),
                          color: 'white'
                        }
                      ],
                      rightButtons: [
                        {
                          id: 'nav_logout_btn',
                          icon: require('img/icons/ic_nav_logout.png'),
                          color: 'white'
                        }
                      ]
                    }
                  }
                }
              }],
              options: {
                bottomTab: {
                  icon: require('img/icons/baseline_message_black_18dp.png'),
                  testID: 'FIRST_TAB_BAR_BUTTON',
                  text: 'Posts',
                }
              }
            }
          },
          {
            stack: {
              children: [{
                component: {
                  name: PROFILE_SCREEN,
                  options: {
                    topBar: {
                      title: {
                        text: 'Profile'
                      },
                      leftButtons: [
                        {
                          id: 'nav_user_btn',
                          icon: require('img/icons/ic_nav_user.png'),
                          color: 'white'
                        }
                      ],
                      rightButtons: [
                        {
                          id: 'nav_logout_btn',
                          icon: require('img/icons/ic_nav_logout.png'),
                          color: 'white'
                        }
                      ]
                    }
                  }
                }
              }],
              options: {
                bottomTab: {
                  icon: require('img/icons/baseline_person_black_18dp.png'),
                  testID: 'SECOND_TAB_BAR_BUTTON',
                  text: 'Profile',
                }
              }
            }
          }]
        }
      }
    });
  }
  */
 export function pushTabBasedApp() {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: SIDEMENU_SCREEN,
            passProps: {
              text: 'This is a left side menu screen'
            }
          }
        },
        center: {
      bottomTabs: {
        children: [{
          stack: {
            children: [{
              component: {
                name: POSTS_SCREEN,
                passProps: {
                  text: 'Hello World'
                },
                options: {
                  topBar: {
                    title: {
                      text: 'Posts'
                    },
                    leftButtons: [
                      {
                        id: 'nav_menu_btn',
                        icon: require('img/icons/ic_tab_menu.png'),
                        color: 'white'
                      }
                    ],
                    rightButtons: [
                      {
                        id: 'nav_logout_btn',
                        icon: require('img/icons/ic_nav_logout.png'),
                        color: 'white'
                      }
                    ]
                  }
                }
              }
            }],
            options: {
              bottomTab: {
                icon: require('img/icons/baseline_message_black_18dp.png'),
                testID: 'FIRST_TAB_BAR_BUTTON',
                text: 'Posts',
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: PROFILE_SCREEN,
                options: {
                  topBar: {
                    title: {
                      text: 'Profile'
                    },
                    leftButtons: [
                      {
                        id: 'nav_menu_btn',
                        icon: require('img/icons/ic_tab_menu.png'),
                        color: 'white'
                      }
                    ],
                    rightButtons: [
                      {
                        id: 'nav_logout_btn',
                        icon: require('img/icons/ic_nav_logout.png'),
                        color: 'white'
                      }
                    ]
                  }
                }
              }
            }],
            options: {
              bottomTab: {
                icon: require('img/icons/baseline_person_black_18dp.png'),
                testID: 'SECOND_TAB_BAR_BUTTON',
                text: 'Profile',
              }
            }
          }
        }]
      }
    }
  }}});
}