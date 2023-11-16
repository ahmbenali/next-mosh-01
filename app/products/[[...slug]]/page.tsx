interface Props {
  params: { slug: string[] };
  // query strings parameter
  searchParams: { sortOrder: string };
}

function ProductPage({ params: { slug }, searchParams: { sortOrder } }: Props) {
  // if we pass no params ('..../products') -> result 404 page
  // to omit this make slug param optional -> wrap it betw. [[...slug]]
  return (
    <div>
      Product page of {slug.join("/")} sorted by {sortOrder}
    </div>
  );
}

export default ProductPage;
