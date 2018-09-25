import { FieldSchema, FieldProcessorAdt } from '@ephox/boulder';
import { Fun, Option } from '@ephox/katamari';

import * as Fields from '../../data/Fields';
import * as Bubble from '../layout/Bubble';
import * as LinkedLayout from '../layout/LinkedLayout';
import * as Origins from '../layout/Origins';
import { nu as NuAnchoring, SubmenuAnchor, Anchoring } from './Anchoring';
import * as AnchorLayouts from './AnchorLayouts';
import { AlloyComponent } from '../../api/component/ComponentApi';
import { PositioningConfig } from '../../behaviour/positioning/PositioningTypes';
import { OriginAdt } from '../../behaviour/positioning/PositionApis';

const placement = (component: AlloyComponent, posInfo: PositioningConfig, submenuInfo: SubmenuAnchor, origin: OriginAdt): Option<Anchoring> => {
  const anchorBox = Origins.toBox(origin, submenuInfo.item().element());

  const layouts = AnchorLayouts.get(component.element(), submenuInfo, LinkedLayout.all(), LinkedLayout.allRtl());

  return Option.some(
    NuAnchoring({
      anchorBox: Fun.constant(anchorBox),
      bubble: Fun.constant(Bubble.fallback()),
      overrides: Fun.constant({ }),
      layouts: Fun.constant(layouts),
      placer: Option.none
    })
  );
};

export default [
  FieldSchema.strict('item'),
  AnchorLayouts.schema(),
  Fields.output('placement', placement)
];