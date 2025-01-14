// Libraries
import React, {PureComponent} from 'react'

// Types
import {StandardClassProps} from '../../Types'

interface Props extends StandardClassProps {
  /** Text to display in title */
  title: string
  /** Alternate text for screen readers */
  altText?: string
}

export class PageTitle extends PureComponent<Props> {
  public static readonly displayName = 'PageTitle'

  public static defaultProps = {
    testID: 'page-title',
  }

  public render() {
    const {title, altText, testID, id, style} = this.props

    return (
      <h1
        className={this.className}
        title={altText}
        data-testid={testID}
        id={id}
        style={style}
      >
        {title}
      </h1>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `cf-page--title ${className}` : 'cf-page--title'
  }
}
