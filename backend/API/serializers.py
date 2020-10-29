from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Note

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'notes')

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = "__all__"

    def create(self, validated_data):
        note = Note.objects.create(
            name=validated_data['name'],
            width=validated_data['width'],
            height=validated_data['height'],
            points=validated_data['points'],
            creater=validated_data['creater'],
            status=validated_data['status']
        )

        return note


    