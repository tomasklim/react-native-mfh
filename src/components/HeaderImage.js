import React from 'react'
import { Image } from 'react-native'

const imageSource = require('../../assets/logo_text.png')

const Header = () => (
  <Image resizeMode="contain" source={imageSource} style={{ maxHeight: 14 }} />
)

export default Header
