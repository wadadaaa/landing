from django.shortcuts import render
from django.views.generic import View, ListView, DetailView, UpdateView, CreateView


from sections.models import (
    About

)


class AboutList(ListView):
    model = About
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
        context = super(AboutList, self).get_context_data(**kwargs)
        return context
