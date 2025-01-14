// Libraries
import React, {forwardRef} from 'react'
import _ from 'lodash'
import classnames from 'classnames'

// Types
import {
  Gradients,
  InfluxColors,
  StandardFunctionProps,
  ComponentColor,
} from '../../Types'

// Utils
import {generatePanelStyle, calculateTextColorFromBackground} from '../../Utils'

// Components
import {DismissButton} from '../Button/Composed/DismissButton'

// Styles
import './Panel.scss'

export interface PanelProps extends StandardFunctionProps {
  /** Optional gradient theme of panel, supercedes backgroundColor prop */
  gradient?: Gradients
  /** Optional background color of panel */
  backgroundColor?: InfluxColors | string
  /** If a function is passed in a dismiss button will appear on the Panel */
  onDismiss?: () => void
  /** Applies to the dismiss button rendered when onDismiss is present */
  dismissButtonColor?: ComponentColor
}

export type PanelRef = HTMLDivElement

export const PanelRoot = forwardRef<PanelRef, PanelProps>(
  (
    {
      id,
      style,
      testID = 'panel',
      gradient,
      children,
      className,
      onDismiss,
      backgroundColor = InfluxColors.Castle,
      dismissButtonColor = ComponentColor.Primary,
    },
    ref
  ) => {
    const textColor = calculateTextColorFromBackground(
      backgroundColor,
      gradient
    )

    const panelClass = classnames('cf-panel', {
      [`${className}`]: className,
      'cf-panel__gradient': gradient,
      [`cf-panel__${textColor}-text`]: textColor,
    })

    const dismissButton = onDismiss && (
      <DismissButton onClick={onDismiss} color={dismissButtonColor} />
    )

    const panelStyle = generatePanelStyle(backgroundColor, gradient, style)

    return (
      <div
        id={id}
        ref={ref}
        style={panelStyle}
        data-testid={testID}
        className={panelClass}
      >
        {dismissButton}
        {children}
      </div>
    )
  }
)

PanelRoot.displayName = 'Panel'
