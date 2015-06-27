from django.shortcuts import render
from django.views.generic import View, ListView, DetailView, UpdateView, CreateView


from product.models import (
    Product

)


class ProductMixin(object):
    model = Product


class ProductList(ProductMixin, ListView):
    pass
