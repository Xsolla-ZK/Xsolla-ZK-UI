import { createTamagui } from '@tamagui/core';
import { initializeComponentsConfig } from './components-config';
export declare function createConfig<T extends Parameters<typeof createTamagui>[0], C extends Parameters<typeof initializeComponentsConfig>[0]>(config: T, componentsConfig: C): {
    tamaguiConfig: import("@tamagui/web").InferTamaguiConfig<T>;
    componentsConfig: {
        accordion: {
            size: {
                medium: {
                    header: {
                        gap: string;
                    };
                };
            };
            board: {
                medium: {
                    frame: {
                        paddingLeft: {
                            base: string;
                            $md: string;
                            $lg: string;
                            $xl: string;
                        };
                        paddingRight: string;
                        paddingVertical: string;
                        borderRadius: string;
                    };
                    content: {
                        minHeight: string;
                    };
                };
            };
        } & C["accordion"];
        badge: {
            $500: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    gap: string;
                    paddingHorizontal: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
        } & C["badge"];
        breadcrumbs: {
            $500: {
                frame: {
                    gap: string;
                };
            };
        } & C["breadcrumbs"];
        button: {
            $200: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
            $300: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
            $400: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
            $500: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
            $600: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
            $700: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
        } & C["button"];
        cell: {
            size: {
                large: {
                    frame: {
                        gap: string;
                        paddingVertical: string;
                    };
                    content: {
                        minHeight: string;
                        paddingVertical: string;
                    };
                    slot: {
                        minHeight: string;
                    };
                };
                medium: {
                    frame: {
                        gap: string;
                        paddingVertical: string;
                    };
                    content: {
                        minHeight: string;
                        paddingVertical: string;
                    };
                    slot: {
                        minHeight: string;
                    };
                };
            };
            addon: {
                gap: string;
            };
            board: {
                large: {
                    frame: {
                        paddingHorizontal: {
                            base: string;
                            $md: string;
                            $lg: string;
                            $xl: string;
                        };
                        paddingVertical: string;
                        borderRadius: string;
                    };
                    content: {
                        minHeight: string;
                    };
                };
                medium: {
                    frame: {
                        paddingHorizontal: {
                            base: string;
                            $md: string;
                            $lg: string;
                            $xl: string;
                        };
                        paddingVertical: string;
                        borderRadius: string;
                    };
                    content: {
                        minHeight: string;
                    };
                };
                small: {
                    frame: {
                        paddingHorizontal: {
                            base: string;
                            $md: string;
                            $lg: string;
                            $xl: string;
                        };
                        paddingVertical: string;
                        borderRadius: string;
                    };
                    content: {
                        minHeight: string;
                    };
                };
            };
        } & C["cell"];
        checkbox: {
            $400: {
                frame: {
                    size: string;
                    borderRadius: string;
                    borderWidth: string;
                };
                icon: {
                    size: string;
                };
            };
            $500: {
                frame: {
                    size: string;
                    borderRadius: string;
                    borderWidth: string;
                };
                icon: {
                    size: string;
                };
            };
            $600: {
                frame: {
                    size: string;
                    borderRadius: string;
                    borderWidth: string;
                };
                icon: {
                    size: string;
                };
            };
        } & C["checkbox"];
        chip: {
            $200: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
            $300: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
            $400: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
            $500: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
            $600: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
            $700: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
        } & C["chip"];
        chips: {
            $200: {
                frame: {
                    gap: string;
                };
            };
            $300: {
                frame: {
                    gap: string;
                };
            };
            $400: {
                frame: {
                    gap: string;
                };
            };
            $500: {
                frame: {
                    gap: string;
                };
            };
            $600: {
                frame: {
                    gap: string;
                };
            };
            $700: {
                frame: {
                    gap: string;
                };
            };
        } & C["chips"];
        dropdown: {
            $400: {
                frame: {
                    marginTop: string;
                    padding: string;
                    borderRadius: string;
                };
                content: {
                    paddingHorizontal: string;
                };
            };
            $500: {
                frame: {
                    marginTop: string;
                    padding: string;
                    borderRadius: string;
                };
                content: {
                    paddingHorizontal: string;
                };
            };
            $600: {
                frame: {
                    marginTop: string;
                    padding: string;
                    borderRadius: string;
                };
                content: {
                    paddingHorizontal: string;
                };
            };
        } & C["dropdown"];
        field: {
            $400: {
                frame: {
                    gap: string;
                };
                row: {
                    gap: string;
                    paddingHorizontal: string;
                };
                inputs: {
                    gap: string;
                };
                label: {
                    typography: string;
                };
                hint: {
                    typography: string;
                };
            };
            $500: {
                frame: {
                    gap: string;
                };
                row: {
                    gap: string;
                    paddingHorizontal: string;
                };
                inputs: {
                    gap: string;
                };
                label: {
                    typography: string;
                };
                hint: {
                    typography: string;
                };
            };
            $600: {
                frame: {
                    gap: string;
                };
                row: {
                    gap: string;
                    paddingHorizontal: string;
                };
                inputs: {
                    gap: string;
                };
                label: {
                    typography: string;
                };
                hint: {
                    typography: string;
                };
            };
        } & C["field"];
        flexButton: {
            $300: {
                frame: {
                    gap: string;
                    minHeight: string;
                };
                label: {
                    typography: string;
                };
                icon: {
                    size: string;
                };
            };
            $400: {
                frame: {
                    gap: string;
                    minHeight: string;
                };
                label: {
                    typography: string;
                };
                icon: {
                    size: string;
                };
            };
            $500: {
                frame: {
                    gap: string;
                    minHeight: string;
                };
                label: {
                    typography: string;
                };
                icon: {
                    size: string;
                };
            };
            $600: {
                frame: {
                    gap: string;
                    minHeight: string;
                };
                label: {
                    typography: string;
                };
                icon: {
                    size: string;
                };
            };
        } & C["flexButton"];
        gallery: {
            $500: {
                gap: string;
            };
        } & C["gallery"];
        inlineInput: {
            $400: {
                typography: string;
            };
            $500: {
                typography: string;
            };
            $600: {
                typography: string;
            };
        } & C["inlineInput"];
        input: {
            $400: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    gap: string;
                    borderWidth: string;
                    paddingVertical: string;
                    paddingHorizontal: string;
                };
                label: {
                    typography: string;
                };
            };
            $500: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    gap: string;
                    borderWidth: string;
                    paddingVertical: string;
                    paddingHorizontal: string;
                };
                label: {
                    typography: string;
                };
            };
            $600: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    gap: string;
                    borderWidth: string;
                    paddingVertical: string;
                    paddingHorizontal: string;
                };
                label: {
                    typography: string;
                };
            };
        } & C["input"];
        list: {
            size: {
                $500: {
                    frame: {
                        gap: string;
                    };
                    row: {
                        gap: string;
                    };
                    title: {
                        typography: string;
                    };
                    subtitle: {
                        typography: string;
                    };
                };
                $600: {
                    frame: {
                        gap: string;
                    };
                    row: {
                        gap: string;
                    };
                    title: {
                        typography: string;
                    };
                    subtitle: {
                        typography: string;
                    };
                };
            };
            board: {
                $500: {
                    frame: {
                        paddingHorizontal: {
                            base: string;
                            $md: string;
                            $lg: string;
                            $xl: string;
                        };
                        paddingVertical: string;
                        borderRadius: string;
                    };
                    content: {
                        minHeight: string;
                    };
                };
                $600: {
                    frame: {
                        paddingHorizontal: {
                            base: string;
                            $md: string;
                            $lg: string;
                            $xl: string;
                        };
                        paddingVertical: string;
                        borderRadius: string;
                    };
                    content: {
                        minHeight: string;
                    };
                };
            };
        } & C["list"];
        loader: {
            $500: {
                borderWidth: string;
            };
        } & C["loader"];
        markdown: {
            h1: {
                paddingTop: string;
                paddingBottom: string;
            };
            h2: {
                paddingTop: string;
                paddingBottom: string;
            };
            h3: {
                paddingTop: string;
                paddingBottom: string;
            };
            h4: {
                paddingTop: string;
                paddingBottom: string;
            };
            h5: {
                paddingTop: string;
                paddingBottom: string;
            };
            p: {
                paddingTop: string;
                paddingBottom: string;
            };
            image: {
                paddingTop: string;
                paddingBottom: string;
            };
        } & C["markdown"];
        modal: {
            $500: {
                frame: {
                    marginVertical: {
                        base: string;
                        $md: string;
                        $xl: string;
                    };
                    marginHorizontal: {
                        base: string;
                        $md: string;
                        $lg: string;
                        $xl: string;
                    };
                    borderRadius: {
                        base: string;
                        $lg: string;
                    };
                };
                header: {
                    paddingTop: {
                        base: string;
                        $lg: string;
                    };
                };
                content: {
                    paddingTop: {
                        base: string;
                        $lg: string;
                        $xl: string;
                    };
                    paddingBottom: {
                        base: string;
                        $lg: string;
                        $xl: string;
                    };
                };
                footer: {
                    paddingBottom: {
                        base: string;
                        $md: string;
                        $lg: string;
                        $xl: string;
                    };
                };
            };
        } & C["modal"];
        navBar: {
            size: {
                $500: {
                    frame: {
                        minHeight: {
                            base: string;
                            $lg: string;
                            $xl: string;
                        };
                        paddingHorizontal: {
                            base: string;
                            $md: string;
                            $lg: string;
                            $xl: string;
                        };
                    };
                    content: {
                        gap: string;
                        paddingHorizontal: {
                            base: string;
                            $md: string;
                            $lg: string;
                            $xl: string;
                        };
                    };
                    addon: {
                        gap: string;
                    };
                };
            };
            center: {
                default: {
                    frame: {
                        gap: string;
                    };
                    title: {
                        typography: {
                            base: string;
                            $lg: string;
                            $xl: string;
                        };
                    };
                    subtitle: {
                        typography: {
                            base: string;
                            $lg: string;
                        };
                    };
                };
                prominent: {
                    frame: {
                        gap: string;
                    };
                    title: {
                        typography: {
                            base: string;
                            $lg: string;
                            $xl: string;
                        };
                    };
                    subtitle: {
                        typography: {
                            base: string;
                            $lg: string;
                        };
                    };
                };
            };
        } & C["navBar"];
        pimple: {
            $200: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                };
            };
            $300: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                };
            };
            $400: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                };
            };
            $500: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                };
            };
            $600: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                };
            };
            $700: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    paddingHorizontal: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                };
            };
        } & C["pimple"];
        progressBar: {
            $500: {
                frame: {
                    height: string;
                    borderRadius: string;
                };
            };
        } & C["progressBar"];
        radio: {
            $400: {
                frame: {
                    size: string;
                    borderWidth: string;
                };
                icon: {
                    size: string;
                };
            };
            $500: {
                frame: {
                    size: string;
                    borderWidth: string;
                };
                icon: {
                    size: string;
                };
            };
            $600: {
                frame: {
                    size: string;
                    borderWidth: string;
                };
                icon: {
                    size: string;
                };
            };
        } & C["radio"];
        richIcon: {
            $100: {
                frame: {
                    minSize: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                    paddingHorizontal: string;
                    paddingTop: string;
                };
            };
            $200: {
                frame: {
                    minSize: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                    paddingHorizontal: string;
                    paddingTop: string;
                };
            };
            $300: {
                frame: {
                    minSize: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                    paddingHorizontal: string;
                    paddingTop: string;
                };
            };
            $400: {
                frame: {
                    minSize: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                    paddingHorizontal: string;
                    paddingTop: string;
                };
            };
            $500: {
                frame: {
                    minSize: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                    paddingHorizontal: string;
                    paddingTop: string;
                };
            };
            $600: {
                frame: {
                    minSize: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                    paddingHorizontal: string;
                    paddingTop: string;
                };
            };
            $700: {
                frame: {
                    minSize: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                    paddingHorizontal: string;
                    paddingTop: string;
                };
            };
            $800: {
                frame: {
                    minSize: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                    paddingHorizontal: string;
                    paddingTop: string;
                };
            };
            $900: {
                frame: {
                    minSize: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                    paddingHorizontal: string;
                    paddingTop: string;
                };
            };
        } & C["richIcon"];
        segment: {
            $400: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    borderWidth: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
            $500: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    borderWidth: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
            $600: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    borderWidth: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
            $700: {
                frame: {
                    minSize: string;
                    borderRadius: string;
                    borderWidth: string;
                    paddingHorizontal: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    paddingHorizontal: string;
                    typography: string;
                };
            };
        } & C["segment"];
        segmentedControl: {
            $400: {
                frame: {
                    paddingHorizontal: string;
                    paddingVertical: string;
                    borderRadius: string;
                    borderWidth: string;
                };
            };
            $500: {
                frame: {
                    paddingHorizontal: string;
                    paddingVertical: string;
                    borderRadius: string;
                    borderWidth: string;
                };
            };
            $600: {
                frame: {
                    paddingHorizontal: string;
                    paddingVertical: string;
                    borderRadius: string;
                    borderWidth: string;
                };
            };
            $700: {
                frame: {
                    paddingHorizontal: string;
                    paddingVertical: string;
                    borderRadius: string;
                    borderWidth: string;
                };
            };
        } & C["segmentedControl"];
        semanticText: {
            headerXl: {
                paddingTop: string;
                paddingBottom: {
                    base: string;
                    $lg: string;
                };
                typography: {
                    base: string;
                    $lg: string;
                    $xl: string;
                };
            };
            headerL: {
                paddingTop: {
                    base: string;
                    $xl: string;
                };
                paddingBottom: string;
                typography: {
                    base: string;
                    $lg: string;
                    $xl: string;
                };
            };
            headerM: {
                paddingTop: string;
                paddingBottom: string;
                typography: {
                    base: string;
                    $lg: string;
                    $xl: string;
                };
            };
            headerS: {
                paddingTop: {
                    base: string;
                    $lg: string;
                    $xl: string;
                };
                paddingBottom: {
                    base: string;
                    $lg: string;
                };
                typography: {
                    base: string;
                    $lg: string;
                    $xl: string;
                };
            };
            headerXs: {
                paddingTop: {
                    base: string;
                    $lg: string;
                    $xl: string;
                };
                paddingBottom: string;
                typography: {
                    base: string;
                    $lg: string;
                    $xl: string;
                };
            };
            paragraphL: {
                paddingTop: string;
                paddingBottom: string;
                typography: {
                    base: string;
                    $lg: string;
                };
            };
            paragraphM: {
                paddingTop: {
                    base: string;
                    $lg: string;
                };
                paddingBottom: {
                    base: string;
                    $lg: string;
                };
                typography: {
                    base: string;
                    $lg: string;
                };
            };
            paragraphS: {
                paddingTop: string;
                paddingBottom: string;
                typography: {
                    base: string;
                    $lg: string;
                };
            };
        } & C["semanticText"];
        separator: {
            $500: {
                borderWidth: string;
            };
        } & C["separator"];
        slider: {
            $500: {
                frame: {
                    height: string;
                    borderRadius: string;
                };
                knob: {
                    size: string;
                    borderWidth: string;
                };
            };
        } & C["slider"];
        snackBar: {
            $500: {
                frame: {
                    maxWidth: number;
                    borderRadius: string;
                    paddingTop: string;
                    paddingBottom: string;
                    paddingRight: string;
                    paddingLeft: string;
                };
                content: {
                    frame: {
                        gap: string;
                    };
                    icon: {
                        minHeight: string;
                    };
                    description: {
                        frame: {
                            paddingVertical: string;
                            gap: string;
                        };
                        list: {
                            gap: string;
                        };
                        actions: {
                            gap: string;
                        };
                    };
                };
            };
        } & C["snackBar"];
        switchComponent: {
            $600: {
                frame: {
                    borderRadius: string;
                    borderWidth: string;
                    padding: string;
                };
                knob: {
                    size: string;
                    borderRadius: string;
                };
            };
        } & C["switchComponent"];
        tabs: {
            $300: {
                frame: {
                    gap: string;
                };
            };
            $400: {
                frame: {
                    gap: string;
                };
            };
            $500: {
                frame: {
                    gap: string;
                };
            };
            $600: {
                frame: {
                    gap: string;
                };
            };
            $700: {
                frame: {
                    gap: string;
                };
            };
        } & C["tabs"];
        notificationProvider: {
            $500: {
                marginHorizontal: {
                    base: string;
                    $md: string;
                    $lg: string;
                    $xl: string;
                };
                marginVertical: {
                    base: string;
                    $md: string;
                    $xl: string;
                };
            };
        } & C["notificationProvider"];
        tabBar: {
            $500: {
                tab: {
                    minHeight: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                };
            };
        } & C["tabBar"];
        tab: {
            $300: {
                frame: {
                    minSize: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                };
                line: {
                    height: string;
                    borderTopLeftRadius: string;
                    borderTopRightRadius: string;
                    borderBottomLeftRadius: string;
                    borderBottomRightRadius: string;
                };
            };
            $400: {
                frame: {
                    minSize: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                };
                line: {
                    height: string;
                    borderTopLeftRadius: string;
                    borderTopRightRadius: string;
                    borderBottomLeftRadius: string;
                    borderBottomRightRadius: string;
                };
            };
            $500: {
                frame: {
                    minSize: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                };
                line: {
                    height: string;
                    borderTopLeftRadius: string;
                    borderTopRightRadius: string;
                    borderBottomLeftRadius: string;
                    borderBottomRightRadius: string;
                };
            };
            $600: {
                frame: {
                    minSize: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                };
                line: {
                    height: string;
                    borderTopLeftRadius: string;
                    borderTopRightRadius: string;
                    borderBottomLeftRadius: string;
                    borderBottomRightRadius: string;
                };
            };
            $700: {
                frame: {
                    minSize: string;
                    gap: string;
                };
                icon: {
                    size: string;
                };
                label: {
                    typography: string;
                };
                line: {
                    height: string;
                    borderTopLeftRadius: string;
                    borderTopRightRadius: string;
                    borderBottomLeftRadius: string;
                    borderBottomRightRadius: string;
                };
            };
        } & C["tab"];
        toast: {
            $500: {
                frame: {
                    borderRadius: string;
                    paddingTop: string;
                    paddingBottom: string;
                    paddingRight: string;
                    paddingLeft: string;
                    gap: string;
                };
            };
        } & C["toast"];
        tooltip: {
            frame: {
                borderRadius: string;
                minHeight: string;
                padding: string;
                gap: string;
            };
            label: {
                typography: string;
            };
        } & C["tooltip"];
    };
};
//# sourceMappingURL=create-config.d.ts.map