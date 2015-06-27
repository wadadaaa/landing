from django.contrib import admin
from django.conf import settings
from sections.models import (
    Slider,
    About,
)
from django.contrib.auth.admin import UserAdmin


class SliderAdmin(admin.ModelAdmin):
    model = Slider


class AboutAdmin(admin.ModelAdmin):
    model = About

admin.site.register(Slider, SliderAdmin)
admin.site.register(About, AboutAdmin)