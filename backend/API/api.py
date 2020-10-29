from rest_framework import generics, permissions, response
from .serializers import UserSerializer
from django.contrib.auth.models import User
from .models import Note
from .serializers import NoteSerializer

class CreateNotesAPI(generics.GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = NoteSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        note = serializer.save()
        return response.Response(NoteSerializer(note, context=self.get_serializer_context).data)

class GetUserNotesAPI(generics.GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = NoteSerializer

    def get(self):
        pass

'''
class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = NoteSerializer

    def perform_create(self, serializer):
        serializer.save(creater = self.request.user)

class GetNotesViewSet(viewsets.ModelViewSet):
    pass


class UserViewSet(generics.GenericAPIView):
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        User.objects.all()
        serializer = UserSerializer().data
        return response.Response(serializer)


'''