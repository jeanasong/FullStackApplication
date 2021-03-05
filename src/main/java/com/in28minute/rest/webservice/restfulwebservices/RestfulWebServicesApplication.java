package com.in28minute.rest.webservice.restfulwebservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class RestfulWebServicesApplication {

	public static void main(String[] args) {
		System.out.println("main backing");
		SpringApplication.run(RestfulWebServicesApplication.class, args);
	}
}
