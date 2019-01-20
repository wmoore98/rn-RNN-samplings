/*
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  alert = (title) => {
    Navigation.showOverlay({
      component: {
        name: 'navigation.playground.alert',
        passProps: {
          title
        },
        options: {
          overlay: {
            interceptTouchOutside: true
          }
        }
      }
    });
  };
}

function start() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setDefaultOptions({
      bottomTab: {
        iconColor: '#1B4C77',
        selectedIconColor: '#0f0',
        textColor: '#1B4C77',
        selectedTextColor: '#0f0',
        fontFamily: 'HelveticaNeue-Italic',
        fontSize: 13
      },
      _animations: {
        push: {
          waitForRender: false,
        }
      },
      animations: {
        setRoot: {
          alpha: {
            from: 0,
            to: 1,
            duration: 300
          }
        },
        _push: {
          topBar: {
            id: 'TEST',
            alpha: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'accelerate'
            }
          },
          bottomTabs: {
            y: {
              from: 1000,
              to: 0,
              duration: 500,
              interpolation: 'decelerate',
            },
            alpha: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'decelerate'
            }
          },
          content: {
            y: {
              from: 1000,
              to: 0,
              duration: 500,
              interpolation: 'accelerate',
            },
            alpha: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'accelerate'
            }
          }
        },
        _pop: {
          topBar: {
            id: 'TEST',
            alpha: {
              from: 1,
              to: 0,
              duration: 500,
              interpolation: 'accelerate'
            }
          },
          bottomTabs: {
            y: {
              from: 0,
              to: 100,
              duration: 500,
              interpolation: 'accelerate',
            },
            alpha: {
              from: 1,
              to: 0,
              duration: 500,
              interpolation: 'accelerate'
            }
          },
          bottomTabs: {
            y: {
              from: 0,
              to: 100,
              duration: 500,
              interpolation: 'decelerate',
            },
            alpha: {
              from: 1,
              to: 0,
              duration: 500,
              interpolation: 'decelerate'
            }
          },
          content: {
            y: {
              from: 0,
              to: 1000,
              duration: 500,
              interpolation: 'decelerate',
            },
            alpha: {
              from: 1,
              to: 0,
              duration: 500,
              interpolation: 'decelerate'
            }
          }
        }
      }
    });

    // await Navigation.showModal({
    //   stack: {
    //     children: [
    //       {
    //         component: {
    //           name: 'navigation.playground.ModalScreen'
    //         }
    //       }
    //     ]
    //   }
    // });

    Navigation.setRoot({
      root: {
        stack: {
          id: 'TEST',
          children: [
            {
              component: {
                name: 'navigation.playground.HomeScreen'
                // name: 'navigation.playground.WelcomeScreen'
                // name: 'navigation.playground.CustomTransitionOrigin'
              }
            }
          ]
        }
      }
    });
  });
}

export default start;
/*
*/

/* */
import { Navigation } from 'react-native-navigation';
import { pushHomeScreen } from 'AppNavigator';

console.log(pushHomeScreen);

Navigation.events().registerAppLaunchedListener(() => pushHomeScreen());
/* */



// My Stuff
/* 
import { Navigation } from "react-native-navigation";
import registerScreens from './screens';

registerScreens();

/*
// Single component
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
          component: {
            id: 'HomeComponent',
            name: 'projectTwoRN.HomeScreen',
            options: {
              topBar: {
                title: {
                  text: 'Home'
                }
              }
            },
            passProps: {
              text: 'Single Component'
            }
          }
        }
    });
});
/*
*/

/*
// Stack Navigator
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
          stack: {
            id: 'TEST',
            children: [
              {
                component: {
                  name: 'projectTwoRN.HomeScreen',
                  options: {
                    topBar: {
                      title: {
                        text: 'Home'
                      }
                    }
                  },
                  passProps: {
                    text: 'Stack Navigator'
                  }
                }
              }
            ]
          }
        }
    });
});
/*
*/

/*
// Tab Navigator with Component
Navigation.setRoot({
  root: {
    bottomTabs: {
      children: [{
        component: {
          name: 'projectTwoRN.HomeScreen',
          passProps: {
            text: 'This is tab 1'
          },
          options: {
            bottomTab: {
              text: 'Home',
              icon: require('./images/baseline_home_black_18dp.png'),
              testID: 'FIRST_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: 'projectTwoRN.ProfileScreen',
          passProps: {
            text: 'This is tab 2'
          },
          options: {
            bottomTab: {
              text: 'Profile',
              icon: require('./images/baseline_person_black_18dp.png'),
              testID: 'SECOND_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: 'projectTwoRN.PostsScreen',
          passProps: {
            text: 'This is tab 3'
          },
          options: {
            bottomTab: {
              text: 'Posts',
              icon: require('./images/baseline_message_black_18dp.png'),
              testID: 'SECOND_TAB_BAR_BUTTON'
            }
          }
        }
      }]
    }
  }
});
*/

/*
// Start with single screen and go to Tab Navigator
Navigation.setRoot({
  root: {
    component: {
      id: 'HomeComponent',
      name: 'projectTwoRN.HomeScreen',
      options: {
        topBar: {
          title: {
            text: 'Home'
          }
        }
      },
      passProps: {
        text: 'Single Component'
      }
    },
    bottomTabs: {
      children: [
        {
          component: {
            name: 'projectTwoRN.ProfileScreen',
            passProps: {
              text: 'This is tab 1'
            },
            options: {
              bottomTab: {
                text: 'Profile',
                icon: require('./images/baseline_person_black_18dp.png'),
                testID: 'FIRST_TAB_BAR_BUTTON'
              }
            }
          }
        },
        {
          component: {
            name: 'projectTwoRN.PostsScreen',
            passProps: {
              text: 'This is tab 2'
            },
            options: {
              bottomTab: {
                text: 'Posts',
                icon: require('./images/baseline_message_black_18dp.png'),
                testID: 'SECOND_TAB_BAR_BUTTON'
              }
            }
          }
        }
      ]
    }
  }
});

/*
*/