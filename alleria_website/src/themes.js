import { createTheme } from '@aws-amplify/ui-react';

export const defaultTheme = createTheme({
    name: 'default',
    tokens: {
      colors:{
        background: {
          primary: { value: '#bea5d6'},
          secondary: { value: '#B688E1'},
          tertiary: {value: '#A5D6BE'}
        },
        border: {
            primary: { value: '#AC7CD3'}
        },
        shadow: {
            primary: { value: 'rgba(13, 26, 38, 0.35) 0px 4px 12px 0px'}
        }
      },
      fonts: {
        default: { value: 'Open Sans'}
      },
      components: {
        tabs: {
          borderColor: { value: '{colors.neutral.20}' },
          item: {
            color: { value: '{colors.blue.60}' },
            fontSize: { value: '{fontSizes.large}' },
            fontWeight: { value: '{fontWeights.semibold}' },

            _hover: {
              color: { value: '{colors.blue.10}' },
            },
            _focus: {
              color: { value: '{colors.blue.10}' },
            },
            _active: {
              color: { value: '{colors.blue.80}' },
              borderColor: { value: '{colors.blue.80}' },
              backgroundColor: { value: 'transparent' },
            },
            _disabled: {
              color: { value: 'gray' },
              backgroundColor: { value: 'transparent' },
            },
          },
        },
        card: {
            backgroundColor: {value: '{colors.background.secondary}'},
            borderRadius: {value: '7px'},
            boxShadow: { value: '{colors.shadow.primary}'},
        },
        flex: {
            alignItems: {value:'center'},
        },
        button:{
            primary: {
                backgroundColor: {value: '#602dd2'},
                borderWidth: {value: '3px'},
                _hover: {
                    backgroundColor: { value: 'transparent'},
                    borderColor: {value: '#602dd2'},
                },
                _focus: {
                  backgroundColor: { value: '{colors.background.tertiary}' },
                },
                _active: {
                  backgroundColor: { value: '{colors.background.tertiary}' },
                }
            }
        }
      },
    },
  });