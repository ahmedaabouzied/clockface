# Changelog

### 0.0.33 (Unreleased)

- [#320](https://github.com/influxdata/clockface/pull/320): Convert `DapperScrollbars` component to `FunctionComponent` and update `react-scrollbars-custom` dependency to `4.0.20`
- [#319](https://github.com/influxdata/clockface/pull/319): Convert `ColorPicker` component family to `FunctionComponent` and wrap with `forwardRef`
- [#318](https://github.com/influxdata/clockface/pull/318): Convert `Table` component family to `FunctionComponent` and wrap with `forwardRef`
- [#317](https://github.com/influxdata/clockface/pull/317): Convert `Button` component family to `FunctionComponent` and wrap with `forwardRef`
- [#316](https://github.com/influxdata/clockface/pull/316): Convert `Popover` component family to `FunctionComponent` and wrap with `forwardRef`
- [#316](https://github.com/influxdata/clockface/pull/316): Convert `AppWrapper` component family to `FunctionComponent` and wrap with `forwardRef`
- [#316](https://github.com/influxdata/clockface/pull/316): Convert `Alert` component family to `FunctionComponent` and wrap with `forwardRef`
- [#315](https://github.com/influxdata/clockface/pull/315): Convert all `Dropdown` components to `FunctionComponent` and wrap with `forwardRef`
- [#315](https://github.com/influxdata/clockface/pull/315): [Breaking] Remove `widthPixels` prop from `Dropdown`, `SelectDropdown`, and `MultiSelectDropdown` in favor of `style` with default width
- [#314](https://github.com/influxdata/clockface/pull/314): Convert `Grid` component family to `FunctionComponent` and wrap with `forwardRef`
- [#314](https://github.com/influxdata/clockface/pull/314): Convert `Radio` component family to `FunctionComponent` and wrap with `forwardRef`
- [#314](https://github.com/influxdata/clockface/pull/314): Convert `SelectableCard` component to `FunctionComponent` and wrap with `forwardRef`
- [#314](https://github.com/influxdata/clockface/pull/314): Convert `TextBlock` component to `FunctionComponent` and wrap with `forwardRef`
- [#314](https://github.com/influxdata/clockface/pull/314): Convert `SlideToggle` component family to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Fix style bug in `PanelTitle`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert `FlexBox` component family to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert `Icon` component to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert `Label` component to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert `Panel` component family to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert `Input` component family to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert `TextArea` component to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert spinner components to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): [Breaking] Remove `widthPixels` prop from `Input` in favor of `style` with default width
- [#313](https://github.com/influxdata/clockface/pull/313): [Breaking] Remove `widthPixels` prop from `TextArea` in favor of `style` with default width

### 0.0.32

- [#281](https://github.com/influxdata/clockface/pull/281): Revert absolute path changes

### 0.0.31

- [#278](https://github.com/influxdata/clockface/pull/278): Add rollup-plugin-includepaths to handle unresolved paths

### 0.0.30

- [#277](https://github.com/influxdata/clockface/pull/277): Fix export paths to be absolute instead of relative

### 0.0.29

- [#276](https://github.com/influxdata/clockface/pull/276): Replace all relative import paths with absolute paths
- [#275](https://github.com/influxdata/clockface/pull/275): Support absolute import paths
- [#274](https://github.com/influxdata/clockface/pull/274): Introduce `QuestionMarkTooltip` as a composed version of `Popover`
- [#274](https://github.com/influxdata/clockface/pull/274): Split `StandardProps` into `StandardClassProps` and `StandardFunctionProps`
- [#270](https://github.com/influxdata/clockface/pull/270): [Breaking] Rebuild `Popover` from the ground up using portals and refs to prevent issues with layout disruption and positioning
- [#270](https://github.com/influxdata/clockface/pull/270): Introduce `ReflessPopover` as a replacement for the previous `Popover` component functionality
- [#270](https://github.com/influxdata/clockface/pull/270): Allow optional "default styles" for `Popover` components
- [#268](https://github.com/influxdata/clockface/pull/268): [Breaking] Remove `size` prop from `Panel` and add `size` prop to `PanelHeader`, `PanelTitle`, `PanelBody`, and `PanelFooter`
- [#267](https://github.com/influxdata/clockface/pull/267): Scroll to selected `DropdownItem` when `DropdownMenu` is opened
- [#265](https://github.com/influxdata/clockface/pull/265): Make `NavMenu` responsive
- [#265](https://github.com/influxdata/clockface/pull/265): Allow customization of `PageHeader` and `PageContents` gutter sizes
- [#265](https://github.com/influxdata/clockface/pull/265): Make `PageContents` size less rigid
- [#265](https://github.com/influxdata/clockface/pull/265): Introduce `PageSubTitle` component
- [#265](https://github.com/influxdata/clockface/pull/265): Change backgrounds of `OverlayContainer` and `AppWrapper` to be flat colors
- [#265](https://github.com/influxdata/clockface/pull/265): [Breaking] Make `PageHeader` and sub-components responsive
- [#264](https://github.com/influxdata/clockface/pull/264): [Breaking] Update `SelectableCard` component with top-label design

### 0.0.28

- [#256](https://github.com/influxdata/clockface/pull/256): Add markdown documentation for `NavMenu` component family
- [#255](https://github.com/influxdata/clockface/pull/255): Introduce `TextPopover` as a simplified composed version of `Popover`
- [#255](https://github.com/influxdata/clockface/pull/255): [Breaking] rename `Popover` prop `initiallyVisible` to `visible` (now allows full external control of popover state)
- [#254](https://github.com/influxdata/clockface/pull/254): Add markdown documentation for `Page` components
- [#254](https://github.com/influxdata/clockface/pull/254): [Breaking] Simplify how "Presentation Mode" is handled
- [#254](https://github.com/influxdata/clockface/pull/254): Fix style bug in `Page` components that prevented `PageHeader` and `PageContents` from aligning properly
- [#252](https://github.com/influxdata/clockface/pull/252): Add new colors and gradients from InfluxData Brand guidelines
- [#251](https://github.com/influxdata/clockface/pull/251): Introduce `Wand`, `WrenchNav`, and `DisksNav` icons to icon font

### 0.0.27 - 🆘

### 0.0.26

- [#243](https://github.com/influxdata/clockface/pull/243): [Breaking] Make `PanelHeader` composable (we recommend using `PanelTitle` as a child instead of `title` prop)
- [#243](https://github.com/influxdata/clockface/pull/243): Do not render `ResourceCardName` & `ResourceCardEditableName` as links if no `onClick` prop is passed
- [#243](https://github.com/influxdata/clockface/pull/243): Fix appearance of `ResourceCardEditableName` when in edit mode
- [#243](https://github.com/influxdata/clockface/pull/243): Reduce padding of `PageHeader` and `PageContents` when navigation is above the page
- [#243](https://github.com/influxdata/clockface/pull/243): Ensure that `TextBlock` can have its text and background color controlled independently
- [#243](https://github.com/influxdata/clockface/pull/243): Position `ResourceListHeader` contents to the left when no filter is passed in
- [#243](https://github.com/influxdata/clockface/pull/243): [Breaking] Ensure that `FlexBoxChild` is accessible as `<FlexBox.Child />`
- [#243](https://github.com/influxdata/clockface/pull/243): Expose `pattern` and `required` input attributes as props
- [#243](https://github.com/influxdata/clockface/pull/243): Make `preventDefault` behavior in `Form` `onSubmit` optional
- [#243](https://github.com/influxdata/clockface/pull/243): Add `cf-` prefix to classnames in all `ResourceList` and `ResourceCard` components
- [#243](https://github.com/influxdata/clockface/pull/243): Ensure `Popover` dialog can be moused into when show interaction is `Hover`
- [#243](https://github.com/influxdata/clockface/pull/243): Ensure the hidden input inside `SelectableCard` is controlled

### 0.0.25

- [#231](https://github.com/influxdata/clockface/pull/231): Introduce `RangeSlider` input component
- [#229](https://github.com/influxdata/clockface/pull/229): Introduce `SelectableCard` as a port of `CardSelect` from the InfluxDB repository
- [#224](https://github.com/influxdata/clockface/pull/224): Introduce `Tabs` family of navigation components
- [#221](https://github.com/influxdata/clockface/pull/221): [Breaking] Rename `ComponentSpacer` to `FlexBox` and `ComponentSpacerFlexChild` to `FlexBoxChild`
- [#220](https://github.com/influxdata/clockface/pull/220): Ensure all `ConfirmationButton` elements receive a `testID` attribute
- [#219](https://github.com/influxdata/clockface/pull/219): Add `style` prop to all components
- [#219](https://github.com/influxdata/clockface/pull/219): [Breaking] remove `color` prop from `Icon`
- [#219](https://github.com/influxdata/clockface/pull/219): Ensure `className` prop in `TextArea` is being implemented correctly

### 0.0.24

- [#211](https://github.com/influxdata/clockface/pull/211): Ensure `ConfirmationButton` is exported

### 0.0.23 - 🆘

### 0.0.22

- [#208](https://github.com/influxdata/clockface/pull/208): Fix `TextArea` onChange not returning event
- [#207](https://github.com/influxdata/clockface/pull/207): Introduce `TextBlock`, `DismissButton`, and `FlexChild` components
- [#206](https://github.com/influxdata/clockface/pull/206): Enhance `Form` component with missing attributes
- [#204](https://github.com/influxdata/clockface/pull/204): Introduce `ConfirmationButton` composed component
- [#202](https://github.com/influxdata/clockface/pull/202): Introduce standardized `Popover` component
- [#197](https://github.com/influxdata/clockface/pull/197): Port `AutoInput` component from InfluxDB and add to `Input` family

### 0.0.21

- [#198](https://github.com/influxdata/clockface/pull/198): Botched release 😢

### 0.0.20

- [#193](https://github.com/influxdata/clockface/pull/193): Extend `Dropdowns` to optionally drop up, fix liminal gap in dropdown parent element, and introduce `DropdownItemEmpty` component
- [#192](https://github.com/influxdata/clockface/pull/192): Add missing prefix to restore padding around page content

#### 0.0.19

- [#190](https://github.com/influxdata/clockface/pull/190): Update build configuration, add CircleCI integration, deduplicate built CSS

#### 0.0.18

- [#181](https://github.com/influxdata/clockface/pull/181): Fix build warnings from moment locale.

#### 0.0.17

- [#180](https://github.com/influxdata/clockface/pull/180): Prefix all CSS classnames with `cf-` to avoid conflicts with older version in InfluxDB
- [#178](https://github.com/influxdata/clockface/pull/178): Add markdown documentation for `Overlay` component family
- [#170](https://github.com/influxdata/clockface/pull/170): Introduce and document `Table` component family
- [#169](https://github.com/influxdata/clockface/pull/169): Introduce `DatePicker` and `DateRangePicker` components
- [#166](https://github.com/influxdata/clockface/pull/166): Add markdown documentation for `ClickOutside`, `DapperScrollbars`, `DraggableResizer`, and `WaitingText`
- [#165](https://github.com/influxdata/clockface/pull/165): Add markdown documentation for and polish appearance of `SlideToggle` components

#### 0.0.16

- [#163](https://github.com/influxdata/clockface/pull/163): Make `Panel` component optionally dismissable
- [#161](https://github.com/influxdata/clockface/pull/161): Remove `.` from all `displayName` properties
- [#161](https://github.com/influxdata/clockface/pull/161): Add `id` to all components via `StandardProps`
- [#159](https://github.com/influxdata/clockface/pull/159): Port `ResourceList` and `ResourceCard` component families from InfluxDB
- [#157](https://github.com/influxdata/clockface/pull/157): Add display names to all components so they are legible despite minification in the React inspector
- [#155](https://github.com/influxdata/clockface/pull/155): Add markdown documentation for `Radio` component family
- [#153](https://github.com/influxdata/clockface/pull/154): Add markdown documentation for `IndexList` components
- [#142](https://github.com/influxdata/clockface/pull/142): Create a single definition for "Standard Types" across all components
- [#140](https://github.com/influxdata/clockface/pull/140): Add markdown documentation for Spinner components
- [#139](https://github.com/influxdata/clockface/pull/139): Add markdown documentation for `Label`
- [#138](https://github.com/influxdata/clockface/pull/138): Add markdown documentation for `ComponentSpacer`, `EmptyState`, `Grid`, and `ColorPicker`
- [#137](https://github.com/influxdata/clockface/pull/137): Improve documentation for dropdown family components
- [#137](https://github.com/influxdata/clockface/pull/137): Fix dropdown menu scrolling bug by updating `react-scrollbars-custom` dependency
- [#136](https://github.com/influxdata/clockface/pull/136): Fix appearance of inputs with icons
- [#131](https://github.com/influxdata/clockface/pull/131): Add markdown loading and readme addon to storybook

#### 0.0.15

- [#129](https://github.com/influxdata/clockface/pull/129): Introduce `IndexList` component family
- [#125](https://github.com/influxdata/clockface/pull/125): [Breaking] Refactor `Dropdown` component family

#### 0.0.14

- [#121](https://github.com/influxdata/clockface/pull/121): Introduce `Checkbox` type inputs

#### 0.0.13

- [#118](https://github.com/influxdata/clockface/pull/118): Organize documentation by dividing each component's stories into "Family" and "Examples"
- [#118](https://github.com/influxdata/clockface/pull/118): Remove child count validation in `Radio`
- [#118](https://github.com/influxdata/clockface/pull/118): Extend `FormDivider` to optionally render a horizontal rule inside itself
- [#118](https://github.com/influxdata/clockface/pull/118): Add `size` and `active` props to `SlideToggleLabel` to allow its appearance to match its associated `SlideToggle`
- [#117](https://github.com/influxdata/clockface/pull/117): Port `DraggableResizer` component family from InfluxDB and refactor to conform to Clockface patterns
- [#116](https://github.com/influxdata/clockface/pull/116): Write documentation for `Page` family of components
- [#114](https://github.com/influxdata/clockface/pull/114): Port `Label` component family from InfluxDB and refactor to conform to Clockface patterns
- [#112](https://github.com/influxdata/clockface/pull/112): Allow refs to be passed through in all `Button` components

#### 0.0.12

- [#108](https://github.com/influxdata/clockface/pull/108): Fix a handful of bugs relating to Buttons

#### 0.0.11

- [#101](https://github.com/influxdata/clockface/pull/101): Port `Overlay` component family from InfluxDB and refactor to conform to Clockface patterns
- [#97](https://github.com/influxdata/clockface/pull/97): Allow `Icon` to receive an optional colorization via `string` or `InfluxColors` enum
- [#94](https://github.com/influxdata/clockface/pull/94): Refactor `Button` component into "Base" and "Composed" variations for greater extensibility
- [#93](https://github.com/influxdata/clockface/pull/93): Use `className` prop in `ComponentSpacer`
- [#92](https://github.com/influxdata/clockface/pull/92): Ensure dropdown buttons disabled styles appear correctly
- [#91](https://github.com/influxdata/clockface/pull/91): Ensure that panel sizing styles do not affect nested panels
- [#88](https://github.com/influxdata/clockface/pull/88): Use JSX Preview add-on instead of exposing Story Source
- [#87](https://github.com/influxdata/clockface/pull/87): Add theming to Storybook that uses InfluxData brand colors

#### < 0.0.10

- The earth was still being formed
