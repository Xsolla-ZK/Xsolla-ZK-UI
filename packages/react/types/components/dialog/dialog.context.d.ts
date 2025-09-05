import type { DialogContextValue, PortalContextValue } from './dialog.types';
export declare const DialogContext: import("@tamagui/core").StyledContext<DialogContextValue>;
export declare const useDialogContext: (scope?: string) => DialogContextValue, DialogProvider: import("react").Provider<DialogContextValue> & import("react").ProviderExoticComponent<Partial<DialogContextValue> & {
    children?: import("react").ReactNode;
    scope?: string;
}>;
export declare const PortalProvider: (props: PortalContextValue & {
    scope: import("@tamagui/create-context").Scope<PortalContextValue>;
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element, usePortalContext: (consumerName: string, scope: import("@tamagui/create-context").Scope<PortalContextValue | undefined>, options?: {
    warn?: boolean;
    fallback?: Partial<PortalContextValue> | undefined;
} | undefined) => PortalContextValue;
export declare const DialogWarningProvider: (props: {
    contentName: string;
    titleName: string;
    docsSlug: string;
} & {
    children: React.ReactNode;
}) => React.JSX.Element, useWarningContext: (consumerName: string) => {
    contentName: string;
    titleName: string;
    docsSlug: string;
};
//# sourceMappingURL=dialog.context.d.ts.map