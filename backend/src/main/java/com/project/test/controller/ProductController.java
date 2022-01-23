package com.project.test.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.test.model.ProductModel;
import com.project.test.repository.ProductRepository;


@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {
	
	@Autowired
	private ProductRepository repository;
	
	@GetMapping
	public ResponseEntity<List<ProductModel>> getAll(){
        return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/id/{idProduct}")
	public ResponseEntity<ProductModel> getById(@PathVariable long idProduct){
        return repository.findById(idProduct).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/name/{nameProduct}")
	public ResponseEntity<List<ProductModel>> getByName (@PathVariable String nameProduct){
		return ResponseEntity.ok(repository.findAllByNameProductContainingIgnoreCase(nameProduct));
	}	
	
	@PostMapping
	public ResponseEntity<ProductModel> post (@Valid @RequestBody ProductModel product){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(product));
	}
	
	@PutMapping
	public ResponseEntity<ProductModel> put (@Valid @RequestBody ProductModel product){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(product));
	}
	
	@DeleteMapping("/{idProduct}")
	public void delete(@PathVariable Long idProduct) {
		repository.deleteById(idProduct);
	}
}
