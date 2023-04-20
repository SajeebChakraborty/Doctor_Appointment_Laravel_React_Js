{
	"info": {
		"_postman_id": "23c39fbd-493b-4628-8074-59320348a268",
		"name": "Doctor_Appointment",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Doctor List",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:8000/api/doctor-list",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8000",
					"path": [
						"api",
						"doctor-list"
					]
				}
			},
			"response": []
		},
		{
			"name": "Information",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "localhost:8000/api/information",
					"host": [
						"localhost"
					],
					"port": "8000",
					"path": [
						"api",
						"information"
					]
				}
			},
			"response": []
		},
		{
			"name": "Add Doctor",
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "localhost:8000/api/add-doctor/process?name=aaAA&phone=4498498",
					"host": [
						"localhost"
					],
					"port": "8000",
					"path": [
						"api",
						"add-doctor",
						"process"
					],
					"query": [
						{
							"key": "name",
							"value": "aaAA"
						},
						{
							"key": "phone",
							"value": "4498498"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Appointment List",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "localhost:8000/api/appointment-list",
					"host": [
						"localhost"
					],
					"port": "8000",
					"path": [
						"api",
						"appointment-list"
					]
				}
			},
			"response": []
		},
		{
			"name": "Doctor Details",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "localhost:8000/api/doctor/24",
					"host": [
						"localhost"
					],
					"port": "8000",
					"path": [
						"api",
						"doctor",
						"24"
					]
				}
			},
			"response": []
		},
		{
			"name": "Add Appointment",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Appointment Search",
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "localhost:8000/api/appointment-search?name=Sumon&date=",
					"host": [
						"localhost"
					],
					"port": "8000",
					"path": [
						"api",
						"appointment-search"
					],
					"query": [
						{
							"key": "name",
							"value": "Sumon"
						},
						{
							"key": "date",
							"value": ""
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Register User",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		}
	]
}