import React from 'react'
import Link from 'next/link'

import {
  Item,
  Container,
  List,
  NavLink,
} from './styles'

const MIN_ITEMS = 4

const Nav = ({ items, selected, ...otherProps }) => {
  const pathname = document?.location?.pathname

  return (
    <Container {...otherProps}>
      <List>
        {items
          .map(({ name, href }) => (
            <Item
              active={href === '/' 
                ? pathname === href
                : pathname.startsWith(href)}
              expanded={items?.length < MIN_ITEMS}
              key={href}
            >
              <Link href={href}>
                <NavLink>{name}</NavLink>
              </Link>
            </Item>
          ))}
      </List>
    </Container>
  )
}

export default Nav
