import type { segmentedControlThemeSizes } from './segmented-control.theme';

type Sizes = (typeof segmentedControlThemeSizes)[number];
type Value = string | number;

export type XZKUISegmentedControlSelectedItem = {
  idx: number;
  value: Value;
};

export interface XZKUISegmentedControlBaseProps {
  size: Sizes;
}

export interface XZKUISegmentedControlProps extends Partial<XZKUISegmentedControlBaseProps> {
  onChangeValue?: (item: XZKUISegmentedControlSelectedItem) => void;
  values: Value[];
  className?: string;
  defaultSelected?: number;
}
