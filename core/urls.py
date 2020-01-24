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

# /users/
# /users/me/
# /users/confirm/
# /users/resend_activation/
# /users/set_password/
# /users/reset_password/
# /users/reset_password_confirm/
# /users/set_username/
# /users/reset_username/
# /users/reset_username_confirm/
# /token/login/ (Token Based Authentication)
# /token/logout/ (Token Based Authentication)
# /jwt/create/ (JSON Web Token Authentication)
# /jwt/refresh/ (JSON Web Token Authentication)
# /jwt/verify/ (JSON Web Token Authentication)