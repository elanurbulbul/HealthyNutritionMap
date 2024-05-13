import React from 'react';


function SaglikliMi() {
  const productsHTMLUrl = '/products.html';

  return (
    <iframe src={productsHTMLUrl} title="Sağlık Sayfası" width="100%" height="1000px" />
  );
}

export default SaglikliMi;
