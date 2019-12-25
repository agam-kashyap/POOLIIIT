from rest_framework import serializers
from pool.models import Booking, Register

class BookingSerializer (serializers.ModelSerializer):
    class Meta:
        model = Booking;
        fields = '__all__'

class RegisterSerializer (serializers.ModelSerializer):
    class Meta:
        model = Register;
        fields = '__all__'
        