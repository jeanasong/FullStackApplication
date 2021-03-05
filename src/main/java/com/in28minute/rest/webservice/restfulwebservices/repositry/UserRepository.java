package com.in28minute.rest.webservice.restfulwebservices.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.in28minute.rest.webservice.restfulwebservices.entity.User;
@Repository
public interface UserRepository extends JpaRepository <User,Long>{
	
}
