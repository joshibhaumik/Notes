from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):

    STATUS = [
        ("public", "public"),
        ("private", "private")
    ]

    # you can add your own default profile picture uri
    DEFAULT_URL = "http://res.cloudinary.com/dqaiapvgm/image/upload/v1602228372/profile_picture_swxnoc.webp"

    name = models.CharField(max_length=100)
    width = models.FloatField()
    height = models.FloatField()
    points = models.TextField()
    status = models.CharField(max_length=10, choices=STATUS, default="public")
    creater = models.ForeignKey(
        User, related_name="notes", on_delete=models.CASCADE)
    shared_to = models.ManyToManyField(
        User, blank=True, related_name="shared_to_me")
    profile = models.CharField(max_length=250, default=DEFAULT_URL)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} by {self.creater}"
