package com.in28minute.rest.webservice.restfulwebservices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.in28minute.rest.webservice.restfulwebservices.entity.User;
import com.in28minute.rest.webservice.restfulwebservices.repositry.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> getAllUser(){
		System.out.println("getAlluser");
		return this.userRepository.findAll();
		
	}
}
