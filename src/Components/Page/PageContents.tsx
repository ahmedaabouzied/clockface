// Libraries
import React, {Component, ReactNode} from 'react'
import classnames from 'classnames'

// Components
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

interface Props {
  /** Allows the page contents to fill the width of the screen */
  fullWidth: boolean
  /** Allows contents to fill the full height of the screen (used in presentation mode) */
  fullHeight?: boolean
  /** Allows contents to scroll on overflow */
  scrollable: boolean
  /** Test ID for Integration Tests */
  testID: string
}

export class PageContents extends Component<Props> {
  public static defaultProps = {
    fullHeight: false,
    scrollable: false,
    testID: 'page-contents',
  }

  public render() {
    const {scrollable, testID} = this.props

    if (scrollable) {
      return (
        <DapperScrollbars
          className={this.className}
          autoHide={false}
          autoSize={false}
          testID={testID}
        >
          <div className="page-contents--padding">{this.children}</div>
        </DapperScrollbars>
      )
    }

    return (
      <div className={this.className} data-testid={testID}>
        <div className="page-contents--padding">{this.children}</div>
      </div>
    )
  }

  private get className(): string {
    const {fullWidth, fullHeight} = this.props

    return classnames('page-contents', {
      'full-width': fullWidth,
      'full-height': fullHeight,
    })
  }

  private get children(): JSX.Element | JSX.Element[] | ReactNode {
    const {fullWidth, children} = this.props

    if (fullWidth) {
      return children
    }

    return <div className="page-contents--container">{children}</div>
  }
}
