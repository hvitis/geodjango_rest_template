from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from accounts.models import UserProfile
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    # def __init__(self, second):
    #     print(self, second)
    # @classmethod   
    # def validate(self, attrs):
    #     data = super().validate(attrs)
    #     refresh = self.get_token(self.user)
    #     data['refresh'] = str(refresh)
    #     data['access'] = str(refresh.access_token)

    #     # Add extra responses here
    #     user_profile = UserProfile.objects.get(id=self.user.id)
    #     data['uuid'] = str(user_profile.unique_id)
    #     return data
    
    # @classmethod
    # def get_token(cls, user):
    #     token = super(MyTokenObtainPairSerializer, cls).get_token(user)
    #     token['email'] = user.email
    #     return token
    
    @classmethod
    def get_token(cls, user):
        token = super(CustomTokenObtainPairSerializer, cls).get_token(user)
        print(f'User {user.username} with an ID: {user.id} has just obtained TOKEN.')
        user_profile = UserProfile.objects.get(id=user.id)
        # json.dumps(user_profile.unique_id, cls=UUIDEncoder)

        # Add custom claims
        token['uuid'] = str(user_profile.unique_id)
        # token['printer'] = user.id

        # ...

        return token
        

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
