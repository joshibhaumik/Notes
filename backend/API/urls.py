from rest_framework import routers
from django.urls import path
from .api import CreateNotesAPI

router = routers.DefaultRouter()

# router.register("notes", NoteViewSet, 'notes')
# router.register("users", UserViewSet, 'users')

urlpatterns = [
    path("create_note/", CreateNotesAPI.as_view())
]