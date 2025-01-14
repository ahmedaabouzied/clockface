// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {Button, ButtonRef} from '../Composed/Button'
import {SquareButton, SquareButtonRef} from '../Composed/SquareButton'
import {ConfirmationButton} from '../Composed/ConfirmationButton'
import {DismissButton, DismissButtonRef} from '../Composed/DismissButton'
import {ButtonBase, ButtonBaseRef} from '../Base/ButtonBase'

// Types
import {
  PopoverType,
  ComponentColor,
  ComponentSize,
  IconFont,
  ButtonShape,
  ComponentStatus,
  ButtonType,
} from '../../../Types'

// Notes
import ButtonBaseReadme from './ButtonBase.md'
import ButtonReadme from './Button.md'
import SquareButtonReadme from './SquareButton.md'
import ConfirmationButtonReadme from './ConfirmationButton.md'
import DismissButtonReadme from './DismissButton.md'

const buttonBaseStories = storiesOf('Components|Buttons/Base', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const buttonComposedStories = storiesOf('Components|Buttons/Composed', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

buttonComposedStories.add(
  'StandardButton',
  () => {
    const buttonRef = createRef<ButtonRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(buttonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Button
          ref={buttonRef}
          text={text('text', 'Button Text')}
          onClick={() => alert('clicked')}
          icon={
            IconFont[
              select('icon', {None: 'none', ...mapEnumKeys(IconFont)}, 'None')
            ]
          }
          titleText={text('titleText', 'Title Text')}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Default')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          shape={
            ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
          }
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          active={boolean('active', false)}
          type={ButtonType[select('type', mapEnumKeys(ButtonType), 'Button')]}
          placeIconAfterText={boolean('placeIconAfterText', false)}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ButtonReadme),
    },
  }
)

buttonComposedStories.add(
  'SquareButton',
  () => {
    const buttonRef = createRef<SquareButtonRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(buttonRef.current)
      /* eslint-enable */
    }
    return (
      <div className="story--example">
        <SquareButton
          ref={buttonRef}
          onClick={() => alert('clicked')}
          icon={IconFont[select('icon', mapEnumKeys(IconFont), 'Zap')]}
          titleText={text('titleText', 'Title Text')}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Default')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          active={boolean('active', false)}
          type={ButtonType[select('type', mapEnumKeys(ButtonType), 'Button')]}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(SquareButtonReadme),
    },
  }
)

buttonComposedStories.add(
  'ConfirmationButton',
  () => (
    <div className="story--example">
      <ConfirmationButton
        confirmationButtonText={text(
          'confirmationButtonText',
          'Yes, Delete it'
        )}
        confirmationButtonColor={
          ComponentColor[
            select('confirmationColor', mapEnumKeys(ComponentColor), 'Danger')
          ]
        }
        confirmationLabel={text(
          'confirmationLabel',
          'Really delete your soul?'
        )}
        popoverColor={
          ComponentColor[
            select('popoverColor', mapEnumKeys(ComponentColor), 'Default')
          ]
        }
        popoverType={
          PopoverType[select('popoverType', mapEnumKeys(PopoverType), 'Solid')]
        }
        onConfirm={value => alert(`returnValue: ${value}`)}
        returnValue={text('returnValue', '')}
        icon={IconFont[select('icon', mapEnumKeys(IconFont), 'Trash')]}
        titleText={text('titleText', 'Title Text')}
        color={
          ComponentColor[select('color', mapEnumKeys(ComponentColor), 'Danger')]
        }
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        shape={
          ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
        }
        text={text('text', 'Delete Soul')}
        status={
          ComponentStatus[
            select('status', mapEnumKeys(ComponentStatus), 'Default')
          ]
        }
      />
    </div>
  ),
  {
    readme: {
      content: marked(ConfirmationButtonReadme),
    },
  }
)

buttonComposedStories.add(
  'DismissButton',
  () => {
    const buttonRef = createRef<DismissButtonRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(buttonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div
          style={{
            width: '200px',
            height: '100px',
            position: 'relative',
            backgroundColor: '#292933',
          }}
        >
          <DismissButton
            ref={buttonRef}
            onClick={() => alert('Clicked!')}
            color={
              ComponentColor[
                select('color', mapEnumKeys(ComponentColor), 'Danger')
              ]
            }
            size={
              ComponentSize[
                select('size', mapEnumKeys(ComponentSize), 'ExtraSmall')
              ]
            }
            status={
              ComponentStatus[
                select('status', mapEnumKeys(ComponentStatus), 'Default')
              ]
            }
          />
        </div>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(DismissButtonReadme),
    },
  }
)

buttonBaseStories.add(
  'Base Button',
  () => {
    const buttonRef = createRef<ButtonBaseRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(buttonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <ButtonBase
          ref={buttonRef}
          onClick={() => alert('clicked')}
          titleText={text('titleText', 'Title Text')}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Default')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          shape={
            ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
          }
          status={
            ComponentStatus[
              select('status', mapEnumKeys(ComponentStatus), 'Default')
            ]
          }
          active={boolean('active', false)}
          type={ButtonType[select('type', mapEnumKeys(ButtonType), 'Button')]}
        >
          {text('text', 'Button Text')}
        </ButtonBase>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ButtonBaseReadme),
    },
  }
)
