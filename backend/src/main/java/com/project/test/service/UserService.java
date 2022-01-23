package com.project.test.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.test.model.UserLogin;
import com.project.test.model.UserModel;
import com.project.test.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
	
	public UserModel RegisterUser(UserModel user) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		String encoderPassword = encoder.encode(user.getPassword());
		user.setPassword(encoderPassword);
		
		return repository.save(user);
	}
	
	public Optional<UserLogin> Log(Optional<UserLogin> user){
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Optional<UserModel> userModel = repository.findByEmail(user.get().getEmail());
		
		if(user.isPresent()) {
			if(encoder.matches(user.get().getPassword(), userModel.get().getPassword())) {
				
				String auth = user.get().getEmail() + ":" + user.get().getPassword();
				byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = " Basic " + new String(encodedAuth);
				
				user.get().setToken(authHeader);
				user.get().setIdUser(userModel.get().getIdUser());
				user.get().setEmail(userModel.get().getEmail());
				user.get().setName(userModel.get().getName());
				
				return user;
			}
		}
		
		return null;
	}

}


