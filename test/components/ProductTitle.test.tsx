import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('debe mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Titulo personalizado" className="custom-class" />
    );

    expect(wrapper).toMatchSnapshot();
    // console.log(wrapper.toJSON());
  });

  test('debe mostrar el componente correctamente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1} initialValues={{ count: 6 }}>
        {() => <ProductTitle />}
      </ProductCard>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
