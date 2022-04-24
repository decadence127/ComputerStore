package com.example.computerstorebackend.service.cart;

import com.example.computerstorebackend.model.Cart;
import com.example.computerstorebackend.service.GenericService;

import java.util.Optional;

public interface CartService extends GenericService<Cart> {

    Optional<Cart> findByAccount_Id(Long id);

}
