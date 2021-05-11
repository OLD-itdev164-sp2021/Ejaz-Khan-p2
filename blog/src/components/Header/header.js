import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from `styled-components`
import {Search} from 'styled-icons/feather'
import {H1} from '../Heading'
import {IconButton} from '../Button'
import {Section} from '../Section'


const Outer = styled.header`
background: ${theme=> theme.header.primary.backgroundColor};
margin-bottom: 1.45rem;
`

cosnt Inner = styled.div`
margin: 0px auto;
max-width: 960px;
padding: 1.45rem 1.0875rem;
`

const H1= styled.h1`
margin: 0px;
`

const StyledLink = styled(Link)`
color: white;
text-decoration: none;
&:hover{
  color: purple;
}
`

const Header = ({ siteTitle }) => (
  <Outer> 
  <Inner> 
  <Section flex> 
  <Section width={11/12}> 
  <H1> 
  <StyledLink to="/"> 
  {siteTitle}
  </StyledLink>
  </H1>
  </Section>
  <Section width={1/12}>
  <IconButton icon= {<Search />} variant='contrast' />
</Section>
</Section>
  </Inner>
  </Outer>
)

    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `overline`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
