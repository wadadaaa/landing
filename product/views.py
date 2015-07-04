from django.shortcuts import render
from django.views.generic import View, ListView, DetailView, UpdateView, CreateView


from product.models import (
    Product

)


class ProductList(ListView):
    model = Product
    template_name = 'home.html'
