import axiosLibrary from 'axios'
import { isNull, kebabCase, keyBy, tail } from 'lodash'

export const axios = axiosLibrary.create()

export const extractCarouselsMetadata = data =>
  keyBy(
    data
      .filter(
        carousel => !isNull(carousel.order) && carousel.carousel_flg === 'Y',
      )
      .map((carousel, index) => {
        const name = tail(carousel.name.split('-'))
          .map(chunk => chunk.trim())
          .join(' ')
        return { id: carousel.id, name, slug: `${index}-${kebabCase(name)}` }
      })
      .sort((a, b) => a.order - b.order),
    'slug',
  )

export const extractCategoriesMetadata = data => keyBy(
    data
      .filter(
        category => !isNull(category.order) && category.carousel_flg === 'N',
      )
      .map(category => {
        const name = tail(category.name.split('-'))
          .map(chunk => chunk.trim())
          .join(' ')
        return {
          id: category.id,
          name,
          slug: kebabCase(name),
          order: category.order,
          hideFromMain: category.hideFromMain,
        }
      })
      .sort((a, b) => a.order - b.order),
    'slug',
  )
