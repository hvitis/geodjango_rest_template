from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserProfileListView, UserProfileDetailView, UserBasicInfoView, UsersLocationView, SocialMediaView, ProfileImageUploadView, ClosestUserView, NearbyUsersListView
# from .custom_jwt_tokens import CustomTokenObtainPairView
# UserProfileListCreateView, UserProfileDetailCreateView

urlpatterns = [
    # Show all accounts
    path("accounts",UserProfileListView.as_view(),name="accounts"),
    # Show one account
    path("accounts/<str:uuid>",UserProfileDetailView.as_view(),name="single-account"),
    # Update and show one accounts name phone descrptions etc
    path("accounts/<uuid:uuid>/basic-info", UserBasicInfoView.as_view(), name="basic-info"),
    # Update and show one accounts location
    path("accounts/<uuid:uuid>/location", UsersLocationView.as_view(), name="location"),
    # Update and show one accounts socialmedia
    path("accounts/<uuid:uuid>/social-media", SocialMediaView.as_view(), name="social-media"),
    # Update and show one accounts profile image
    path("accounts/<uuid:uuid>/profile-image", ProfileImageUploadView.as_view(), name="profile-image"),
    # Show nearby accounts
    path("nearby-accounts", NearbyUsersListView.as_view(), name="nearby-accounts"),
    # Show nearby user
    path("closest-user", ClosestUserView.as_view(), name="closest-accounts"),
    
]