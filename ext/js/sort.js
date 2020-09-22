(function () {
  const knownUnits = [
    '/1g',
    '/10g',
    '/100g',
    '/kg',
    '/1ml',
    '/10ml',
    '/100ml',
    '/litre',
    '/each',
    'none',
  ]

  function normalize(price, unit, name) {
    if (!knownUnits.includes(unit)) {
      console.log(`Unknown unit "${unit}"`)
    }

    // todo: Make this more generic
    if (unit == '/1g' || unit == '/1ml') {
      price = price * 1000
      unit = unit == '/1g' ? '/kg' : '/litre'
    } else if (unit == '/10g' || unit == '/10ml') {
      price = price * 100
      unit = unit == '/10g' ? '/kg' : '/litre'
    } else if (unit == '/100g' || unit == '/100ml') {
      price = price * 10
      unit = unit == '/100g' ? '/kg' : '/litre'
    }

    return [price, unit, name]
  }

  function grabProductInfo(productNode) {
    const infoNode = productNode.querySelector('.price-per-quantity-weight')
    const priceNode = infoNode?.querySelector('[data-auto="price-value"]')
    const price = parseFloat(priceNode?.textContent.trim() || 0)
    const unit = infoNode?.querySelector('.weight').textContent.trim() || 'none'
    const nameNode = productNode?.querySelector(
      '[data-auto="product-tile--title"]',
    )
    const name = nameNode.textContent.trim() || 'unknown'

    return normalize(price, unit, name)
  }

  const list = document.querySelector('[data-auto="product-list"]')
  const products = document.querySelectorAll('[data-auto="product-list"] > li')
  const productsArray = Array.from(products).sort(function (a, b) {
    const [aPrice, aUnit, aName] = grabProductInfo(a)
    const [bPrice, bUnit, bName] = grabProductInfo(b)

    if (!knownUnits.includes(bUnit)) {
      console.log('Unknown unit', bUnit)
    }

    // Sort by price
    if (aUnit == bUnit) {
      if (aPrice > bPrice) {
        return 1
      } else if (aPrice == bPrice) {
        return aName > bName ? 1 : -1
      } else {
        return -1
      }
    }

    // Put none at the end
    if (aUnit == 'none') {
      return 1
    } else if (bUnit == 'none') {
      return -1
    }

    // Sort by unit
    return aUnit > bUnit ? 1 : -1
  })

  productsArray.forEach(function (product) {
    list.appendChild(product)
  })

  console.log('Sorting complete!')
})()
