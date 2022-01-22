package com.project.test.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.test.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long>{
	public Optional<UserModel> findByEmail(String email);
}
