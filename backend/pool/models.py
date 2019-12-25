from django.db import models

# Create your models here.

class Register(models.Model):
    firstname = models.CharField(max_length=128)
    lastname = models.CharField(max_length=128)
    email = models.EmailField(max_length = 254)
    password = models.CharField(max_length=50)
    username = models.CharField(max_length=128)
    phone = models.CharField(max_length=10)
    id = models.IntegerField(primary_key=True)

    def __str__(self):
    	return self.username
class Booking(models.Model):
    time = models.TimeField()
    flexibility_before = models.TimeField()
    flexibility_after = models.TimeField()
    date = models.DateField()
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(
        to='Register', 
        on_delete=models.CASCADE,
        related_name='user',
        null=True,
        blank=True
        )

    def __str__(self):
        return self.firstname+" "+self.lastname