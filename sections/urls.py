from django.conf.urls import patterns, url
from .views import *


from django.conf.urls import url
from sections.views import About

urlpatterns = [
    url(r'^aboutus/', AboutList.as_view()),
]