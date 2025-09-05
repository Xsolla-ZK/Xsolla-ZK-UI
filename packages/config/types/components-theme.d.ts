declare const componentsTheme: {
    tooltipTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_Tooltip`]: {
            [x: string]: string;
        } | {
            background: string;
            borderColor: string;
            color: string;
        };
        [x: `dark_${string}_Tooltip`]: {
            [x: string]: string;
        } | {
            background: string;
            borderColor: string;
            color: string;
        };
        light_Tooltip: {
            background: string;
            borderColor: string;
            color: string;
        };
        dark_Tooltip: {
            background: string;
            borderColor: string;
            color: string;
        };
    };
    toastTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_Toast`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_Toast`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_Toast: {
            background: string;
        };
        dark_Toast: {
            background: string;
        };
    };
    tabsTabTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_TabsTab`]: {
            [x: string]: string;
        } | {
            background: string;
            backgroundHover: string;
        };
        [x: `dark_${string}_TabsTab`]: {
            [x: string]: string;
        } | {
            background: string;
            backgroundHover: string;
        };
        light_TabsTab: {
            background: string;
            backgroundHover: string;
        };
        dark_TabsTab: {
            background: string;
            backgroundHover: string;
        };
    };
    tabsListIndicatorTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_TabsListIndicator`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_TabsListIndicator`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_TabsListIndicator: {
            background: string;
        };
        dark_TabsListIndicator: {
            background: string;
        };
    };
    tabBarItemTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_TabBarItem: {
            color: string;
        };
        dark_TabBarItem: {
            color: string;
        };
        light_selected_TabBarItem: {
            color: string;
        };
        dark_selected_TabBarItem: {
            color: string;
        };
    };
    switchTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_Switch: {
            background: string;
            borderColor: string;
            outlineColor: string;
        };
        dark_Switch: {
            background: string;
            borderColor: string;
            outlineColor: string;
        };
        light_active_Switch: {
            background: string;
            borderColor: string;
            outlineColor: string;
        };
        dark_active_Switch: {
            background: string;
            borderColor: string;
            outlineColor: string;
        };
    };
    switchKnobTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_SwitchKnob: {
            background: string;
        };
        dark_SwitchKnob: {
            background: string;
        };
        light_active_SwitchKnob: {
            background: string;
        };
        dark_active_SwitchKnob: {
            background: string;
        };
    };
    snackBarTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_SnackBar`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_SnackBar`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_SnackBar: {
            background: string;
        };
        dark_SnackBar: {
            background: string;
        };
    };
    sliderTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_Slider`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_Slider`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_Slider: {
            background: string;
        };
        dark_Slider: {
            background: string;
        };
    };
    sliderTrackTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_SliderTrack`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_SliderTrack`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_SliderTrack: {
            background: string;
        };
        dark_SliderTrack: {
            background: string;
        };
    };
    sliderTrackActiveTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_SliderTrackActive`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_SliderTrackActive`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_SliderTrackActive: {
            background: string;
        };
        dark_SliderTrackActive: {
            background: string;
        };
    };
    sliderKnobTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_SliderKnob`]: {
            [x: string]: string;
        } | {
            background: string;
            borderColor: string;
        };
        [x: `dark_${string}_SliderKnob`]: {
            [x: string]: string;
        } | {
            background: string;
            borderColor: string;
        };
        light_SliderKnob: {
            background: string;
            borderColor: string;
        };
        dark_SliderKnob: {
            background: string;
            borderColor: string;
        };
    };
    sheetTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_Sheet`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_Sheet`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_Sheet: {
            background: string;
        };
        dark_Sheet: {
            background: string;
        };
    };
    sheetOverlayTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_SheetOverlay`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_SheetOverlay`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_SheetOverlay: {
            background: string;
        };
        dark_SheetOverlay: {
            background: string;
        };
    };
    segmentedControlTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_SegmentedControl`]: {
            [x: string]: string;
        } | {
            background: string;
            borderColor: string;
        };
        [x: `dark_${string}_SegmentedControl`]: {
            [x: string]: string;
        } | {
            background: string;
            borderColor: string;
        };
        light_SegmentedControl: {
            background: string;
            borderColor: string;
        };
        dark_SegmentedControl: {
            background: string;
            borderColor: string;
        };
    };
    segmentedControlSegmentTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_SegmentedControlSegment: {
            background: string;
            borderColor: string;
            color: string;
        };
        dark_SegmentedControlSegment: {
            background: string;
            borderColor: string;
            color: string;
        };
        light_active_SegmentedControlSegment: {
            background: string;
            borderColor: string;
            color: string;
        };
        dark_active_SegmentedControlSegment: {
            background: string;
            borderColor: string;
            color: string;
        };
    };
    richIconTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_RichIcon`]: {
            [x: string]: string;
        } | {
            background: string;
            color: string;
        };
        [x: `dark_${string}_RichIcon`]: {
            [x: string]: string;
        } | {
            background: string;
            color: string;
        };
        light_RichIcon: {
            background: string;
            color: string;
        };
        dark_RichIcon: {
            background: string;
            color: string;
        };
    };
    radioGroupTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_RadioGroup: {
            background: string;
            borderColor: string;
            color: string;
        };
        dark_RadioGroup: {
            background: string;
            borderColor: string;
            color: string;
        };
        light_active_RadioGroup: {
            background: string;
            borderColor: string;
            color: string;
        };
        dark_active_RadioGroup: {
            background: string;
            borderColor: string;
            color: string;
        };
    };
    progressBarTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_ProgressBar`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_ProgressBar`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_ProgressBar: {
            background: string;
        };
        dark_ProgressBar: {
            background: string;
        };
    };
    progressBarActiveTrackTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_ProgressBarActiveTrack`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_ProgressBarActiveTrack`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_ProgressBarActiveTrack: {
            background: string;
        };
        dark_ProgressBarActiveTrack: {
            background: string;
        };
    };
    pimpleTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_Pimple`]: {
            [x: string]: string;
        } | {
            background: string;
            color: string;
        };
        [x: `dark_${string}_Pimple`]: {
            [x: string]: string;
        } | {
            background: string;
            color: string;
        };
        light_Pimple: {
            background: string;
            color: string;
        };
        dark_Pimple: {
            background: string;
            color: string;
        };
    };
    loaderTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_Loader: {
            color: string;
            spinColor: string;
        };
        dark_Loader: {
            color: string;
            spinColor: string;
        };
        "light_on-light_Loader": {
            color: string;
            spinColor: string;
        };
        "dark_on-light_Loader": {
            color: string;
            spinColor: string;
        };
        "light_on-dark_Loader": {
            color: string;
            spinColor: string;
        };
        "dark_on-dark_Loader": {
            color: string;
            spinColor: string;
        };
        "light_on-brand_Loader": {
            color: string;
            spinColor: string;
        };
        "dark_on-brand_Loader": {
            color: string;
            spinColor: string;
        };
    };
    listTitleTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_ListTitle`]: {
            [x: string]: string;
        } | {
            color: string;
        };
        [x: `dark_${string}_ListTitle`]: {
            [x: string]: string;
        } | {
            color: string;
        };
        light_ListTitle: {
            color: string;
        };
        dark_ListTitle: {
            color: string;
        };
    };
    listTitleValueTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_ListTitleValue`]: {
            [x: string]: string;
        } | {
            color: string;
        };
        [x: `dark_${string}_ListTitleValue`]: {
            [x: string]: string;
        } | {
            color: string;
        };
        light_ListTitleValue: {
            color: string;
        };
        dark_ListTitleValue: {
            color: string;
        };
    };
    listSubtitleTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_ListSubtitle`]: {
            [x: string]: string;
        } | {
            color: string;
        };
        [x: `dark_${string}_ListSubtitle`]: {
            [x: string]: string;
        } | {
            color: string;
        };
        light_ListSubtitle: {
            color: string;
        };
        dark_ListSubtitle: {
            color: string;
        };
    };
    listBoardTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_ListBoard`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_ListBoard`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_ListBoard: {
            background: string;
        };
        dark_ListBoard: {
            background: string;
        };
    };
    inputTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_Input: {
            background: string;
            backgroundFocus: string;
            borderColor: string;
            borderColorFocus: string;
            placeholderColor: string;
            color: string;
        };
        dark_Input: {
            background: string;
            backgroundFocus: string;
            borderColor: string;
            borderColorFocus: string;
            placeholderColor: string;
            color: string;
        };
        light_error_Input: {
            background: string;
            backgroundFocus: string;
            borderColor: string;
            borderColorFocus: string;
            placeholderColor: string;
            color: string;
        };
        dark_error_Input: {
            background: string;
            backgroundFocus: string;
            borderColor: string;
            borderColorFocus: string;
            placeholderColor: string;
            color: string;
        };
        light_readonly_Input: {
            background: string;
            borderColor: string;
            placeholderColor: string;
            color: string;
        };
        dark_readonly_Input: {
            background: string;
            borderColor: string;
            placeholderColor: string;
            color: string;
        };
    };
    inlineInputTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_InlineInput: {
            borderColorFocus: string;
            placeholderColor: string;
            color: string;
        };
        dark_InlineInput: {
            borderColorFocus: string;
            placeholderColor: string;
            color: string;
        };
        light_error_InlineInput: {
            placeholderColor: string;
            color: string;
        };
        dark_error_InlineInput: {
            placeholderColor: string;
            color: string;
        };
        light_readonly_InlineInput: {
            placeholderColor: string;
            color: string;
        };
        dark_readonly_InlineInput: {
            placeholderColor: string;
            color: string;
        };
    };
    flexButtonTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_FlexButton: {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
        dark_FlexButton: {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
        light_neutral_FlexButton: {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
        dark_neutral_FlexButton: {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
        light_positive_FlexButton: {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
        dark_positive_FlexButton: {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
        light_warning_FlexButton: {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
        dark_warning_FlexButton: {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
        light_info_FlexButton: {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
        dark_info_FlexButton: {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
        light_negative_FlexButton: {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
        dark_negative_FlexButton: {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
        "light_brand-extra_FlexButton": {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
        "dark_brand-extra_FlexButton": {
            backgroundHover: string;
            backgroundPress: string;
            borderColorPress: string;
            color: string;
        };
    };
    fieldTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_Field: {
            color: string;
        };
        dark_Field: {
            color: string;
        };
        light_error_Field: {
            color: string;
        };
        dark_error_Field: {
            color: string;
        };
    };
    dropdownTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_Dropdown`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_Dropdown`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_Dropdown: {
            background: string;
        };
        dark_Dropdown: {
            background: string;
        };
    };
    dialogContentTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_DialogContent`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_DialogContent`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_DialogContent: {
            background: string;
        };
        dark_DialogContent: {
            background: string;
        };
    };
    dialogOverlayTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_DialogOverlay`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_DialogOverlay`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_DialogOverlay: {
            background: string;
        };
        dark_DialogOverlay: {
            background: string;
        };
    };
    chipsTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_Chip: {
            background: string;
            color: string;
            spinColor: string;
        };
        dark_Chip: {
            background: string;
            color: string;
            spinColor: string;
        };
        light_neutral_Chip: {
            background: string;
            color: string;
        };
        dark_neutral_Chip: {
            background: string;
            color: string;
        };
        light_positive_Chip: {
            background: string;
            color: string;
        };
        dark_positive_Chip: {
            background: string;
            color: string;
        };
        light_warning_Chip: {
            background: string;
            color: string;
        };
        dark_warning_Chip: {
            background: string;
            color: string;
        };
        light_info_Chip: {
            background: string;
            color: string;
        };
        dark_info_Chip: {
            background: string;
            color: string;
        };
        light_negative_Chip: {
            background: string;
            color: string;
        };
        dark_negative_Chip: {
            background: string;
            color: string;
        };
        "light_brand-extra_Chip": {
            background: string;
            color: string;
        };
        "dark_brand-extra_Chip": {
            background: string;
            color: string;
        };
    };
    checkboxTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_Checkbox: {
            background: string;
            borderColor: string;
            color: string;
        };
        dark_Checkbox: {
            background: string;
            borderColor: string;
            color: string;
        };
        light_active_Checkbox: {
            background: string;
            borderColor: string;
            color: string;
        };
        dark_active_Checkbox: {
            background: string;
            borderColor: string;
            color: string;
        };
    };
    cellBoardTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        [x: `light_${string}_CellBoard`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        [x: `dark_${string}_CellBoard`]: {
            [x: string]: string;
        } | {
            background: string;
        };
        light_CellBoard: {
            background: string;
        };
        dark_CellBoard: {
            background: string;
        };
    };
    buttonTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_Button: {
            background: string;
            color: string;
            spinColor: string;
        };
        dark_Button: {
            background: string;
            color: string;
            spinColor: string;
        };
        light_neutral_Button: {
            background: string;
            color: string;
        };
        dark_neutral_Button: {
            background: string;
            color: string;
        };
        light_positive_Button: {
            background: string;
            color: string;
        };
        dark_positive_Button: {
            background: string;
            color: string;
        };
        light_warning_Button: {
            background: string;
            color: string;
        };
        dark_warning_Button: {
            background: string;
            color: string;
        };
        light_info_Button: {
            background: string;
            color: string;
        };
        dark_info_Button: {
            background: string;
            color: string;
        };
        light_negative_Button: {
            background: string;
            color: string;
        };
        dark_negative_Button: {
            background: string;
            color: string;
        };
        "light_brand-extra_Button": {
            background: string;
            color: string;
        };
        "dark_brand-extra_Button": {
            background: string;
            color: string;
        };
    };
    badgeTheme: <T extends Record<"light" | "dark", Record<string, string>>>(themes: T) => {
        light_Badge: {
            background: string;
            color: string;
        };
        dark_Badge: {
            background: string;
            color: string;
        };
        light_neutral_Badge: {
            background: string;
            color: string;
        };
        dark_neutral_Badge: {
            background: string;
            color: string;
        };
        light_positive_Badge: {
            background: string;
            color: string;
        };
        dark_positive_Badge: {
            background: string;
            color: string;
        };
        light_warning_Badge: {
            background: string;
            color: string;
        };
        dark_warning_Badge: {
            background: string;
            color: string;
        };
        light_info_Badge: {
            background: string;
            color: string;
        };
        dark_info_Badge: {
            background: string;
            color: string;
        };
        light_negative_Badge: {
            background: string;
            color: string;
        };
        dark_negative_Badge: {
            background: string;
            color: string;
        };
        "light_brand-extra_Badge": {
            background: string;
            color: string;
        };
        "dark_brand-extra_Badge": {
            background: string;
            color: string;
        };
    };
};
export { componentsTheme };
//# sourceMappingURL=components-theme.d.ts.map