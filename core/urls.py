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

### DJOSER URLS

# auth/users/
# auth/users/me/
# auth/users/confirm/
# auth/users/resend_activation/
# auth/users/set_password/
# auth/users/reset_password/
# auth/users/reset_password_confirm/
# auth/users/set_username/
# auth/users/reset_username/
# auth/users/reset_username_confirm/
# auth/token/login/ (Token Based Authentication)
# auth/token/logout/ (Token Based Authentication)
# auth/jwt/create/ (JSON Web Token Authentication)
# auth/jwt/refresh/ (JSON Web Token Authentication)
# auth/jwt/verify/ (JSON Web Token Authentication)