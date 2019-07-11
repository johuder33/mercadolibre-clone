import React from 'react'
import Link from 'next/link'
import { Topbar } from './Topbar';

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <div>
    <Topbar />
  </div>
)

export default Nav
