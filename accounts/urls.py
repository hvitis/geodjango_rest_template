from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserProfileFullListView, UserProfileFullDetailView, UsersLocation, SocialMediaView, ProfileImageUploadView
# UserProfileListCreateView, UserProfileDetailCreateView

urlpatterns = [
    # GETs all user profiles and their NESTED objects
    path("detailed-profiles",UserProfileFullListView.as_view(),name="detailed-profiles"),
    # GETs single LOGGED user profile and his NESTED objects 
    path("detailed-profiles/<int:pk>",UserProfileFullDetailView.as_view(),name="detailed-profile"),

    # TODO: Make post and update endpoint
    path("detailed-profiles/<int:pk>/location", UsersLocation.as_view(), name="location"),
    path("detailed-profiles/<int:pk>/social-media", SocialMediaView.as_view(), name="social-media"),

    path("detailed-profiles/<int:pk>/profile-image", ProfileImageUploadView.as_view(), name="profile-image"),

    # path("printers",PrinterListView.as_view(),name="printers"),
    # path("printers/<int:pk>",PrinterDetailView.as_view(),name="printer"),

    # path("locations/<int:pk>",SetLocationView.as_view(),name="locations")
    # # GETs all user profiles and their NESTED objects
    # path("profiles",UserProfileListCreateView.as_view(),name="profiles"),
    # # GETs single LOGGED user profile and his NESTED objects 
    # path("profile/<int:pk>",UserProfileDetailCreateView.as_view(),name="profile"),
]