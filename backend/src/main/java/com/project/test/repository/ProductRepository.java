package com.project.test.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.test.model.ProductModel;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, Long>{
	public List<ProductModel> findAllByNameProductContainingIgnoreCase(String nameProduct);
}
