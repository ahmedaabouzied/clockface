// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {PageHeader} from './PageHeader'
import {PageTitle} from './PageTitle'
import {PageSubTitle} from './PageSubTitle'
import {PageContents} from './PageContents'

// Types
import {StandardClassProps} from '../../Types'

// Styles
import './Page.scss'

interface Props extends StandardClassProps {
  /** Use this prop to update document.title when the page first renders &  on subsequent updates */
  titleTag?: string
}

export class Page extends Component<Props> {
  public static readonly displayName = 'Page'

  public static defaultProps = {
    testID: 'page',
    presentationMode: false,
  }

  public static Header = PageHeader
  public static Title = PageTitle
  public static SubTitle = PageSubTitle
  public static Contents = PageContents

  public componentDidMount() {
    const {titleTag} = this.props

    if (titleTag) {
      document.title = `${titleTag}`
    }
  }

  public componentDidUpdate(prevProps: Props) {
    if (prevProps.titleTag !== this.props.titleTag && this.props.titleTag) {
      document.title = `${this.props.titleTag}`
    }
  }

  public render() {
    const {children, testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-page', {
      [`${className}`]: className,
    })
  }
}
