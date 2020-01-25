{
	"info": {
		"_postman_id": "5476290e-b7d2-495b-abb8-c1c30a3edc8c",
		"name": "ToBePrint3D",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "JWT Create",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "80ea7732-614c-4cbc-b929-8547696e7167",
						"exec": [
							"pm.test(\"Setting global JWT\", function () {",
							"    var jsonData = pm.response.json();",
							"    pm.globals.set(\"id_token\", jsonData.access);",
							"    console.log(\"JWT\", jsonData.access )",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/x-www-form-urlencoded",
						"type": "text"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "username",
							"value": "adam",
							"type": "text"
						},
						{
							"key": "password",
							"value": "",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "{{URL}}/auth/jwt/create",
					"host": [
						"{{URL}}"
					],
					"path": [
						"auth",
						"jwt",
						"create"
					]
				}
			},
			"response": []
		},
		{
			"name": "JWT",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"id": "e06c3134-397b-45b9-a685-9f395f9a0bdc",
						"exec": [
							"pm.globals.set(\"URL\", \"http://localhost:8000\");"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "{{id_token}}",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/x-www-form-urlencoded",
						"type": "text"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "username",
							"value": "adamJestem",
							"type": "text"
						},
						{
							"key": "password",
							"value": "",
							"type": "text"
						},
						{
							"key": "email",
							"value": "kasia@gmail.com",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "{{URL}}/auth/users/",
					"host": [
						"{{URL}}"
					],
					"path": [
						"auth",
						"users",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "DETAILED USERS",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{URL}}/api/accounts/detailed-profiles",
					"host": [
						"{{URL}}"
					],
					"path": [
						"api",
						"accounts",
						"detailed-profiles"
					]
				}
			},
			"response": []
		}
	],
	"protocolProfileBehavior": {}
}