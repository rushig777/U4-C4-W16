import styled from 'styled-components'

const Flex =styled.div`
display: flex;
flex-direction:column;
img{
  width:100%;
}`


export const ProductCard = ({ item }) => {
  console.log(item)

  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        <h2>{item.title}</h2>
        <img src={item.image} alt="" />
        <h1>{item.brand}</h1>
        <p>Price : {item.price}</p>
        {/* display item info here  */}
      </Flex>
    </>
  );
};
