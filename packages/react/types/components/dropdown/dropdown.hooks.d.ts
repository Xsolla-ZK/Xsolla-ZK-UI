import type { DropdownVia } from './dropdown.types';
import type { UseFloatingOptions, UseHoverProps } from '@floating-ui/react';
export declare const useFloatingContext: ({ open, setOpen, disable, disableFocus, hoverable, }: {
    open: boolean;
    setOpen: (open: boolean, via: DropdownVia) => void;
    disable: boolean;
    disableFocus?: boolean;
    hoverable?: boolean | UseHoverProps;
}) => (props: UseFloatingOptions) => {
    open: boolean;
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    placement: import("@tamagui/floating").Placement;
    strategy: import("@tamagui/floating").Strategy;
    middlewareData: import("@tamagui/floating").MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: React.CSSProperties;
    refs: {
        reference: import("react").MutableRefObject<import("@tamagui/floating").ReferenceType | null>;
        floating: React.MutableRefObject<HTMLElement | null>;
        setReference: (node: import("@tamagui/floating").ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    } & import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
    elements: {
        reference: import("@tamagui/floating").ReferenceType | null;
        floating: HTMLElement | null;
    } & import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    context: {
        x: number;
        y: number;
        placement: import("@tamagui/floating").Placement;
        strategy: import("@tamagui/floating").Strategy;
        middlewareData: import("@tamagui/floating").MiddlewareData;
        isPositioned: boolean;
        update: () => void;
        floatingStyles: React.CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event, reason?: import("@floating-ui/react").OpenChangeReason) => void;
        events: import("@floating-ui/react").FloatingEvents;
        dataRef: React.MutableRefObject<import("@floating-ui/react").ContextData>;
        nodeId: string | undefined;
        floatingId: string | undefined;
        refs: import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
        elements: import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    };
};
//# sourceMappingURL=dropdown.hooks.d.ts.map