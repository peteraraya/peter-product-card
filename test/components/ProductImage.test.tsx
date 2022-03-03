import * as React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from "../../src/components";
import { product2 } from '../data/products';
describe('ProductImage', () => { 

  test('debe mostrar el componente ', () => {
    const wrapper = renderer.create(
      <ProductImage img={`https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png`} />
    );
    expect(wrapper).toMatchSnapshot();
    // console.log(wrapper.toJSON());

  });


  test('debe mostrar el componente correctamente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2} >
        {() => <ProductImage />}
      </ProductCard>
    );
    expect(wrapper).toMatchSnapshot();

  });

 })