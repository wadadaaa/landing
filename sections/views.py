from django.shortcuts import render
from django.views.generic import View, ListView, DetailView, UpdateView, CreateView, TemplateView
from django.template import Context

from sections.models import (
    About,
    Slider

)


class SectionsView(TemplateView):
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
    	context = super(SectionsView, self).get_context_data(**kwargs)
        context['about_list'] = About.objects.all()
        context['slider_list'] = Slider.objects.all()
        return context

