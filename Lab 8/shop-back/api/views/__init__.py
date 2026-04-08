# ACTIVE LEVEL: GENERICS

from .generics import (
    CategoryDetailAPIView,
    CategoryListAPIView,
    CategoryProductsAPIView,
    ProductDetailAPIView,
    ProductListAPIView,
)

product_list_view = ProductListAPIView.as_view()
product_detail_view = ProductDetailAPIView.as_view()
category_list_view = CategoryListAPIView.as_view()
category_detail_view = CategoryDetailAPIView.as_view()
category_products_view = CategoryProductsAPIView.as_view()