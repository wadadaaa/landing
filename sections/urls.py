from django.conf.urls import patterns, url
from .views import *


from django.conf.urls import url
from sections.views import AboutList

urlpatterns = [
    url(r'^$', AboutList.as_view(), name='about-list'),
    
]