import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Box} from 'rebass'

export const BaseContainer = ({ children, flex = false, ...rest}) =>{
    let Components = flex ? flex : Box
    return <Components {...rest}>{children}</Components>
}

BaseContainer.PropTypes = {
flex: PropTypes.bool,
as: PropTypes.string,
children: PropTypes.node.isRequired

}