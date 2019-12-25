from django.conf.urls import url
from django.urls import path
from . import views
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'booking', views.BookingList)
router.register(r'register', views.RegisterList)

urlpatterns = router.urls