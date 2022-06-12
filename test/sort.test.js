/**
 * @jest-environment jsdom
 */

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

test('sorts the 2022 products by price per unit with single units', () => {
  document.body.innerHTML = require('./groceries2022.html')

  window.sortTesco()

  const priceElements = document.body.querySelectorAll(
    '[data-auto="product-list"] [class*=price__subtext]',
  )

  const prices = Array.from(priceElements).map((el) => {
    return el.textContent.trim().replace(/\s*/g, '')
  })

  const expected = [
    '£2.78/kg',
    '£4.02/kg',
    '£4.69/kg',
    '£5.00/kg',
    '£5.00/kg',
    '£5.00/kg',
    '£5.00/kg',
    '£6.24/kg',
    '£6.88/kg',
    '£6.88/kg',
    '£7.34/kg',
    '£7.50/kg',
    '£7.50/kg',
    '£7.50/kg',
    '£7.50/kg',
    '£7.71/kg',
    '£7.71/kg',
    '£7.71/kg',
    '£8.66/kg',
    '£10.00/kg',
    '£10.00/kg',
    '£10.26/kg',
    '£11.25/kg',
    '£11.46/kg',
    '£11.46/kg',
    '£11.54/kg',
    '£12.50/kg',
    '£12.50/kg',
    '£12.50/kg',
    '£13.24/kg',
    '£15.00/kg',
    '£16.55/kg',
    '£17.65/kg',
    '£22.03/kg',
    '£25.43/kg',
    '£28.58/kg',
  ]

  expect(prices).toEqual(expected)
})

test('sorts the 2022 products by price per unit with mixed and unsorted units', () => {
  document.body.innerHTML = require('./groceries2022-mixed.html')

  window.sortTesco()

  const priceElements = document.body.querySelectorAll(
    '[data-auto="product-list"] [class*=price__subtext]',
  )

  const prices = Array.from(priceElements).map((el) => {
    return el.textContent.trim().replace(/\s*/g, '')
  })

  const expected = [
'£1.00/100sht',
    '£1.17/100sht',
    '£1.17/100sht',
    '£1.17/100sht',
    '£1.43/100sht',
    '£1.75/100sht',
    '£1.75/100sht',
    '£1.93/100sht',
    '£1.96/100sht',
    '£2.09/100sht',
    '£3.75/100sht',
    '£5.00/100sht',
    '£0.00/each',
    '£0.00/each',
    '£0.03/each',
    '£0.05/each',
    '£0.10/each',
    '£0.12/each',
    '£0.13/each',
    '£0.14/each',
    '£0.64/100g',
    '£0.64/100g',
    '£0.86/100g',
    '£1.00/100g',
    '£1.00/100g',
    '£1.15/100g',
    '£11.88/kg',
    '£1.29/100g',
    '£1.39/100g',
    '£1.39/100g',
    '£1.39/100g',
    '£1.51/100g',
    '£15.63/kg',
    '£4.59/100g',
    '£5.53/100g',
    '£5.53/100g',
    '£5.84/100g',
    '£5.84/100g',
    '£11.67/100g',
    '£11.67/100g',
    '£1.50/litre',
    '£0.20/100ml',
    '£3.75/litre',
    '£4.50/litre',
    '£4.50/litre',
    '£4.75/litre',
    '£5.00/litre',
    '£3.50/100ml',
  ]

  expect(prices).toEqual(expected)
})
