package com.example.computerstorebackend.repository;

import com.example.computerstorebackend.model.Cart;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepo extends GenericRepository<Cart>{

    Optional<Cart> findByAccount_Id(Long id);

}
