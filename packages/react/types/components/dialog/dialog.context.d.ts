import type { DialogContextValue, PortalContextValue } from './dialog.types';
export declare const DialogProvider: (props: DialogContextValue & {
    scope: import("@tamagui/create-context").Scope<DialogContextValue>;
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useDialogContext: (consumerName: string, scope: import("@tamagui/create-context").Scope<DialogContextValue | undefined>, options?: {
    warn?: boolean;
    fallback?: Partial<DialogContextValue> | undefined;
} | undefined) => DialogContextValue;
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
}) => JSX.Element, useWarningContext: (consumerName: string) => {
    contentName: string;
    titleName: string;
    docsSlug: string;
};
//# sourceMappingURL=dialog.context.d.ts.map