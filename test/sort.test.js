const { describe, expect, test } = require('@jest/globals')

test('sorts the products by price per unit', () => {
  document.body.innerHTML = require('./groceries.html')

  require('../ext/js/sort.js')

  const priceElements = document.body.querySelectorAll(
    '[data-auto="product-list"] .price-per-quantity-weight',
  )

  const prices = Array.from(priceElements).map((el) => {
    return el.textContent.trim().replace(/\s*/g, '')
  })

  const expected = [
    '£0.08/each',
    '£0.09/each',
    '£0.11/each',
    '£0.12/each',
    '£0.12/each',
    '£0.12/each',
    '£0.12/each',
    '£0.12/each',
    '£0.13/each',
    '£0.13/each',
    '£0.13/each',
    '£0.16/each',
    '£0.17/each',
    '£0.18/each',
    '£0.18/each',
    '£0.20/each',
    '£0.23/each',
    '£0.25/each',
    '£0.32/each',
    '£1.00/each',
    '£0.12/kg',
    '£0.39/kg',
    '£0.04/100g',
    '£0.07/100g',
    '£0.07/100g',
    '£0.07/100g',
    '£0.11/100g',
    '£0.12/100g',
    '£0.13/100g',
    '£0.13/100g',
    '£0.14/100g',
    '£0.18/100g',
    '£0.18/100g',
    '£0.40/100g',
    '£0.13/10g',
    '£5.00/100g',
    '£0.08/1g',
    '£0.11/1g',
    '£0.12/1g',
    '£0.13/litre',
    '£0.38/litre',
    '£0.12/100ml',
    '£0.25/100ml',
    '£0.12/10ml',
    '£0.13/10ml',
    '£0.05/1ml',
    '£0.15/1ml',
  ]

  expect(prices).toEqual(expected)
})
