import GlobalStyled from './GlobalStyled';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { getAllProducts } from './service';


function App() {
  const [korpa, setKorpa] = useState([])
  const [products, setProducts] = useState([])
  const [inputSearch, setInputSearch] = useState("")
  const [brands, setBrands] = useState([]);
  const [options, setOptions] = useState("")
  const [sorted, setSorted] = useState([])

  let filterdProducts = products.filter(product => product.name.toLowerCase().includes(inputSearch.toLowerCase()) && product.brand.includes(options))
  let sortirani = sorted.slice(0, 6)

  useEffect(() => {
    getAllProducts().then(res => {
      let allProducts = res.data
      let brands = allProducts.map(product => product.brand)
      // console.log(brands)

      let newBrands = [...new Set(brands)]
      // console.log(newBrands)



      setProducts(allProducts)
      setBrands(newBrands)
      setSorted([...allProducts])
    })

  }, [])

  return (
    <div>
      <GlobalStyled />
      <Navbar products={products} setInputSearch={setInputSearch} brands={brands} setOptions={setOptions} filterdProducts={filterdProducts} setKorpa={setKorpa} korpa={korpa} sortirani={sortirani} />

    </div>
  );
}

export default App;
