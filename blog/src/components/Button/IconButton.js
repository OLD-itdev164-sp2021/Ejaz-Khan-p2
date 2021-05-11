import React from 'react'
import PropTypes from 'prop-types'
import {BaseButton} from './BaseButton'
import styled from 'styled-components'

const StyledButton = styled{BaseButton}`
${({theme, variant}) => theme.variants.IconButton[variant || 'primary']}
`

export const IconButton = styled(({icon, ...rest}) => {
let clone = react.cloneElement(icon, rest)
return <StyledButton as={clone.type} {...rest} className={rest.className} />

})

IconButton.defaultProps = {
    size: 24
}

IconButton.PropTypes = {
    icon: PropTypes.node.isRequired,
varian: PropTypes.string
}