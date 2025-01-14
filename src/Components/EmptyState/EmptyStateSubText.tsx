// Libraries
import React, {Component} from 'react'

// Types
import {StandardClassProps} from '../../Types'

interface Props extends StandardClassProps {
  /** Secondary text to be displayed when no elements are loaded */
  text: string
}

export class EmptyStateSubText extends Component<Props> {
  public static readonly displayName = 'EmptyStateSubText'

  public static defaultProps = {
    testID: 'empty-state--sub-text',
  }

  render() {
    const {text, testID, id, style} = this.props

    return (
      <p className={this.className} data-testid={testID} id={id} style={style}>
        {text}
      </p>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className
      ? `cf-empty-state--sub-text ${className}`
      : 'cf-empty-state--sub-text'
  }
}
