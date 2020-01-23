from django.contrib import admin
from django.urls import path,include
from django.conf.urls import url

from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Accounts API')



urlpatterns = [
    path('admin/', admin.site.urls),
	
	#path to djoser end points
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
	
	#path to our account's app endpoints
    path("api/accounts/",include("accounts.urls")),
    
    path("docs/", schema_view)
]