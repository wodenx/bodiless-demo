import { asFluidToken } from '@bodiless/vital-elements';
import { vitalPage } from '@bodiless/vital-templates';
import { LayoutClean } from '@bodiless/vital-layout';
import { on } from '@bodiless/fclasses';
import { VitalTestStyleGuideTemplate } from './StyleGuideTemplate';

// Using shadowing of design system, and within a non-shadowed new component,
// you must override with the shadowed component to get the changes.
import ShadowedLayout from '../../shadow/@bodiless/vital-layout/Layout';

const {
  ContentListingStyleGuide,
  Editors,
  EditorsMonoFont,
  Typography,
  Layout,
  Header,
  FlowContainer,
  Images,
  Footer,
  Video,
  Card,
  CardBrand,
  CardMarket,
  Table,
  Menu,
  BurgerMenu,
  Breadcrumb,
  List,
  Accordion,
  Buttons,
} = VitalTestStyleGuideTemplate;

const Default = asFluidToken({
  ...vitalPage.Default,
  Components: {
    ...vitalPage.Default.Components,
    Wrapper: on(LayoutClean)(ShadowedLayout.Default),
    ContentListingStyleGuide,
    Editors,
    EditorsMonoFont,
    Typography,
    Layout,
    Header,
    FlowContainer,
    Images,
    Footer,
    Video,
    Card,
    CardBrand,
    CardMarket,
    Table,
    Menu,
    BurgerMenu,
    Breadcrumb,
    List,
    Accordion,
    Buttons
  },
});

export default {
  Default,
};
