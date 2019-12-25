from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from pool import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('pool.urls')),
    # path('api/', include(router.urls)),
    url(r'^rest-auth/', include('rest_auth.urls')),
     url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^rest-auth/registration/',include('rest_auth.registration.urls')),
]
