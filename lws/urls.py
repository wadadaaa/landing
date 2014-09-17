from django.conf import settings
from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
                       # Examples:
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^$', 'joins.views.home', name='home'),
                       #url(r'^testhome$', 'lws.views.testhome', name='testhome'),
                       url(r'^(?P<ref_id>.*)$',
                           'joins.views.share', name='share'),

                       #url(r'^home2/$', 'lws.views.home2', name='home'),
                       # url(r'^blog/', include('blog.urls')),


                       )

# if settings.DEBUG:
#     import debug_toolbar
#     urlpatterns += patterns('',
#                             url(r'^__debug__/', include(debug_toolbar.urls)),
#                             )
