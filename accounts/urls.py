from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserProfileListView, UserProfileDetailView, UserBasicInfoView, UsersLocationView, SocialMediaView, ProfileImageUploadView, ClosestUserView, NearbyUsersListView
# from .custom_jwt_tokens import CustomTokenObtainPairView
# UserProfileListCreateView, UserProfileDetailCreateView

urlpatterns = [
    # Show all accounts
    path("accounts",UserProfileListView.as_view(),name="accounts"),
    # Show one account
    path("accounts/<str:uuid>",UserProfileDetailView.as_view(),name="account"),
    # Update and show one accounts name phone descrptions etc
    path("accounts/<int:pk>/basic-info", UserBasicInfoView.as_view(), name="basic-info"),
    # Update and show one accounts location
    path("accounts/<int:pk>/location", UsersLocationView.as_view(), name="location"),
    # Update and show one accounts socialmedia
    path("accounts/<int:pk>/social-media", SocialMediaView.as_view(), name="social-media"),
    # Update and show one accounts profile image
    path("accounts/<int:pk>/profile-image", ProfileImageUploadView.as_view(), name="profile-image"),
    # Show nearby accounts
    path("nearby-accounts", NearbyUsersListView.as_view(), name="nearby-accounts"),
    # Show nearby user
    path("closest-user", ClosestUserView.as_view(), name="closest-accounts"),

    # path("jwt/create", CustomTokenObtainPairView.as_view(), name="jwt"),
    # path("printers",PrinterListView.as_view(),name="printers"),
    # path("printers/<int:pk>",PrinterDetailView.as_view(),name="printer"),

    # path("locations/<int:pk>",SetLocationView.as_view(),name="locations")
    # # GETs all user profiles and their NESTED objects
    # path("profiles",UserProfileListCreateView.as_view(),name="profiles"),
    # # GETs single LOGGED user profile and his NESTED objects 
    # path("profile/<int:pk>",UserProfileDetailCreateView.as_view(),name="profile"),
]