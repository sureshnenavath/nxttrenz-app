import AllProductsSection from '../AllProductsSection'
import PrimeDealsSection from '../PrimeDealsSection'
import Footer from '../Footer'

import Header from '../Header'

import './index.css'

function Products() {
  return (
    <>
      <Header />
      <div className="product-sections">
        <PrimeDealsSection />
        <AllProductsSection />
      </div>
      <Footer />
    </>
  )
}

export default Products
