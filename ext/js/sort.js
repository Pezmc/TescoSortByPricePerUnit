const list = document.querySelector('[data-auto="product-list"]')
const products = document.querySelectorAll('[data-auto="product-list"] > li')
const productsArray = Array.from(products).sort(function (a, b) {
  const aNode = a.querySelector('.price-per-quantity-weight')
  const aPrice = parseFloat(
    aNode.querySelector('[data-auto="price-value"]').textContent,
  )
  const aUnit = aNode.querySelector('.weight').textContent

  const bNode = b.querySelector('.price-per-quantity-weight')
  const bPrice = parseFloat(
    bNode.querySelector('[data-auto="price-value"]').textContent,
  )
  const bUnit = bNode.querySelector('.weight').textContent

  let aPriceNormalised, aUnitNormalised, bPriceNormalised, bUnitNormalised
  if (aUnit == '/100g' || aUnit == '/100ml') {
    aPriceNormalised = aPrice * 10
    aUnitNormalised = aUnit == '/100g' ? '/kg' : '/litre'
  } else {
    aPriceNormalised = aPrice
    aUnitNormalised = aUnit
  }

  if (bUnit == '/100g' || bUnit == '/100ml') {
    bPriceNormalised = bPrice * 10
    bUnitNormalised = bUnit == '/100g' ? '/kg' : '/litre'
  } else {
    bPriceNormalised = bPrice
    bUnitNormalised = bUnit
  }

  if (
    !['/100g', '/kg', '/100ml', '/litre', '/each'].includes(aUnitNormalised)
  ) {
    console.log('Unknown unit', aUnitNormalised)
  }

  if (
    !['/100g', '/kg', '/100ml', '/litre', '/each'].includes(bUnitNormalised)
  ) {
    console.log('Unknown unit', bUnitNormalised)
  }

  if (aUnitNormalised == bUnitNormalised) {
    return aPriceNormalised > bPriceNormalised ? 1 : -1
  }

  return (
    aPriceNormalised > bPriceNormalised && aUnitNormalised > bUnitNormalised
  )
})

productsArray.forEach(function (product) {
  list.appendChild(product)
})

console.log('Done')
