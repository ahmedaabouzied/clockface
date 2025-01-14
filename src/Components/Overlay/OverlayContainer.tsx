// Libraries
import React, {PureComponent, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {StandardClassProps} from '../../Types'

interface Props extends StandardClassProps {
  /** Pixel width maximum for overlay */
  maxWidth: number
}

export class OverlayContainer extends PureComponent<Props> {
  public static readonly displayName = 'OverlayContainer'

  public static defaultProps = {
    maxWidth: 800,
    testID: 'overlay--container',
  }

  public render() {
    const {children, className, testID, id} = this.props

    return (
      <div
        className={classnames('cf-overlay--container', {
          [`${className}`]: className,
        })}
        data-testid={testID}
        style={this.style}
        id={id}
      >
        {children}
      </div>
    )
  }

  private get style(): CSSProperties {
    const {maxWidth, style} = this.props

    return {maxWidth: `${maxWidth}px`, ...style}
  }
}
