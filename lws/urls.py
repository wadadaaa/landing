from django.conf import settings
from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^$', 'joins.views.home', name='home'),
                       url(r'^$', include('sections.urls')),
                       url(r'^$', include('product.urls')),
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


from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()