from pool.models import Register, Booking
from rest_framework import viewsets, permissions
from .serializers import BookingSerializer, RegisterSerializer

#Booking Viewset

class BookingViewSet(viewsets.ModelViewSet):
    queryset = BookingSerializer.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = BookingSerializer