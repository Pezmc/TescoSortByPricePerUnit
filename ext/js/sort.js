(function () {
  const knownUnits = [
    '/10g',
    '/100g',
    '/kg',
    '/10ml',
    '/100ml',
    '/litre',
    '/each',
    'none',
  ]

  function normalize(price, unit) {
    if (!knownUnits.includes(unit)) {
      console.log('Unknown unit', unit)
    }

    // todo: Make this more generic
    if (unit == '/10g' || unit == '/10ml') {
      price = price * 100
      unit = unit == '/10g' ? '/kg' : '/litre'
    } else if (unit == '/100g' || unit == '/100ml') {
      price = price * 10
      unit = unit == '/100g' ? '/kg' : '/litre'
    }

    return [price, unit]
  }

  function grabProductInfo(productNode) {
    const infoNode = productNode.querySelector('.price-per-quantity-weight')
    const priceNode = infoNode?.querySelector('[data-auto="price-value"]')
    const price = parseFloat(priceNode?.textContent || 0)
    const unit = infoNode?.querySelector('.weight').textContent || 'none'

    return normalize(price, unit)
  }

  const list = document.querySelector('[data-auto="product-list"]')
  const products = document.querySelectorAll('[data-auto="product-list"] > li')
  const productsArray = Array.from(products).sort(function (a, b) {
    const [aPrice, aUnit] = grabProductInfo(a)
    const [bPrice, bUnit] = grabProductInfo(b)

    if (!knownUnits.includes(bUnit)) {
      console.log('Unknown unit', bUnit)
    }

    // Sort by price
    if (aUnit == bUnit) {
      return aPrice > bPrice ? 1 : -1
    }

    // Put none at the end
    if (aUnit == 'none') {
      return 1
    } else if (bUnit == 'none') {
      return -1
    }

    // Sort by unit
    return aUnit > bUnit
  })

  productsArray.forEach(function (product) {
    list.appendChild(product)
  })

  console.log('Sorted done')
})()
